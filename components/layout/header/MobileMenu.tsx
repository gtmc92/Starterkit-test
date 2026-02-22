'use client'

// 모바일용 네비게이션 메뉴 (Sheet 드로어)
// lg (1024px) 미만에서만 표시됨

import { useState } from 'react'
import { mainNav } from '@/lib/constants/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/constants/site'

/**
 * 모바일용 네비게이션 메뉴 (Sheet 드로어)
 *
 * 기능:
 * - 햄버거 아이콘 클릭 시 Sheet 드로어 열기
 * - 링크 클릭 시 자동으로 드로어 닫기
 * - 현재 경로에 해당하는 링크 하이라이트
 * - 반응형: lg 미만에서만 표시 (Tailwind lg:hidden)
 */
export function MobileMenu() {
  // Sheet 드로어 열기/닫기 상태
  const [open, setOpen] = useState(false)
  // 현재 경로 가져오기
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          title="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>

        {/* 네비게이션 링크 목록 */}
        <nav className="mt-8 flex flex-col space-y-1">
          {mainNav.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)} // 링크 클릭 시 드로어 닫기
                className={cn(
                  // 기본 스타일: padding, text size
                  'px-3 py-2 rounded-md transition-colors text-sm',
                  // 활성 링크: 배경색 추가
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

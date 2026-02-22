'use client'

// 데스크탑 네비게이션 메뉴 컴포넌트
// lg (1024px) 이상에서만 표시됨

import { mainNav } from '@/lib/constants/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

/**
 * 데스크탑용 네비게이션 메뉴
 *
 * 기능:
 * - mainNav 상수에서 링크 데이터 가져오기
 * - 현재 경로에 해당하는 링크 하이라이트
 * - 반응형: lg 이상에서만 표시 (Tailwind hidden lg:flex)
 */
export function NavMenu() {
  // 현재 경로 가져오기 (활성 링크 표시에 사용)
  const pathname = usePathname()

  return (
    <nav className="hidden items-center space-x-1 lg:flex">
      {mainNav.map((item) => {
        // 현재 경로가 링크 경로와 같으면 활성 상태로 표시
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              // 기본 스타일: padding, transition
              'px-3 py-2 text-sm font-medium rounded-md transition-colors',
              // 활성 링크: 배경색 추가
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

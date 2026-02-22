// 사이드바 네비게이션 링크 컴포넌트

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavLink } from '@/lib/constants/nav'

interface SidebarNavProps {
  items: NavLink[]
}

/**
 * 사이드바 네비게이션 링크 컴포넌트
 *
 * 기능:
 * - 링크 목록 렌더링
 * - 현재 경로에 해당하는 링크 하이라이트
 * - 아이콘 표시 (lucide-react)
 * - 반응형: 아이콘만 표시하거나 텍스트와 함께 표시
 */
export function SidebarNav({ items }: SidebarNavProps) {
  // 현재 경로 가져오기 (활성 링크 표시에 사용)
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      {items.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              // 기본 스타일: padding, rounded, transition
              'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              // 활성 링크
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {/* 아이콘이 있으면 표시 (나중에 icon을 컴포넌트로 변환 가능) */}
            {item.icon && <span className="text-base">{item.icon}</span>}
            {/* 텍스트 */}
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

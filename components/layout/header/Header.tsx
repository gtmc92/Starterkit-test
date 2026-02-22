// 메인 헤더 컴포넌트
// NavMenu, MobileMenu, ThemeToggle을 조합

import Link from 'next/link'
import { NavMenu } from './NavMenu'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/constants/site'

/**
 * 메인 헤더 컴포넌트
 *
 * 구조:
 * - 좌측: 사이트 로고/이름
 * - 중앙: 데스크탑 네비게이션 (NavMenu)
 * - 우측: 다크모드 토글, 로그인 버튼, 모바일 메뉴 (MobileMenu)
 *
 * 스타일:
 * - sticky: 스크롤해도 상단에 고정
 * - backdrop-blur: 배경 흐림 효과 (모던한 느낌)
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* 좌측: 로고/사이트명 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
            C
          </div>
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* 중앙: 데스크탑 네비게이션 */}
        <NavMenu />

        {/* 우측: 토글, 버튼, 모바일 메뉴 */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            로그인
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

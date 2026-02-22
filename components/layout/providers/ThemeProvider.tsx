'use client'

// next-themes을 사용한 다크모드 구현
// attribute="class" 방식: html 태그에 .dark 클래스를 추가/제거하여 다크모드 제어
// SSR 안전: 초기 렌더링 시 깜빡임이 없음

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * 다크모드 지원 Provider 컴포넌트
 *
 * 기능:
 * - attribute="class": html 요소에 .dark 클래스 추가/제거
 * - defaultTheme="system": 시스템 설정을 기본값으로 사용
 * - enableSystem: 시스템 다크모드 설정 감지
 * - disableTransitionOnChange: 테마 변경 시 애니메이션 효과 제거
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

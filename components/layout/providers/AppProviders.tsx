'use client'

// 모든 Provider를 통합하는 컴포넌트
// app/layout.tsx에서 한 번만 import하면 됨
// Provider 추가/제거 시 이 파일만 수정하면 됨

import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { QueryProvider } from './QueryProvider'

interface AppProvidersProps {
  children: ReactNode
}

/**
 * 애플리케이션 전체에 필요한 모든 Provider를 통합
 *
 * Provider 순서가 중요함:
 * 1. ThemeProvider (테마 설정)
 * 2. QueryProvider (서버 상태 관리)
 * 3. 추가 Provider들...
 *
 * 각 Provider는 자식 Provider들이 useTheme, useQuery 등을 사용할 수 있도록 함
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ThemeProvider>
  )
}

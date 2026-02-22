'use client'

// TanStack Query (React Query) 설정
// 서버 상태(API 데이터) 관리를 위한 강력한 라이브러리
// 자동 캐싱, 백그라운드 리페치, 동기화 기능 제공

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface QueryProviderProps {
  children: ReactNode
}

/**
 * TanStack Query Provider 컴포넌트
 *
 * QueryClient 인스턴스를 생성하여 React Query 기능 제공
 * 모든 useQuery, useMutation 훅이 이 Provider 내에서 동작
 */
export function QueryProvider({ children }: QueryProviderProps) {
  // 클라이언트 컴포넌트에서는 반드시 useState로 QueryClient 생성
  // 서버 렌더링과 클라이언트 렌더링의 불일치를 방지하기 위함
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 데이터를 이 기간 동안 캐시에 유지 (밀리초)
            staleTime: 1000 * 60 * 5, // 5분
            // 화면을 떠났을 때 백그라운드에서 리페치할지 여부
            gcTime: 1000 * 60 * 10, // 10분 후 캐시에서 제거
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

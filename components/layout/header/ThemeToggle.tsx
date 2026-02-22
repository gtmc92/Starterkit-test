'use client'

// 다크모드 토글 버튼 컴포넌트
// next-themes의 useTheme 훅을 사용하여 테마 전환

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * 다크모드 토글 버튼
 *
 * 기능:
 * - 현재 테마 감지 (light / dark)
 * - 클릭 시 테마 전환
 * - 마운트 전까지 상태 없음 (hydration mismatch 방지)
 */
export function ThemeToggle() {
  // next-themes에서 현재 테마와 변경 함수 가져오기
  const { theme, setTheme } = useTheme()

  // 마운트된 상태를 추적 (클라이언트 사이드에서만 렌더링)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 마운트되지 않았으면 아무것도 렌더링하지 않음 (SSR 안전)
  if (!isMounted) {
    return null
  }

  const handleToggle = () => {
    // 현재 테마에 따라 반대 테마로 전환
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      title={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}
    >
      {/* 다크 모드일 때 태양 아이콘, 라이트 모드일 때 달 아이콘 */}
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">다크모드 토글</span>
    </Button>
  )
}

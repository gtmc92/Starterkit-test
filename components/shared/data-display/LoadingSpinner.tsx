// 로딩 상태를 표시하는 스피너 컴포넌트

import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  // 스피너 크기 (Tailwind 크기 값)
  size?: 'sm' | 'md' | 'lg'
  // 스피너 아래 표시할 로딩 메시지
  message?: string
  // 전체 높이를 채울지 여부
  fullHeight?: boolean
}

/**
 * 로딩 스피너 컴포넌트
 *
 * 사용 예:
 * <LoadingSpinner size="lg" message="데이터를 불러오는 중..." />
 */
export function LoadingSpinner({
  size = 'md',
  message,
  fullHeight = true,
}: LoadingSpinnerProps) {
  // 크기별 아이콘 크기 매핑
  const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${fullHeight ? 'min-h-[300px]' : ''}`}
    >
      {/* 로딩 아이콘 (애니메이션) */}
      <Loader2 className={`${sizeMap[size]} animate-spin text-primary`} />

      {/* 로딩 메시지 */}
      {message && (
        <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  )
}

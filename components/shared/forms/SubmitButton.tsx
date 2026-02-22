// 폼 제출 버튼 컴포넌트
// 로딩 상태를 자동으로 표시

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface SubmitButtonProps {
  // 버튼에 표시될 텍스트
  children: ReactNode
  // 로딩 중인지 여부 (폼 제출 중일 때 true)
  isLoading?: boolean
  // 로딩 중에 표시될 텍스트 (기본값: "처리 중...")
  loadingText?: string
  // 버튼이 비활성화되어야 하는지 여부
  disabled?: boolean
  // 버튼의 시각적 스타일
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'destructive'
  // 버튼의 크기
  size?: 'default' | 'sm' | 'lg' | 'icon'
  // 전체 너비인지 여부
  fullWidth?: boolean
  // 클릭 이벤트 핸들러
  onClick?: () => void
}

/**
 * 폼 제출 버튼 컴포넌트
 *
 * 기능:
 * - 로딩 상태에서 로딩 아이콘 표시
 * - 로딩 중일 때 자동으로 비활성화
 * - 로딩 상태 텍스트 커스터마이징 가능
 *
 * 사용 예:
 * <SubmitButton isLoading={isLoading}>
 *   로그인
 * </SubmitButton>
 */
export function SubmitButton({
  children,
  isLoading = false,
  loadingText = '처리 중...',
  disabled = false,
  variant = 'default',
  size = 'default',
  fullWidth = false,
  onClick,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading || disabled}
      variant={variant}
      size={size}
      className={fullWidth ? 'w-full' : ''}
      onClick={onClick}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  )
}

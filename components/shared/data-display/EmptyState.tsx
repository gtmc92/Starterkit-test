// 데이터가 없는 상태를 표시하는 컴포넌트

import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  // 아이콘 컴포넌트 (lucide-react)
  icon: LucideIcon
  // 제목
  title: string
  // 설명
  description?: string
  // 액션 버튼 (선택사항)
  action?: {
    label: string
    onClick: () => void
  }
  // 커스텀 콘텐츠 (원할 경우)
  children?: ReactNode
}

/**
 * 데이터가 없는 상태를 표시하는 컴포넌트
 *
 * 사용 예:
 * <EmptyState
 *   icon={InboxIcon}
 *   title="데이터가 없습니다"
 *   description="아직 데이터가 없어요. 새로 생성해보세요!"
 *   action={{
 *     label: "새로 만들기",
 *     onClick: () => navigate('/create')
 *   }}
 * />
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6">
      {/* 아이콘 */}
      <Icon className="h-12 w-12 text-muted-foreground mb-4" />

      {/* 제목 */}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      {/* 설명 */}
      {description && (
        <p className="text-sm text-muted-foreground mb-4 text-center max-w-xs">
          {description}
        </p>
      )}

      {/* 커스텀 콘텐츠 */}
      {children}

      {/* 액션 버튼 */}
      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  )
}

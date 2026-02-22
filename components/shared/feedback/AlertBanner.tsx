// 페이지 레벨 알림 배너 컴포넌트

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useState } from 'react'

type AlertVariant = 'default' | 'destructive'

interface AlertBannerProps {
  // 알림 제목
  title: string
  // 알림 설명
  description?: string
  // 알림 종류 (default: 파란색, destructive: 빨간색)
  variant?: AlertVariant
  // 아이콘 (lucide-react)
  icon: LucideIcon
  // 닫기 버튼 표시 여부
  closeable?: boolean
  // 닫기 클릭 시 콜백
  onClose?: () => void
  // 액션 버튼 (선택사항)
  action?: {
    label: string
    onClick: () => void
  }
  // 초기에 보이는지 여부
  visible?: boolean
}

/**
 * 페이지 레벨 알림 배너 컴포넌트
 *
 * 사용 예:
 * <AlertBanner
 *   title="시스템 점검 중입니다"
 *   description="2024년 2월 22일 22:00 ~ 23:00 (1시간)"
 *   variant="default"
 *   icon={InfoIcon}
 *   closeable
 * />
 */
export function AlertBanner({
  title,
  description,
  variant = 'default',
  icon: Icon,
  closeable = true,
  onClose,
  action,
  visible = true,
}: AlertBannerProps) {
  // 배너 표시 여부 (닫기 버튼으로 제어)
  const [isVisible, setIsVisible] = useState(visible)

  if (!isVisible) {
    return null
  }

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  return (
    <div className="mb-4 w-full">
      <Alert variant={variant} className="relative">
        {/* 아이콘 */}
        <Icon className="h-5 w-5 absolute left-4 top-4" />

        {/* 콘텐츠 (아이콘 간격 확보) */}
        <div className="pl-8">
          <AlertTitle>{title}</AlertTitle>
          {description && <AlertDescription>{description}</AlertDescription>}

          {/* 액션 버튼 */}
          {action && (
            <Button
              variant="link"
              size="sm"
              onClick={action.onClick}
              className="mt-2 h-auto p-0"
            >
              {action.label}
            </Button>
          )}
        </div>

        {/* 닫기 버튼 */}
        {closeable && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-6 w-6"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">닫기</span>
          </Button>
        )}
      </Alert>
    </div>
  )
}

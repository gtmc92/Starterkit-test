'use client'

// 확인/취소 다이얼로그 컴포넌트

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

interface ConfirmDialogProps {
  // 다이얼로그 제목
  title: string
  // 다이얼로그 설명/메시지
  description: string
  // 트리거 버튼 텍스트
  triggerLabel: string
  // 확인 버튼 텍스트 (기본값: "확인")
  confirmLabel?: string
  // 취소 버튼 텍스트 (기본값: "취소")
  cancelLabel?: string
  // 확인 클릭 시 콜백
  onConfirm: () => void | Promise<void>
  // 취소 클릭 시 콜백 (선택사항)
  onCancel?: () => void
  // 확인 버튼이 위험한 액션인지 (red 색상)
  isDestructive?: boolean
  // 다이얼로그가 열려있는지 여부 (외부에서 제어하고 싶을 때)
  open?: boolean
  // 열림/닫힘 상태 변경 핸들러
  onOpenChange?: (open: boolean) => void
}

/**
 * 확인/취소 다이얼로그 컴포넌트
 *
 * 사용 예:
 * <ConfirmDialog
 *   title="정말 삭제할까요?"
 *   description="이 작업은 되돌릴 수 없습니다."
 *   triggerLabel="삭제"
 *   confirmLabel="확인"
 *   isDestructive
 *   onConfirm={async () => {
 *     await deleteItem(id)
 *   }}
 * />
 */
export function ConfirmDialog({
  title,
  description,
  triggerLabel,
  confirmLabel = '확인',
  cancelLabel = '취소',
  onConfirm,
  onCancel,
  isDestructive = false,
  open,
  onOpenChange,
}: ConfirmDialogProps) {
  // 내부 상태 (외부에서 제어하지 않을 때)
  const [internalOpen, setInternalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 외부에서 제어하지 않으면 내부 상태 사용
  const isOpen = open !== undefined ? open : internalOpen
  const handleOpenChange = onOpenChange || setInternalOpen

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await onConfirm()
      handleOpenChange(false)
    } catch (error) {
      console.error('ConfirmDialog error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    handleOpenChange(false)
    onCancel?.()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/* 트리거 버튼 (open/onOpenChange가 외부에서 제어될 때는 표시 안 함) */}
      {open === undefined && (
        <Button
          variant={isDestructive ? 'destructive' : 'outline'}
          onClick={() => handleOpenChange(true)}
        >
          {triggerLabel}
        </Button>
      )}

      <DialogContent>
        <DialogHeader>
          <div className="flex items-start gap-4">
            {isDestructive && (
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
            )}
            <div>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="mt-2">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={isDestructive ? 'destructive' : 'default'}
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? '처리 중...' : confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// 통계 정보를 표시하는 카드 컴포넌트

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface StatCardProps {
  // 카드 제목
  title: string
  // 큰 숫자 값 (예: "1,234")
  value: string | number
  // 설명 텍스트 (선택사항)
  description?: string
  // 변화량 표시 (선택사항)
  change?: {
    value: string | number // 변화량 (예: "+12" 또는 "-5")
    positive?: boolean       // 긍정적인 변화인지 (색상 결정)
  }
  // 아이콘 (선택사항)
  icon?: LucideIcon
  // 커스텀 콘텐츠 (원할 경우)
  children?: ReactNode
}

/**
 * 통계 정보를 표시하는 카드 컴포넌트
 *
 * 사용 예:
 * <StatCard
 *   title="총 사용자"
 *   value="1,234"
 *   description="지난 달 대비"
 *   change={{ value: "+12%", positive: true }}
 *   icon={UsersIcon}
 * />
 */
export function StatCard({
  title,
  value,
  description,
  change,
  icon: Icon,
  children,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
      </CardHeader>

      <CardContent>
        {/* 큰 숫자 값 */}
        <div className="text-2xl font-bold">{value}</div>

        {/* 설명 + 변화량 배지 */}
        <div className="flex items-center justify-between mt-2">
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          {change && (
            <Badge
              variant={change.positive ? 'default' : 'secondary'}
              className="text-xs"
            >
              {change.positive ? '+' : ''}{change.value}
            </Badge>
          )}
        </div>

        {/* 커스텀 콘텐츠 */}
        {children}
      </CardContent>
    </Card>
  )
}

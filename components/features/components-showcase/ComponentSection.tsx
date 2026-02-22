// 컴포넌트 쇼케이스 섹션
// 컴포넌트들을 카테고리별로 그룹화하여 표시하는 서버 컴포넌트

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ComponentSection as ComponentSectionType } from './component-data'

interface ComponentSectionProps {
  // 섹션 데이터 (제목, 설명, 카테고리들)
  section: ComponentSectionType
}

/**
 * ComponentSection 컴포넌트
 *
 * 기능:
 * - 컴포넌트 섹션 제목과 설명 표시
 * - 카테고리별로 그룹화된 컴포넌트 카드 표시
 * - 각 컴포넌트의 이름, 설명, 경로, 태그 표시
 */
export function ComponentSection({ section }: ComponentSectionProps) {
  return (
    <div className="space-y-12">
      {/* 섹션 헤더 */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">{section.title}</h2>
        <p className="text-lg text-muted-foreground">{section.description}</p>
      </div>

      {/* 카테고리 그룹 */}
      <div className="space-y-8">
        {section.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* 카테고리 제목 */}
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {category.categoryTitle}
            </h3>

            {/* 컴포넌트 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {category.items.map((component, componentIndex) => (
                <Card
                  key={componentIndex}
                  className="hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    {/* 컴포넌트 이름 */}
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base font-mono">
                        {component.name}
                      </CardTitle>
                    </div>

                    {/* 경로 표시 */}
                    <CardDescription className="text-xs font-mono text-muted-foreground">
                      {component.path}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* 설명 */}
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>

                    {/* 태그 */}
                    {component.tags && component.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {component.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 카테고리 간 구분선 */}
            {categoryIndex < section.categories.length - 1 && (
              <Separator className="mb-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

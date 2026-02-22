// 컴포넌트 라이브러리 쇼케이스 페이지
// shadcn/ui 26개 + 공통 7개 + 레이아웃 8개 컴포넌트 표시

import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { ComponentSection } from '@/components/features/components-showcase/ComponentSection'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  shadcnComponents,
  customComponents,
  layoutComponents,
} from '@/components/features/components-showcase/component-data'
import { Blocks } from 'lucide-react'

/**
 * /components 페이지
 *
 * 기능:
 * - 모든 사용 가능한 컴포넌트 목록 표시
 * - 컴포넌트를 3가지 섹션으로 분류 (shadcn/ui, 공통 커스텀, 레이아웃)
 * - 각 컴포넌트의 경로, 설명, 태그 표시
 */
export default function ComponentsPage() {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="w-full">
        {/* 히어로 섹션 */}
        <section className="w-full py-12 md:py-24 border-b">
          <div className="container max-w-screen-lg px-4">
            <div className="text-center max-w-3xl mx-auto">
              {/* 아이콘 */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex h-16 w-16 rounded-lg bg-primary/10 text-primary items-center justify-center">
                  <Blocks className="h-8 w-8" />
                </div>
              </div>

              {/* 제목 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                컴포넌트 라이브러리
              </h1>

              {/* 설명 */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                이 스타터킷에 포함된 모든 컴포넌트를 한눈에 확인할 수 있습니다.
                <br />
                shadcn/ui 컴포넌트부터 커스텀 컴포넌트까지 총
                <br />
                <span className="font-bold text-foreground">41개의 재사용 가능한 컴포넌트</span>
                를 제공합니다.
              </p>

              {/* 통계 배지 */}
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="px-3 py-1 text-sm">
                  shadcn/ui 26개
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  공통 커스텀 7개
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  레이아웃 8개
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* shadcn/ui 컴포넌트 섹션 */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-lg px-4">
            <ComponentSection section={shadcnComponents} />
          </div>
        </section>

        {/* 구분선 */}
        <div className="container max-w-screen-lg px-4">
          <Separator />
        </div>

        {/* 공통 커스텀 컴포넌트 섹션 */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-lg px-4">
            <ComponentSection section={customComponents} />
          </div>
        </section>

        {/* 구분선 */}
        <div className="container max-w-screen-lg px-4">
          <Separator />
        </div>

        {/* 레이아웃 컴포넌트 섹션 */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-lg px-4">
            <ComponentSection section={layoutComponents} />
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}

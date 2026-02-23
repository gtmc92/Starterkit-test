// 랜딩 페이지 Hero 섹션

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'

/**
 * 랜딩 페이지 Hero 섹션
 *
 * 기능:
 * - 큰 제목과 설명
 * - 주요 CTA 버튼
 * - 배경 그라디언트
 */
export function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px]">
        <div className="container max-w-screen-md px-4 text-center">
          {/* 배지 */}
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">
              🎉 새로운 모던 웹 스타터킷이 출시되었습니다
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-balance">
            <span className="block">Next.js 기반</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              모던 웹 스타터킷
            </span>
          </h1>

          {/* 설명 */}
          <p className="text-lg text-muted-foreground sm:text-xl mb-8 max-w-2xl mx-auto">
            Next.js 15 + React 19 + Tailwind CSS + TypeScript로 구성된
            프로덕션 레벨의 웹 애플리케이션을 빠르게 시작하세요.
            Atomic Design, shadcn/ui, Zustand, React Query 등 검증된 도구들이
            모두 준비되어 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#features" className="gap-2">
                시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub에서 보기
              </a>
            </Button>
          </div>

          {/* 통계 */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold">25+</div>
              <p className="text-sm text-muted-foreground">UI 컴포넌트</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">레이아웃 계층</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">100%</div>
              <p className="text-sm text-muted-foreground">TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

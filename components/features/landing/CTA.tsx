// 랜딩 페이지 CTA (Call-to-Action) 섹션

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

/**
 * 랜딩 페이지 CTA 섹션
 *
 * 기능:
 * - 최종 행동 유도 섹션
 * - 가입, 시작하기 등의 주요 버튼
 */
export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted/50">
      <div className="container max-w-screen-lg px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* 제목 */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            지금 바로 시작하세요
          </h2>

          {/* 설명 */}
          <p className="text-lg text-muted-foreground mb-8">
            모던 웹 스타터킷으로 프로덕션 레벨의 웹 애플리케이션을
            빠르게 구축하고 배포할 수 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/docs" className="gap-2">
                시작 가이드 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/components">컴포넌트 살펴보기</Link>
            </Button>
          </div>

          {/* 추가 정보 */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-1">
                무료
              </div>
              <p className="text-sm text-muted-foreground">
                오픈소스 MIT 라이선스
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-1">
                빠름
              </div>
              <p className="text-sm text-muted-foreground">
                몇 분 만에 시작
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-1">
                유지보수
              </div>
              <p className="text-sm text-muted-foreground">
                정기적인 업데이트
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

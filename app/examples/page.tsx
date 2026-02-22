// 실전 코드 예제 페이지
// 폼, 대시보드, 테이블, 다이얼로그 실전 예제 포함

import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { ExamplesHero } from '@/components/features/examples/ExamplesHero'
import { ExamplesTabs } from '@/components/features/examples/ExamplesTabs'

/**
 * /examples 페이지
 *
 * 기능:
 * - 실전 코드 예제 및 패턴 학습
 * - 폼, 대시보드, 테이블, 다이얼로그 예제
 * - 동작하는 컴포넌트 + 소스 코드 스니펫
 */
export default function ExamplesPage() {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="w-full">
        {/* Hero 섹션 */}
        <ExamplesHero />

        {/* 탭 섹션 */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-lg px-4">
            <ExamplesTabs />
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}

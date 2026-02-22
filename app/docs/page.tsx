// 스타터킷 사용 가이드 페이지
// Hero 섹션과 4개 탭 (시작하기, 기술 스택, 폴더 구조, 환경설정)

import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { DocsHero } from '@/components/features/docs/DocsHero'
import { DocsTabs } from '@/components/features/docs/DocsTabs'

/**
 * /docs 페이지
 *
 * 기능:
 * - 스타터킷 설치 및 사용 가이드
 * - 기술 스택 소개
 * - 폴더 구조 설명
 * - 환경설정 안내
 */
export default function DocsPage() {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="w-full">
        {/* Hero 섹션 */}
        <DocsHero />

        {/* 탭 섹션 */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-screen-lg px-4">
            <DocsTabs />
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}

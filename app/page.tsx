// 메인 랜딩 페이지
// Hero, Features, CTA 섹션 포함

import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { Hero } from '@/components/features/landing/Hero'
import { Features } from '@/components/features/landing/Features'
import { CTA } from '@/components/features/landing/CTA'

export default function Home() {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="w-full">
        {/* Hero 섹션: 큰 제목과 설명 */}
        <Hero />

        {/* Features 섹션: 주요 기능 */}
        <Features />

        {/* CTA 섹션: 행동 유도 */}
        <CTA />
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}

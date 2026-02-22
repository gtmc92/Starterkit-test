// 문서(Docs) 페이지 히어로 섹션
// 제목과 설명을 표시하는 서버 컴포넌트

/**
 * DocsHero 컴포넌트
 *
 * 기능:
 * - 페이지 제목 (대형)
 * - 페이지 설명
 */
export function DocsHero() {
  return (
    <section className="w-full py-12 md:py-24 border-b">
      <div className="container max-w-screen-lg px-4">
        {/* 히어로 콘텐츠 */}
        <div className="mx-auto text-center max-w-3xl">
          {/* 제목 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            스타터킷 사용 가이드
          </h1>

          {/* 설명 */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Next.js 16과 React 19 기반의 모던 웹 스타터킷을 시작하는
            <br />
            모든 것을 배울 수 있습니다.
            <br />
            설치 방법부터 프로젝트 구조, 기술 스택까지 자세히 알아보세요.
          </p>
        </div>
      </div>
    </section>
  )
}

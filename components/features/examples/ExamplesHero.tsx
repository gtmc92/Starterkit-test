// 예제(Examples) 페이지 히어로 섹션
// 제목과 설명을 표시하는 서버 컴포넌트

/**
 * ExamplesHero 컴포넌트
 *
 * 기능:
 * - 페이지 제목 (대형)
 * - 페이지 설명
 */
export function ExamplesHero() {
  return (
    <section className="w-full py-12 md:py-24 border-b">
      <div className="container max-w-screen-lg px-4">
        {/* 히어로 콘텐츠 */}
        <div className="mx-auto text-center max-w-3xl">
          {/* 제목 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            실전 코드 예제
          </h1>

          {/* 설명 */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            컴포넌트 사용 방법과 실전 패턴을 코드 예제로 배웁니다.
            <br />
            각 탭에서 동작하는 예제와 함께 소스 코드를 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

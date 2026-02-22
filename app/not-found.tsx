// 커스텀 404 Not Found 페이지

import Link from 'next/link'
import { Button } from '@/components/ui/button'

/**
 * 404 Not Found 페이지
 *
 * 기능:
 * - 존재하지 않는 페이지에 접속했을 때 표시
 * - 홈으로 돌아가기 버튼 제공
 * - 브랜드 일관성 있는 디자인
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        {/* 404 숫자 */}
        <div className="mb-6">
          <h1 className="text-7xl md:text-9xl font-bold text-primary/20 mb-2">
            404
          </h1>
        </div>

        {/* 제목 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          페이지를 찾을 수 없습니다
        </h2>

        {/* 설명 */}
        <p className="text-lg text-muted-foreground mb-8">
          요청하신 페이지가 존재하지 않습니다.
          <br />
          올바른 경로를 확인하고 다시 시도해주세요.
        </p>

        {/* 홈으로 돌아가기 버튼 */}
        <Link href="/">
          <Button className="w-full md:w-auto">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  )
}

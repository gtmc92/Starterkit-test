// 랜딩 페이지 Features 섹션

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Package,
  Zap,
  Shield,
  PieChart,
  Layers,
  Code2,
} from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

/**
 * 랜딩 페이지 Features 섹션
 *
 * 기능:
 * - 주요 기능들을 카드로 표시
 * - 아이콘, 제목, 설명
 */
export function Features() {
  // 기능 목록
  const features: Feature[] = [
    {
      icon: <Package className="h-6 w-6" />,
      title: '완벽한 기본 설정',
      description:
        'Next.js 15, React 19, TypeScript, Tailwind CSS v4가 모두 준비되어 있습니다.',
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Atomic Design',
      description:
        '4계층 (Atoms, Molecules, Organisms, Templates)으로 체계적으로 구조화된 컴포넌트.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: '성능 최적화',
      description:
        'React Query, Zustand로 상태 관리를 효율적으로 처리하고 번들 크기를 최소화합니다.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: '타입 안전성',
      description:
        '100% TypeScript 지원으로 런타임 에러를 사전에 방지하고 개발 생산성을 높입니다.',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'shadcn/ui 컴포넌트',
      description:
        '25개 이상의 미리 설정된 shadcn/ui 컴포넌트로 빠르게 UI를 구축하세요.',
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: '확장 가능한 구조',
      description:
        '명확한 폴더 구조와 패턴으로 프로젝트 성장에 맞춰 쉽게 확장할 수 있습니다.',
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container max-w-screen-lg px-4">
        {/* 섹션 헤더 */}
        <div className="mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            주요 기능
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            프로덕션 레벨의 웹 애플리케이션을 빠르게 시작할 수 있는
            모든 도구와 컴포넌트가 준비되어 있습니다.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 text-primary items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

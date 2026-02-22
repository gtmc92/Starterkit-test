'use client'

// 문서 페이지 탭 컴포넌트
// 시작하기, 기술 스택, 폴더 구조, 환경설정 4개 탭 포함

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Zap,
  Layers,
  Sliders,
  Folder,
  Code2,
  Terminal,
  Package,
} from 'lucide-react'

/**
 * DocsTabs 컴포넌트
 *
 * 기능:
 * - 시작하기: 4단계 설치 가이드 (명령어 카드)
 * - 기술 스택: 8개 기술 소개
 * - 폴더 구조: 프로젝트 디렉토리 레이아웃
 * - 환경설정: 주요 설정 파일 안내
 */
export function DocsTabs() {
  // 설치 단계 데이터
  const installSteps = [
    {
      step: 1,
      title: '저장소 복제하기',
      description: '프로젝트를 로컬 환경에 복제합니다.',
      command: 'git clone <repository-url>',
    },
    {
      step: 2,
      title: '의존성 설치하기',
      description: '필요한 모든 패키지를 설치합니다.',
      command: 'npm install',
    },
    {
      step: 3,
      title: '환경변수 설정하기',
      description: '.env.local 파일을 생성하고 필요한 값을 입력합니다.',
      command: 'cp .env.example .env.local',
    },
    {
      step: 4,
      title: '개발 서버 실행하기',
      description: 'localhost:3000에서 프로젝트를 확인할 수 있습니다.',
      command: 'npm run dev',
    },
  ]

  // 기술 스택 데이터
  const techStack = [
    {
      name: 'Next.js 16',
      version: 'App Router',
      description: '최신 풀스택 프레임워크',
      icon: Code2,
    },
    {
      name: 'React 19',
      version: '최신',
      description: '선언적 UI 라이브러리',
      icon: Zap,
    },
    {
      name: 'TypeScript',
      version: '5.x',
      description: '정적 타입 언어',
      icon: Code2,
    },
    {
      name: 'Tailwind CSS v4',
      version: '최신',
      description: '유틸리티 기반 CSS 프레임워크',
      icon: Zap,
    },
    {
      name: 'shadcn/ui',
      version: '26개 컴포넌트',
      description: '재사용 가능한 UI 컴포넌트',
      icon: Layers,
    },
    {
      name: 'Zustand',
      version: '상태관리',
      description: '간편한 클라이언트 상태 관리',
      icon: Zap,
    },
    {
      name: 'TanStack Query',
      version: '캐싱/동기화',
      description: '서버 상태 관리 및 캐싱',
      icon: Zap,
    },
    {
      name: 'react-hook-form + Zod',
      version: '폼/유효성',
      description: '효율적인 폼 처리와 검증',
      icon: Code2,
    },
  ]

  // 폴더 구조 데이터
  const folderStructure = `
프로젝트/
├── app/
│   ├── layout.tsx           # 루트 레이아웃 (AppProviders, Toaster)
│   ├── page.tsx             # 메인 랜딩 페이지
│   ├── globals.css          # 전역 스타일
│   ├── docs/
│   │   └── page.tsx         # 문서 페이지
│   ├── components/
│   │   └── page.tsx         # 컴포넌트 쇼케이스
│   ├── examples/
│   │   └── page.tsx         # 코드 예제
│   └── not-found.tsx        # 404 페이지
├── components/
│   ├── ui/                  # shadcn/ui 컴포넌트들
│   ├── layout/
│   │   ├── header/          # Header 컴포넌트
│   │   └── footer/          # Footer 컴포넌트
│   ├── features/
│   │   ├── landing/         # 랜딩 페이지 컴포넌트
│   │   ├── docs/            # 문서 페이지 컴포넌트
│   │   ├── components-showcase/  # 컴포넌트 쇼케이스
│   │   └── examples/        # 예제 컴포넌트
│   └── shared/
│       └── data-display/    # StatCard 등 공통 컴포넌트
├── lib/
│   ├── constants/           # 상수 (site.ts, nav.ts)
│   └── validations/         # Zod 스키마
├── store/
│   └── ui-store.ts          # Zustand UI 상태 저장소
├── types/
│   ├── index.ts             # 타입 정의
│   ├── auth.ts              # 인증 관련 타입
│   └── api.ts               # API 관련 타입
└── package.json             # 의존성 정보
  `

  // 환경설정 파일 정보
  const configFiles = [
    {
      file: 'next.config.ts',
      description: 'Next.js 설정',
      note: 'App Router, 동적 라우팅 등',
    },
    {
      file: 'tsconfig.json',
      description: 'TypeScript 설정',
      note: '@/* 경로 별칭, strict 모드',
    },
    {
      file: 'tailwind.config.ts',
      description: 'Tailwind CSS 설정',
      note: 'CSS 변수, 커스텀 테마',
    },
    {
      file: 'components.json',
      description: 'shadcn/ui 설정',
      note: 'New York 스타일, neutral 색상',
    },
    {
      file: '.env.local (예제)',
      description: '환경 변수',
      note: '필요한 API 키나 URL 설정',
    },
  ]

  return (
    <Tabs defaultValue="start" className="w-full">
      {/* 탭 메뉴 */}
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="start" className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span className="hidden sm:inline">시작하기</span>
        </TabsTrigger>
        <TabsTrigger value="tech" className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          <span className="hidden sm:inline">기술 스택</span>
        </TabsTrigger>
        <TabsTrigger value="structure" className="flex items-center gap-2">
          <Folder className="h-4 w-4" />
          <span className="hidden sm:inline">폴더 구조</span>
        </TabsTrigger>
        <TabsTrigger value="config" className="flex items-center gap-2">
          <Sliders className="h-4 w-4" />
          <span className="hidden sm:inline">환경설정</span>
        </TabsTrigger>
      </TabsList>

      {/* 탭 1: 시작하기 */}
      <TabsContent value="start" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">4단계 설치 가이드</h3>
          <p className="text-muted-foreground mb-6">
            다음 단계를 따라 프로젝트를 시작하세요.
          </p>
        </div>

        {/* 설치 단계 카드 */}
        <div className="space-y-4">
          {installSteps.map((step, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step {step.step}
                      </Badge>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* 명령어 카드 */}
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <code>{step.command}</code>
                  </div>
                </CardContent>
              </Card>
              {index < installSteps.length - 1 && (
                <Separator className="my-2" />
              )}
            </div>
          ))}
        </div>
      </TabsContent>

      {/* 탭 2: 기술 스택 */}
      <TabsContent value="tech" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">8가지 핵심 기술</h3>
          <p className="text-muted-foreground mb-6">
            이 스타터킷에 포함된 모든 기술을 소개합니다.
          </p>
        </div>

        {/* 기술 스택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{tech.name}</CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {tech.version}
                      </CardDescription>
                    </div>
                    <div className="inline-flex h-8 w-8 rounded-lg bg-primary/10 text-primary items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </TabsContent>

      {/* 탭 3: 폴더 구조 */}
      <TabsContent value="structure" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">프로젝트 디렉토리 구조</h3>
          <p className="text-muted-foreground mb-6">
            Atomic Design을 기반으로 체계적으로 구조화되어 있습니다.
          </p>
        </div>

        {/* 폴더 구조 코드 */}
        <Card>
          <CardContent className="p-6">
            <pre className="text-xs overflow-x-auto whitespace-pre-wrap break-words font-mono text-muted-foreground">
              {folderStructure}
            </pre>
          </CardContent>
        </Card>
      </TabsContent>

      {/* 탭 4: 환경설정 */}
      <TabsContent value="config" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">핵심 설정 파일</h3>
          <p className="text-muted-foreground mb-6">
            주요 설정 파일 목록과 각각의 역할을 알아보세요.
          </p>
        </div>

        {/* 설정 파일 카드 */}
        <div className="space-y-3">
          {configFiles.map((config, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-8 w-8 rounded-lg bg-primary/10 text-primary items-center justify-center flex-shrink-0 mt-1">
                    <Package className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base font-mono">
                      {config.file}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {config.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
                  💡 {config.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

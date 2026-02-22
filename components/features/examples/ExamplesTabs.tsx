'use client'

// 예제 페이지 탭 컴포넌트
// 폼, 대시보드, 테이블, 다이얼로그 4개 실전 예제 포함

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { StatCard } from '@/components/shared/data-display/StatCard'
import {
  Users,
  TrendingUp,
  ShoppingCart,
  Code2,
  Eye,
  Mail,
  Lock,
  CheckCircle2,
  BarChart3,
} from 'lucide-react'

/**
 * ExamplesTabs 컴포넌트
 *
 * 기능:
 * - 폼: LoginForm 예제 + Zod 스키마 코드 스니펫
 * - 대시보드: StatCard 실제 렌더링 + Progress 예제 + 코드 스니펫
 * - 테이블: Table 실제 렌더링 (예제 데이터) + 코드 스니펫
 * - 다이얼로그: Dialog 버튼 클릭으로 열기 + 코드 스니펫
 */
export function ExamplesTabs() {
  // 다이얼로그 열기/닫기 상태
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // 테이블 예제 데이터
  const tableData = [
    {
      id: '1',
      name: '김철수',
      email: 'kim@example.com',
      role: '관리자',
      status: '활성',
    },
    {
      id: '2',
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      status: '활성',
    },
    {
      id: '3',
      name: '박민준',
      email: 'park@example.com',
      role: '사용자',
      status: '비활성',
    },
    {
      id: '4',
      name: '최수진',
      email: 'choi@example.com',
      role: '에디터',
      status: '활성',
    },
  ]

  // 폼 코드 스니펫
  const formCodeSnippet = `// LoginForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Zod 스키마
const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  password: z.string().min(6, '최소 6글자 이상'),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginForm) => {
    // API 호출 로직
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이메일</FormLabel>
            <FormControl>
              <Input placeholder="user@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">로그인</Button>
    </form>
  )
}`

  // Zod 스키마 스니펫
  const zodSchemaSnippet = `// validations/auth.ts
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email('유효한 이메일을 입력해주세요')
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(6, '최소 6글자 이상이어야 합니다')
    .max(100, '100글자 이하여야 합니다'),
})

export type LoginInput = z.infer<typeof loginSchema>`

  // 대시보드 코드 스니펫
  const dashboardCodeSnippet = `// 대시보드 구성
import { StatCard } from '@/components/shared/data-display/StatCard'
import { Users, TrendingUp, ShoppingCart } from 'lucide-react'

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="총 사용자"
        value="1,234"
        description="전월 대비"
        change={{ value: '+12%', positive: true }}
        icon={Users}
      />
      <StatCard
        title="매출"
        value="$45,231"
        description="전월 대비"
        change={{ value: '+8.2%', positive: true }}
        icon={ShoppingCart}
      />
      <StatCard
        title="성장률"
        value="23.5%"
        description="전월 대비"
        change={{ value: '+2.3%', positive: true }}
        icon={TrendingUp}
      />
    </div>
  )
}`

  // 테이블 코드 스니펫
  const tableCodeSnippet = `// 사용자 테이블
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export function UserTable() {
  const users = [
    { id: '1', name: '김철수', email: 'kim@example.com', role: '관리자', status: '활성' },
    { id: '2', name: '이영희', email: 'lee@example.com', role: '사용자', status: '활성' },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge variant={user.status === '활성' ? 'default' : 'secondary'}>
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`

  // 다이얼로그 코드 스니펫
  const dialogCodeSnippet = `// Dialog 사용 예제
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>확인</DialogTitle>
          <DialogDescription>
            이 작업을 진행하시겠습니까?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2">
          <Button>확인</Button>
          <Button variant="outline">취소</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}`

  return (
    <Tabs defaultValue="form" className="w-full">
      {/* 탭 메뉴 */}
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="form" className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">폼</span>
        </TabsTrigger>
        <TabsTrigger value="dashboard" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          <span className="hidden sm:inline">대시보드</span>
        </TabsTrigger>
        <TabsTrigger value="table" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline">테이블</span>
        </TabsTrigger>
        <TabsTrigger value="dialog" className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <span className="hidden sm:inline">다이얼로그</span>
        </TabsTrigger>
      </TabsList>

      {/* 탭 1: 폼 */}
      <TabsContent value="form" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">로그인 폼 예제</h3>
          <p className="text-muted-foreground mb-6">
            react-hook-form과 Zod를 사용한 검증 폼 예제입니다.
          </p>
        </div>

        {/* 두 개의 코드 스니펫 카드 */}
        <div className="space-y-4">
          {/* 1. LoginForm.tsx 코드 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                LoginForm.tsx
              </CardTitle>
              <CardDescription>react-hook-form으로 폼 처리</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                  {formCodeSnippet}
                </pre>
              </div>
              <div className="text-xs text-muted-foreground mt-3">
                💾 코드 스니펫
              </div>
            </CardContent>
          </Card>

          {/* 2. Zod 스키마 코드 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                validations/auth.ts
              </CardTitle>
              <CardDescription>타입 안전한 검증 스키마</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                  {zodSchemaSnippet}
                </pre>
              </div>
              <div className="text-xs text-muted-foreground mt-3">
                💾 코드 스니펫
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* 탭 2: 대시보드 */}
      <TabsContent value="dashboard" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">대시보드 예제</h3>
          <p className="text-muted-foreground mb-6">
            StatCard 컴포넌트와 Progress를 활용한 대시보드 구성입니다.
          </p>
        </div>

        {/* 미리보기: StatCard 3개 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              미리보기
            </CardTitle>
            <CardDescription>실제 렌더링 결과</CardDescription>
          </CardHeader>
          <CardContent>
            {/* StatCard 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StatCard
                title="총 사용자"
                value="1,234"
                description="전월 대비"
                change={{ value: '+12%', positive: true }}
                icon={Users}
              />
              <StatCard
                title="총 매출"
                value="$45,231.89"
                description="전월 대비"
                change={{ value: '+8.2%', positive: true }}
                icon={ShoppingCart}
              />
              <StatCard
                title="성장률"
                value="23.5%"
                description="전월 대비"
                change={{ value: '+2.3%', positive: true }}
                icon={TrendingUp}
              />
            </div>

            <Separator className="my-6" />

            {/* Progress 예제 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">진행률 예제</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>완료율</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>목표 달성</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 코드 스니펫 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              대시보드 코드
            </CardTitle>
            <CardDescription>StatCard와 Progress 사용 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                {dashboardCodeSnippet}
              </pre>
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              💾 코드 스니펫
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* 탭 3: 테이블 */}
      <TabsContent value="table" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">테이블 예제</h3>
          <p className="text-muted-foreground mb-6">
            shadcn/ui Table을 활용한 사용자 목록 테이블입니다.
          </p>
        </div>

        {/* 미리보기: 실제 테이블 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              미리보기
            </CardTitle>
            <CardDescription>실제 렌더링 결과 (4명의 예제 데이터)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead className="text-right">상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {user.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        {user.name}
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            user.status === '활성' ? 'default' : 'secondary'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 코드 스니펫 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              테이블 코드
            </CardTitle>
            <CardDescription>Table 컴포넌트 사용 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                {tableCodeSnippet}
              </pre>
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              💾 코드 스니펫
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* 탭 4: 다이얼로그 */}
      <TabsContent value="dialog" className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">다이얼로그 예제</h3>
          <p className="text-muted-foreground mb-6">
            Dialog 컴포넌트를 사용한 모달 창 예제입니다.
          </p>
        </div>

        {/* 미리보기: Dialog 버튼 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              미리보기
            </CardTitle>
            <CardDescription>버튼을 클릭하면 다이얼로그가 열립니다</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>확인 메시지</DialogTitle>
                  <DialogDescription>
                    이것은 Dialog 컴포넌트의 사용 예제입니다.
                    <br />
                    다양한 형태의 모달 창을 만들 수 있습니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    취소
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    확인
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* 코드 스니펫 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              다이얼로그 코드
            </CardTitle>
            <CardDescription>Dialog 컴포넌트 사용 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                {dialogCodeSnippet}
              </pre>
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              💾 코드 스니펫
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

'use client'

// 로그인 폼 컴포넌트
// react-hook-form + zod 검증

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '@/lib/validations/auth'
import { Form } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormFieldComponent } from '@/components/shared/forms/FormField'
import { SubmitButton } from '@/components/shared/forms/SubmitButton'
import Link from 'next/link'
import { toast } from 'sonner'

/**
 * 로그인 폼 컴포넌트
 *
 * 기능:
 * - 이메일 + 비밀번호 입력
 * - Zod 자동 검증
 * - 로딩 상태 표시
 * - Toast 알림
 *
 * 사용 예:
 * <LoginForm />
 */
export function LoginForm() {
  // 폼 로딩 상태
  const [isLoading, setIsLoading] = useState(false)

  // react-hook-form 설정 (zod 검증 적용)
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  // 폼 제출 핸들러
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)

    try {
      // TODO: API 호출 (예: fetch('/api/auth/login', { ... }))
      console.log('로그인 데이터:', data)

      // 임시: 1초 대기
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 성공 토스트
      toast.success('로그인 성공!')
      // TODO: 페이지 리다이렉트 (예: router.push('/dashboard'))
    } catch (error) {
      console.error('로그인 실패:', error)
      toast.error('로그인에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>
          계정에 로그인하여 계속하세요
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* 이메일 입력 */}
            <FormFieldComponent
              form={form}
              name="email"
              label="이메일"
              type="email"
              placeholder="example@email.com"
              required
            />

            {/* 비밀번호 입력 */}
            <FormFieldComponent
              form={form}
              name="password"
              label="비밀번호"
              type="password"
              placeholder="••••••••"
              required
            />

            {/* 제출 버튼 */}
            <SubmitButton isLoading={isLoading} fullWidth>
              로그인
            </SubmitButton>

            {/* 하단 링크 */}
            <div className="flex items-center justify-between text-sm">
              <Link
                href="/forgot-password"
                className="text-primary hover:underline"
              >
                비밀번호 찾기
              </Link>
              <Link
                href="/register"
                className="text-primary hover:underline"
              >
                회원가입
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

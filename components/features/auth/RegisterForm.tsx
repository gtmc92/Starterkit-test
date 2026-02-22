'use client'

// 회원가입 폼 컴포넌트
// react-hook-form + zod 검증

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterFormData } from '@/lib/validations/auth'
import { Form } from '@/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormFieldComponent } from '@/components/shared/forms/FormField'
import { SubmitButton } from '@/components/shared/forms/SubmitButton'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import Link from 'next/link'
import { toast } from 'sonner'

/**
 * 회원가입 폼 컴포넌트
 *
 * 기능:
 * - 이름 + 이메일 + 비밀번호 입력
 * - 비밀번호 확인 필드
 * - 이용약관 동의 체크박스
 * - Zod 자동 검증
 * - 로딩 상태 표시
 * - Toast 알림
 *
 * 사용 예:
 * <RegisterForm />
 */
export function RegisterForm() {
  // 폼 로딩 상태
  const [isLoading, setIsLoading] = useState(false)

  // react-hook-form 설정 (zod 검증 적용)
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  // 폼 제출 핸들러
  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)

    try {
      // TODO: API 호출 (예: fetch('/api/auth/register', { ... }))
      console.log('회원가입 데이터:', data)

      // 임시: 1초 대기
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 성공 토스트
      toast.success('회원가입 성공! 로그인해주세요.')
      // TODO: 페이지 리다이렉트 (예: router.push('/login'))
    } catch (error) {
      console.error('회원가입 실패:', error)
      toast.error('회원가입에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>
          새 계정을 만들어보세요
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* 이름 입력 */}
            <FormFieldComponent
              form={form}
              name="name"
              label="이름"
              type="text"
              placeholder="홍길동"
              required
            />

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
              description="최소 8자, 대문자, 숫자, 특수문자 포함"
              required
            />

            {/* 비밀번호 확인 입력 */}
            <FormFieldComponent
              form={form}
              name="confirmPassword"
              label="비밀번호 확인"
              type="password"
              placeholder="••••••••"
              required
            />

            {/* 이용약관 동의 */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal cursor-pointer">
                    <Link href="/terms" className="text-primary hover:underline">
                      이용약관
                    </Link>
                    과{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      개인정보처리방침
                    </Link>
                    에 동의합니다{' '}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* 제출 버튼 */}
            <SubmitButton isLoading={isLoading} fullWidth>
              회원가입
            </SubmitButton>

            {/* 로그인 링크 */}
            <div className="text-center text-sm">
              이미 계정이 있으신가요?{' '}
              <Link
                href="/login"
                className="text-primary hover:underline"
              >
                로그인
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

// 인증 관련 검증 스키마 (로그인, 회원가입)
// react-hook-form의 resolver에서 사용

import { z } from 'zod'
import { emailSchema, passwordSchema, nameSchema } from './common'

/**
 * 로그인 폼 검증 스키마
 * react-hook-form과 함께 zodResolver로 사용됨
 */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, '비밀번호를 입력해주세요'),
  rememberMe: z.boolean().optional(),
})

// TypeScript 타입으로 추출 (form 상태 관리에 사용)
export type LoginFormData = z.infer<typeof loginSchema>

/**
 * 회원가입 폼 검증 스키마
 * 비밀번호 확인 필드가 포함됨
 */
export const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
    terms: z.boolean().refine((val) => val === true, {
      message: '이용약관에 동의해주세요',
    }),
  })
  // 비밀번호와 비밀번호 확인이 같은지 검증
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

// TypeScript 타입으로 추출
export type RegisterFormData = z.infer<typeof registerSchema>

/**
 * 비밀번호 재설정 요청 검증 스키마
 */
export const forgotPasswordSchema = z.object({
  email: emailSchema,
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

/**
 * 비밀번호 재설정 검증 스키마
 */
export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

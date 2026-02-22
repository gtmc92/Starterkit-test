// 공통 검증 규칙들
// 여러 폼에서 재사용할 수 있는 검증 정의

import { z } from 'zod'

/**
 * 이메일 검증 스키마
 * 이메일 형식이 맞는지 확인
 */
export const emailSchema = z
  .string()
  .min(1, '이메일을 입력해주세요')
  .email('올바른 이메일 주소를 입력해주세요')

/**
 * 비밀번호 검증 스키마
 * 최소 8자, 최소 1개의 대문자, 숫자, 특수문자 포함
 */
export const passwordSchema = z
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
  .regex(
    /^(?=.*[A-Z])/,
    '비밀번호는 최소 1개의 대문자를 포함해야 합니다'
  )
  .regex(
    /^(?=.*[0-9])/,
    '비밀번호는 최소 1개의 숫자를 포함해야 합니다'
  )
  .regex(
    /^(?=.*[!@#$%^&*])/,
    '비밀번호는 최소 1개의 특수문자(!@#$%^&*)를 포함해야 합니다'
  )

/**
 * 이름 검증 스키마
 */
export const nameSchema = z
  .string()
  .min(2, '이름은 최소 2자 이상이어야 합니다')
  .max(50, '이름은 최대 50자 이하여야 합니다')
  .regex(/^[가-힣a-zA-Z\s]+$/, '이름은 한글, 영문, 공백만 포함할 수 있습니다')

/**
 * URL 검증 스키마
 */
export const urlSchema = z
  .string()
  .url('올바른 URL을 입력해주세요')

/**
 * 페이지 번호 검증 스키마
 */
export const pageSchema = z
  .number()
  .int('페이지는 정수여야 합니다')
  .positive('페이지는 1 이상이어야 합니다')
  .default(1)

/**
 * 페이지 크기(limit) 검증 스키마
 */
export const limitSchema = z
  .number()
  .int('제한은 정수여야 합니다')
  .min(1, '제한은 최소 1 이상이어야 합니다')
  .max(100, '제한은 최대 100 이하여야 합니다')
  .default(10)

// 인증(로그인, 회원가입) 관련 타입 정의

/**
 * 로그인 입력 폼 데이터
 * react-hook-form과 zod 검증에서 사용
 */
export interface LoginInput {
  email: string
  password: string
  rememberMe?: boolean
}

/**
 * 회원가입 입력 폼 데이터
 */
export interface RegisterInput {
  name: string
  email: string
  password: string
  confirmPassword: string
  terms?: boolean
}

/**
 * 인증 응답 데이터 (API 응답)
 */
export interface AuthResponse {
  success: boolean
  message: string
  user?: {
    id: string
    email: string
    name: string
  }
  token?: string
}

/**
 * 인증 상태 (Zustand 스토어에서 사용)
 */
export interface AuthState {
  isLoading: boolean
  isAuthenticated: boolean
  user: {
    id: string
    email: string
    name: string
  } | null
  error: string | null
}

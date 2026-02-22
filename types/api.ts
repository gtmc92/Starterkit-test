// API 응답 및 요청 관련 공통 타입

/**
 * API 에러 응답 형식
 */
export interface ApiError {
  code: string
  message: string
  details?: Record<string, string[]>
}

/**
 * 페이지네이션 메타데이터
 */
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * 페이지네이션이 포함된 리스트 응답
 */
export interface PaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}

/**
 * API 응답 래퍼 (성공 응답)
 */
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

/**
 * 데이터 상태 열거형
 * 로딩, 성공, 에러 상태를 추적하기 위해 사용
 */
export type DataState = 'idle' | 'loading' | 'success' | 'error'

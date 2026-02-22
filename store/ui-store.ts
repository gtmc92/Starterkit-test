// Zustand를 사용한 UI 상태 관리
// 사이드바 열기/닫기 등의 UI 상태를 전역으로 관리

import { create } from 'zustand'

/**
 * UI 상태 타입 정의
 */
export interface UIState {
  // 사이드바 열기/닫기 상태
  sidebarOpen: boolean
  // 사이드바 토글 함수
  toggleSidebar: () => void
  // 사이드바 상태 직접 설정
  setSidebarOpen: (open: boolean) => void
}

/**
 * UI 상태 저장소
 *
 * 사용 예:
 * const { sidebarOpen, toggleSidebar } = useUIStore()
 * toggleSidebar() // 상태 토글
 * setSidebarOpen(true) // 상태 직접 설정
 *
 * Zustand의 장점:
 * - Redux 대비 95% 코드 감소
 * - 간단한 API (create 함수로 스토어 정의)
 * - 성능 최적화 (필요한 상태만 구독)
 */
export const useUIStore = create<UIState>((set) => ({
  // 초기 상태: 사이드바 닫혀있음
  sidebarOpen: false,

  // 현재 상태를 토글하는 함수
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // 상태를 직접 설정하는 함수
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}))

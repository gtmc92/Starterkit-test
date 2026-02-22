'use client'

// 대시보드 사이드바 컴포넌트
// Zustand 스토어를 사용하여 열기/닫기 상태 관리

import { useUIStore } from '@/store/ui-store'
import { SidebarNav } from './SidebarNav'
import { dashboardNav } from '@/lib/constants/nav'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 대시보드 사이드바 컴포넌트
 *
 * 기능:
 * - Zustand 스토어에서 열기/닫기 상태 관리
 * - 닫기 버튼으로 사이드바 닫기
 * - 반응형: 모바일에서는 오버레이, 데스크탑에서는 고정
 *
 * 구조:
 * - 헤더: 사이드바 타이틀 + 닫기 버튼
 * - 본문: SidebarNav 컴포넌트
 */
export function Sidebar() {
  // Zustand 스토어에서 상태와 함수 가져오기
  const { sidebarOpen, toggleSidebar } = useUIStore()

  return (
    <>
      {/* 모바일: 오버레이 (사이드바 열려있을 때만 표시) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => toggleSidebar()}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={cn(
          // 기본: 위치, 크기, 배경
          'fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r bg-background transition-transform duration-200 lg:sticky lg:translate-x-0',
          // 모바일: 열려있으면 transform 0, 닫혀있으면 -translate-x-full
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="space-y-4 overflow-y-auto p-6">
          {/* 헤더: 타이틀 + 닫기 버튼 (모바일에서만 표시) */}
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold">메뉴</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleSidebar()}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">사이드바 닫기</span>
            </Button>
          </div>

          {/* 네비게이션 링크 */}
          <SidebarNav items={dashboardNav} />
        </div>
      </aside>
    </>
  )
}

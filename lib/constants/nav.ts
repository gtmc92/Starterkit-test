// 네비게이션 메뉴 정의
// 헤더, 사이드바, 모바일 메뉴에서 모두 이 데이터를 참조
// 변경 시 모든 메뉴가 자동으로 업데이트됨

export interface NavLink {
  label: string           // 화면에 표시될 텍스트
  href: string            // 이동할 경로
  icon?: string           // 아이콘 이름 (lucide-react)
  description?: string    // 호버 시 표시될 설명
  children?: NavLink[]    // 드롭다운 서브메뉴
}

/**
 * 메인 네비게이션 메뉴
 * 헤더의 네비게이션 바에 표시됨
 */
export const mainNav: NavLink[] = [
  {
    label: '홈',
    href: '/',
  },
  {
    label: '문서',
    href: '/docs',
    description: '기술 문서 및 가이드',
  },
  {
    label: '컴포넌트',
    href: '/components',
    description: 'UI 컴포넌트 라이브러리',
  },
  {
    label: '예제',
    href: '/examples',
    description: '사용 예제 및 데모',
  },
]

/**
 * 사이드바 네비게이션 (대시보드용)
 * 인증 후 왼쪽 사이드바에 표시됨
 */
export const dashboardNav: NavLink[] = [
  {
    label: '대시보드',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: '사용자 관리',
    href: '/dashboard/users',
    icon: 'Users',
  },
  {
    label: '설정',
    href: '/dashboard/settings',
    icon: 'Settings',
    children: [
      {
        label: '프로필',
        href: '/dashboard/settings/profile',
      },
      {
        label: '보안',
        href: '/dashboard/settings/security',
      },
    ],
  },
]

/**
 * 푸터 링크들
 * 섹션별로 구분
 */
export const footerNav = {
  product: [
    { label: '기능', href: '#features' },
    { label: '가격', href: '#pricing' },
    { label: '문서', href: '/docs' },
  ],
  company: [
    { label: '블로그', href: '/blog' },
    { label: '회사', href: '/about' },
    { label: '채용', href: '/careers' },
  ],
  legal: [
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '이용약관', href: '/terms' },
    { label: '쿠키 정책', href: '/cookies' },
  ],
}

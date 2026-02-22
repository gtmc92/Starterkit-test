// 컴포넌트 라이브러리 쇼케이스 데이터
// shadcn/ui 26개 + 공통 커스텀 7개 + 레이아웃 8개 컴포넌트 정보

export interface ComponentInfo {
  // 컴포넌트 이름
  name: string
  // 설명
  description: string
  // 파일 경로 (예: components/ui/button)
  path: string
  // 태그 (선택사항)
  tags?: string[]
}

export interface ComponentCategory {
  // 카테고리 제목 (예: "기본 입력")
  categoryTitle: string
  // 컴포넌트 목록
  items: ComponentInfo[]
}

export interface ComponentSection {
  // 섹션 제목 (예: "shadcn/ui 컴포넌트")
  title: string
  // 섹션 설명
  description: string
  // 카테고리 그룹
  categories: ComponentCategory[]
}

// ============================================================
// 1. shadcn/ui 컴포넌트 (26개) - 5가지 카테고리
// ============================================================
export const shadcnComponents: ComponentSection = {
  title: 'shadcn/ui 컴포넌트',
  description:
    'Radix UI를 기반으로 한 재사용 가능한 26개의 UI 컴포넌트입니다.',
  categories: [
    // 카테고리 1: 기본 입력 (9개)
    {
      categoryTitle: '기본 입력',
      items: [
        {
          name: 'Button',
          description: '다양한 스타일의 버튼 컴포넌트',
          path: 'components/ui/button',
          tags: ['상호작용', '입력'],
        },
        {
          name: 'Input',
          description: '텍스트 입력 필드',
          path: 'components/ui/input',
          tags: ['입력', '폼'],
        },
        {
          name: 'Textarea',
          description: '여러 줄 텍스트 입력 필드',
          path: 'components/ui/textarea',
          tags: ['입력', '폼'],
        },
        {
          name: 'Checkbox',
          description: '체크박스 입력 컴포넌트',
          path: 'components/ui/checkbox',
          tags: ['입력', '폼'],
        },
        {
          name: 'RadioGroup',
          description: '라디오 버튼 그룹',
          path: 'components/ui/radio-group',
          tags: ['입력', '폼'],
        },
        {
          name: 'Switch',
          description: '토글 스위치 컴포넌트',
          path: 'components/ui/switch',
          tags: ['입력', '폼'],
        },
        {
          name: 'Select',
          description: '드롭다운 선택 컴포넌트',
          path: 'components/ui/select',
          tags: ['입력', '폼'],
        },
        {
          name: 'Label',
          description: '폼 라벨 컴포넌트',
          path: 'components/ui/label',
          tags: ['입력', '폼'],
        },
        {
          name: 'Form',
          description: '폼 바인딩 및 검증 (react-hook-form)',
          path: 'components/ui/form',
          tags: ['입력', '폼', '유효성'],
        },
      ],
    },

    // 카테고리 2: 레이아웃 (4개)
    {
      categoryTitle: '레이아웃',
      items: [
        {
          name: 'Card',
          description: '카드 레이아웃 컴포넌트 (CardHeader, CardTitle 등)',
          path: 'components/ui/card',
          tags: ['레이아웃', '구조'],
        },
        {
          name: 'Separator',
          description: '구분선 컴포넌트',
          path: 'components/ui/separator',
          tags: ['레이아웃', '구조'],
        },
        {
          name: 'ScrollArea',
          description: '스크롤 가능한 영역',
          path: 'components/ui/scroll-area',
          tags: ['레이아웃', '구조'],
        },
        {
          name: 'Tabs',
          description: '탭 네비게이션 컴포넌트',
          path: 'components/ui/tabs',
          tags: ['레이아웃', '네비게이션'],
        },
      ],
    },

    // 카테고리 3: 피드백 & 오버레이 (6개)
    {
      categoryTitle: '피드백 & 오버레이',
      items: [
        {
          name: 'Alert',
          description: '경고 및 알림 메시지',
          path: 'components/ui/alert',
          tags: ['피드백', '알림'],
        },
        {
          name: 'Dialog',
          description: '모달 다이얼로그 컴포넌트',
          path: 'components/ui/dialog',
          tags: ['오버레이', '상호작용'],
        },
        {
          name: 'Sheet',
          description: '슬라이드 아웃 시트 컴포넌트',
          path: 'components/ui/sheet',
          tags: ['오버레이', '모바일'],
        },
        {
          name: 'Tooltip',
          description: '마우스 호버 시 팁 표시',
          path: 'components/ui/tooltip',
          tags: ['피드백', '정보'],
        },
        {
          name: 'Popover',
          description: '팝오버 컴포넌트',
          path: 'components/ui/popover',
          tags: ['오버레이', '상호작용'],
        },
        {
          name: 'Toast (Sonner)',
          description: '토스트 알림 (sonner 라이브러리)',
          path: 'components/ui/sonner',
          tags: ['피드백', '알림'],
        },
      ],
    },

    // 카테고리 4: 데이터 표시 (5개)
    {
      categoryTitle: '데이터 표시',
      items: [
        {
          name: 'Badge',
          description: '배지 라벨 컴포넌트',
          path: 'components/ui/badge',
          tags: ['데이터', '라벨'],
        },
        {
          name: 'Avatar',
          description: '사용자 아바타 이미지',
          path: 'components/ui/avatar',
          tags: ['데이터', '사용자'],
        },
        {
          name: 'Progress',
          description: '진행률 표시 바',
          path: 'components/ui/progress',
          tags: ['데이터', '시각화'],
        },
        {
          name: 'Skeleton',
          description: '로딩 스켈레톤 UI',
          path: 'components/ui/skeleton',
          tags: ['데이터', '로딩'],
        },
        {
          name: 'Table',
          description: '테이블 컴포넌트',
          path: 'components/ui/table',
          tags: ['데이터', '표'],
        },
      ],
    },

    // 카테고리 5: 네비게이션 (2개)
    {
      categoryTitle: '네비게이션',
      items: [
        {
          name: 'Breadcrumb',
          description: '경로 네비게이션',
          path: 'components/ui/breadcrumb',
          tags: ['네비게이션', '경로'],
        },
        {
          name: 'DropdownMenu',
          description: '드롭다운 메뉴',
          path: 'components/ui/dropdown-menu',
          tags: ['네비게이션', '메뉴'],
        },
      ],
    },
  ],
}

// ============================================================
// 2. 공통 커스텀 컴포넌트 (7개) - 3가지 카테고리
// ============================================================
export const customComponents: ComponentSection = {
  title: '커스텀 컴포넌트',
  description: '스타터킷에서 자체 제작한 재사용 가능한 컴포넌트들입니다.',
  categories: [
    // 카테고리 1: 입력 & 폼 (2개)
    {
      categoryTitle: '입력 & 폼',
      items: [
        {
          name: 'FormField',
          description: 'Label + Input + Error를 한 컴포넌트로',
          path: 'components/shared/form/FormField',
          tags: ['폼', '입력'],
        },
        {
          name: 'SubmitButton',
          description: '로딩 상태를 관리하는 제출 버튼',
          path: 'components/shared/form/SubmitButton',
          tags: ['폼', '상호작용'],
        },
      ],
    },

    // 카테고리 2: 데이터 표시 (3개)
    {
      categoryTitle: '데이터 표시',
      items: [
        {
          name: 'StatCard',
          description: '통계 정보 카드 (값, 변화율, 아이콘)',
          path: 'components/shared/data-display/StatCard',
          tags: ['데이터', '대시보드'],
        },
        {
          name: 'EmptyState',
          description: '데이터 없음 상태 표시',
          path: 'components/shared/data-display/EmptyState',
          tags: ['데이터', '상태'],
        },
        {
          name: 'LoadingSpinner',
          description: '로딩 스피너 애니메이션',
          path: 'components/shared/data-display/LoadingSpinner',
          tags: ['데이터', '로딩'],
        },
      ],
    },

    // 카테고리 3: 상호작용 (2개)
    {
      categoryTitle: '상호작용 & 피드백',
      items: [
        {
          name: 'ConfirmDialog',
          description: '확인 다이얼로그',
          path: 'components/shared/interaction/ConfirmDialog',
          tags: ['상호작용', '다이얼로그'],
        },
        {
          name: 'AlertBanner',
          description: '상단 알림 배너',
          path: 'components/shared/interaction/AlertBanner',
          tags: ['피드백', '알림'],
        },
      ],
    },
  ],
}

// ============================================================
// 3. 레이아웃 컴포넌트 (8개) - 2가지 카테고리
// ============================================================
export const layoutComponents: ComponentSection = {
  title: '레이아웃 컴포넌트',
  description: '페이지 구조를 만드는 주요 레이아웃 컴포넌트들입니다.',
  categories: [
    // 카테고리 1: 주요 레이아웃 (4개)
    {
      categoryTitle: '주요 레이아웃',
      items: [
        {
          name: 'Header',
          description: '페이지 헤더 (로고, 네비게이션)',
          path: 'components/layout/header/Header',
          tags: ['레이아웃', '네비게이션'],
        },
        {
          name: 'Footer',
          description: '페이지 푸터',
          path: 'components/layout/footer/Footer',
          tags: ['레이아웃', '정보'],
        },
        {
          name: 'Sidebar',
          description: '사이드바 네비게이션',
          path: 'components/layout/sidebar/Sidebar',
          tags: ['레이아웃', '네비게이션'],
        },
        {
          name: 'SidebarNav',
          description: '사이드바 내 네비게이션 항목',
          path: 'components/layout/sidebar/SidebarNav',
          tags: ['레이아웃', '네비게이션'],
        },
      ],
    },

    // 카테고리 2: 헤더 서브 컴포넌트 (4개)
    {
      categoryTitle: '헤더 서브 컴포넌트',
      items: [
        {
          name: 'ThemeToggle',
          description: '라이트/다크 모드 토글 버튼',
          path: 'components/layout/header/ThemeToggle',
          tags: ['레이아웃', '테마'],
        },
        {
          name: 'NavMenu',
          description: '데스크톱 네비게이션 메뉴',
          path: 'components/layout/header/NavMenu',
          tags: ['레이아웃', '네비게이션'],
        },
        {
          name: 'MobileMenu',
          description: '모바일 네비게이션 시트 메뉴',
          path: 'components/layout/header/MobileMenu',
          tags: ['레이아웃', '네비게이션', '모바일'],
        },
        {
          name: 'Logo',
          description: '사이트 로고 이미지/텍스트',
          path: 'components/layout/header/Logo',
          tags: ['레이아웃', '브랜딩'],
        },
      ],
    },
  ],
}

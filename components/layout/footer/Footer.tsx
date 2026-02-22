// 사이트 푸터 컴포넌트

import Link from 'next/link'
import { siteConfig, siteLinks } from '@/lib/constants/site'
import { footerNav } from '@/lib/constants/nav'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

/**
 * 사이트 푸터 컴포넌트
 *
 * 구조:
 * - 상단: 섹션별 링크 (Product, Company, Legal)
 * - 중앙: 구분선
 * - 하단: 저작권, 소셜 미디어 링크
 */
export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container max-w-screen-2xl px-4 py-12 md:px-6 lg:py-16">
        {/* 상단: 링크 섹션 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Product 섹션 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold">제품</h4>
            <ul className="space-y-2">
              {footerNav.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company 섹션 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold">회사</h4>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal 섹션 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold">법적</h4>
            <ul className="space-y-2">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 소셜 미디어 섹션 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold">연결</h4>
            <div className="flex space-x-4">
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={siteLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteLinks.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">이메일</span>
              </a>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <Separator className="my-8" />

        {/* 하단: 저작권 */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 {siteConfig.name}. 모든 권리 보유.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-foreground transition-colors"
            >
              developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

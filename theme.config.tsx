import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Unipleex Docs</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '2023 - Uniplex Incorporated | Home | Privacy Policy | Terms of Service | Blog',
    links: [
      { label: 'Home', href: 'https://uniplex.xyz' },
      { label: 'Privacy Policy', href: 'https://uniplex.xyz/policy' },
      { label: 'Terms of Service', href: 'https://uniplex.xyz/terms' },
      { label: 'Blog', href: 'https://blog.uniplex.xyz' },
    ],
  },
}

export default config

/* eslint-disable prettier/prettier */
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const NavLinkPatch = (): Plugin => ({
  name: 'override-target-blank',
  enforce: 'pre',
  transform: (code, id) => {
    if (id.endsWith('VPLink.vue')) {
      return code.replace('_blank', '_self')
    }
  },
})

const NavLinkTitle = (): Plugin => ({
  name: 'force-default-url',
  enforce: 'pre',
  transform: (code, id) => {
    if (id.endsWith('VPNavBarTitle.vue')) {
      return code.replace(
        'normalizeLink(currentLang.link)',
        "normalizeLink('https://wipodev.com' + currentLang.link)"
      )
    }
  },
})

export default defineConfig({
  plugins: [NavLinkPatch(), NavLinkTitle()],
})

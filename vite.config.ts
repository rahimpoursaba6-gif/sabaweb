import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Sandbox/preview host handling.
 *
 * The Base44 preview proxy reaches the dev server on a host like
 * `<port>-<sandbox-id>.<BASE44_SANDBOX_HOST_DOMAIN>`. The platform also passes
 * `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, which Vite appends to `allowedHosts`
 * on its own. The block below is a narrow fallback for when that variable is not
 * relayed to the process: it only ever activates while `BASE44_PREVIEW_MODE` is
 * exactly "1", never hardcodes a host, and leaves production behaviour untouched.
 */
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN
const previewAllowedHosts =
  process.env.BASE44_PREVIEW_MODE === '1' && sandboxHostDomain ? [`.${sandboxHostDomain}`] : []

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    ...(previewAllowedHosts.length > 0 ? { allowedHosts: previewAllowedHosts } : {}),
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
})

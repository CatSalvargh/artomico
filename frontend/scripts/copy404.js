import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const docsDir = resolve(process.cwd(), '..', 'docs')
const indexPath = resolve(docsDir, 'index.html')
const destPath = resolve(docsDir, '404.html')

if (!existsSync(indexPath)) {
  console.error('index.html not found in docs/ — build may have failed')
  process.exit(1)
}

try {
  copyFileSync(indexPath, destPath)
  console.log('Copied docs/index.html → docs/404.html')
} catch (err) {
  console.error('Failed to copy 404 fallback:', err)
  process.exit(1)
}

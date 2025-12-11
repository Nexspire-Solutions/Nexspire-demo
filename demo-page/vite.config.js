import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// Helper to find all index.html files in demos folder
function getHtmlEntries() {
    const pages = {
        main: resolve(__dirname, 'index.html')
    }

    const demosDir = resolve(__dirname, 'demos')

    if (fs.existsSync(demosDir)) {
        const demoFolders = fs.readdirSync(demosDir)
        demoFolders.forEach(folder => {
            const htmlPath = resolve(demosDir, folder, 'index.html')
            if (fs.existsSync(htmlPath)) {
                pages[folder] = htmlPath
            }
        })
    }

    return pages
}

// Custom plugin to copy demo assets (script.js, style.css)
function copyDemoAssets() {
    return {
        name: 'copy-demo-assets',
        writeBundle() {
            const demosDir = resolve(__dirname, 'demos')
            const distDemosDir = resolve(__dirname, 'dist', 'demos')

            if (fs.existsSync(demosDir)) {
                const demoFolders = fs.readdirSync(demosDir)
                demoFolders.forEach(folder => {
                    const srcFolder = resolve(demosDir, folder)
                    const destFolder = resolve(distDemosDir, folder)

                    // Ensure destination folder exists
                    if (!fs.existsSync(destFolder)) {
                        fs.mkdirSync(destFolder, { recursive: true })
                    }

                    // Copy script.js
                    const scriptSrc = resolve(srcFolder, 'script.js')
                    const scriptDest = resolve(destFolder, 'script.js')
                    if (fs.existsSync(scriptSrc)) {
                        fs.copyFileSync(scriptSrc, scriptDest)
                        console.log(`Copied: ${folder}/script.js`)
                    }

                    // Copy style.css
                    const styleSrc = resolve(srcFolder, 'style.css')
                    const styleDest = resolve(destFolder, 'style.css')
                    if (fs.existsSync(styleSrc)) {
                        fs.copyFileSync(styleSrc, styleDest)
                        console.log(`Copied: ${folder}/style.css`)
                    }
                })
            }
        }
    }
}

export default defineConfig({
    base: '/',
    plugins: [copyDemoAssets()],
    build: {
        rollupOptions: {
            input: getHtmlEntries()
        }
    }
})


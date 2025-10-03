import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://sistemas21atp.github.io',
    base: '/DINERBOT-T10',

    // Optimizaciones de imagen nativas de Astro
    image: {
        remotePatterns: [
            { protocol: 'https' },
            { protocol: 'http' }
        ]
    },

    // Integrations disponibles
    integrations: [
        sitemap()
    ],

    // Configuración de build
    build: {
        format: 'directory',
        inlineStylesheets: 'auto'
    },

    // Configuración de TypeScript
    typescript: {
        strict: false
    },

    // Configuración de dev server
    server: {
        port: 4321,
        host: true,
        open: true
    },

    // Configuración de Vite optimizada
    vite: {
        css: {
            devSourcemap: true
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name].[hash][extname]'
                }
            }
        }
    }
});
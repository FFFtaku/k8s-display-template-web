import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// eslint接入
import eslint from 'vite-plugin-eslint'

// element ui按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // {
    //   ...eslint({
    //     include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
    //     // waring是否会导致编译终止
    //     failOnWarning: false,
    //     // Error是否会导致编译终止
    //     failOnError: false,
    //     // 开始时lint所有代码(代码体量大了后会很慢，后续可以改为false)
    //     lintOnStart: false
    //   })
    // },
    // element ui按需引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    // 设置别名（用于编译）
    alias: {
      '@': resolve(__dirname, 'src'),
      '@api': resolve(__dirname, 'src/api'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@constant': resolve(__dirname, 'src/constant'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@views': resolve(__dirname, 'src/views'),
      '@sys-config': resolve(__dirname, 'src/sys-config'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@router': resolve(__dirname, 'src/router'),
      '@layout': resolve(__dirname, 'src/layout'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置全局sass变量注入
        additionalData: '@import "@assets/style/variable.scss";'
      }
    }
  }
})

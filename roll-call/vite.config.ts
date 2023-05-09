import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// plus 自动按需
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// 分析工具
import { visualizer } from 'rollup-plugin-visualizer'
// gzip压缩
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue(),
    visualizer({open:true}),
    AutoImport({resolvers:[ElementPlusResolver()]}),
    Components({resolvers:[ElementPlusResolver()]}),
    compression({algorithm:'gzip',ext:'.gz',deleteOriginFile:false})
  
  ],
  envDir:"env",
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "./src/assets/colors/colors.scss";`
      }
    }
  },
  build:{
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      }
    },
    minify:true
    // sourcemap:false
  },

})

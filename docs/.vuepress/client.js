// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client'
import ShowImg from './components/ShowImg.vue'
import './styles/index.css'

// 这里只导出 defineClientConfig
export default defineClientConfig({
  enhance({ app}) {
    // 注册全局组件
    app.component('ShowImg', ShowImg)
    
    // 路由守卫
    // router.beforeEach((to, from, next) => {
    //   console.log(`Navigating to: ${to.path}`)
    //   next()
    // })
  },
  
  setup() {
    // 使用 Composition API
  },
  
  rootComponents: [
    // 全局根组件
  ],
})
import Vue from 'vue'
import Router from 'vue-router'
import Hi from '@/components/Hi'  // 这是新加的一行，引入Hi Component, @表示本地文件系统中的源代码目录src
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',  // 这行的作用是去掉地址栏中的#
  routes: [
    {
      path: '/',
      name: 'Hi',     // 这是名称
      component: Hi   // 这是对应component下的Hi.vue文件
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AppIcons from '@/components/AppIcons'
import Windows from '@/components/Windows'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appicons',
      components: {
        header: Header,
        appicons: AppIcons,
        windows: Windows
      }
    }
  ]
})

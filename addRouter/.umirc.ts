/*
 * @Descripttion: 
 * @version: 
 * @Author: Mozixin
 * @Date: 2021-10-13 14:58:24
 * @LastEditors: Mozixin
 * @LastEditTime: 2021-10-13 15:11:43
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: '/login', component: '@/pages/login' },
  ],
  fastRefresh: {},
});

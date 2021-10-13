/*
 * @Descripttion:  演示动态添加路由  官方示例 https://github.com/umijs/umi-examples/tree/master/runtime-routes-appjs
 * @version: 
 * @Author: Mozixin
 * @Date: 2021-10-13 15:01:26
 * @LastEditors: Mozixin
 * @LastEditTime: 2021-10-13 18:26:34
 */


export function patchRoutes({ routes }) {
  // merge(routes, extraRoutes);
  console.log(routes, 'routes');
  let extraRoutes = [];
  // 获取另一个地方保存的路由数据数据
  extraRoutes = window.localStorage.getItem('routes')
    ? JSON.parse(window.localStorage.getItem('routes'))
    : [];

  //  格式化路由信息 
   extraRoutes = extraRoutes.map((item) => {
     /* item={
       path：'' // 跳转路径
       component：'' //组件路径
     } */
     return {
       ...item,
       // 添加 component  item.component='/login'
       component: require('./pages' + item.component).default,
     };
   });
    // 添加路由
    routes.push(...extraRoutes);
    console.log(routes, extraRoutes);
}

export function render(oldRender) {
  oldRender();
  // 保存方法 oldRender,oldRender在调用后会使得patchRoutes重新调用
  window.oldRender = oldRender;
}
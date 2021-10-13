export default function IndexPage() {
    function tap() {
        window.localStorage.setItem(
          'routes',
          JSON.stringify([{ path: '/login', component: '/login' }]),
        );
        window.oldRender()
        window.location.replace('/login');
    } 

    return (
      <div>
        <button onClick={tap}> 登录</button>
      </div>
    );
}

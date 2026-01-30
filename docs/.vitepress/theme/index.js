import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      let currentToken = null;

      const loadMaxKB = (path) => {
        const token = path.startsWith('/zh/') ? "c9f446e578abcacc" : "632bf3ead0ebfee2";

        console.log('[MaxKB] Path:', path, 'Token:', token, 'Current:', currentToken);

        // 检测到 token 变化，强制刷新
        if (currentToken !== null && currentToken !== token) {
          console.log('[MaxKB] Token changed, reloading page...');
          currentToken = token;
          setTimeout(() => {
            window.location.reload();
          }, 50);
          return;
        }

        currentToken = token;

        // 清理旧脚本
        const oldScript = document.querySelector('script[data-maxkb]');
        if (oldScript) {
          oldScript.remove();
        }

        // 加载新脚本
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.setAttribute("data-maxkb", "true");
        script.src = `https://hako.pqabelian.io/chat/api/embed?protocol=https&host=hako.pqabelian.io&token=${token}`;
        document.head.appendChild(script);
        console.log('[MaxKB] Script loaded with token:', token);
      };

      // 首次加载
      loadMaxKB(window.location.pathname);

      // 监听路由变化 - 使用多个钩子确保捕获
      if (router) {
        // 方法1: onAfterRouteChanged
        router.onAfterRouteChanged = (to) => {
          console.log('[MaxKB] onAfterRouteChanged:', to);
          loadMaxKB(to);
        };

        // 方法2: onBeforeRouteChange
        router.onBeforeRouteChange = (to) => {
          console.log('[MaxKB] onBeforeRouteChange:', to);
        };
      }

      // 方法3: 监听 popstate 事件（浏览器前进后退）
      window.addEventListener('popstate', () => {
        console.log('[MaxKB] popstate event');
        loadMaxKB(window.location.pathname);
      });

      // 方法4: 使用 MutationObserver 监听 DOM 变化
      const observer = new MutationObserver(() => {
        const currentPath = window.location.pathname;
        const expectedToken = currentPath.startsWith('/zh/') ? "c9f446e578abcacc" : "632bf3ead0ebfee2";

        if (currentToken !== expectedToken) {
          console.log('[MaxKB] MutationObserver detected path change');
          loadMaxKB(currentPath);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
}

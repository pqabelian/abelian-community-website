import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      let currentToken = null;
      let isInitialLoad = true;

      // 强制重新加载页面来切换 maxKB 语言
      const reloadForLanguageChange = (newPath) => {
        const newToken = newPath.startsWith('/zh/') ? "c9f446e578abcacc" : "632bf3ead0ebfee2";

        if (currentToken && currentToken !== newToken) {
          // Token 发生变化，需要刷新页面
          window.location.href = newPath;
          return true;
        }
        return false;
      };

      // 加载 MaxKB 脚本的函数
      const loadMaxKB = (path) => {
        const token = path.startsWith('/zh/') ? "c9f446e578abcacc" : "632bf3ead0ebfee2";

        // 如果不是首次加载且 token 变化了，直接刷新页面
        if (!isInitialLoad && currentToken !== token) {
          currentToken = token;
          return; // 不执行后续逻辑，因为页面会刷新
        }

        currentToken = token;
        isInitialLoad = false;

        // 移除旧脚本
        const oldScript = document.querySelector('script[data-maxkb]');
        if (oldScript) {
          oldScript.remove();
        }

        // 注入新脚本
        setTimeout(() => {
          const script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.setAttribute("data-maxkb", "true");
          script.src = `https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=${token}`;
          document.head.appendChild(script);
        }, 100);
      };

      // 首次加载
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          loadMaxKB(window.location.pathname);
        });
      } else {
        loadMaxKB(window.location.pathname);
      }

      // 路由变化时检查是否需要刷新
      router.onBeforeRouteChange = (to) => {
        if (reloadForLanguageChange(to)) {
          return false; // 阻止路由变化，因为我们要刷新页面
        }
      };

      // 路由变化后加载
      router.onAfterRouteChanged = (to) => {
        loadMaxKB(to);
      };
    }
  }
}

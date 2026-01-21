import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      let currentToken = null;

      // 加载 MaxKB 脚本的函数
      const loadMaxKB = (path) => {
        const token = path.startsWith('/zh/') ? "c9f446e578abcacc" : "632bf3ead0ebfee2";

        // 如果 token 变化了，需要刷新页面
        if (currentToken !== null && currentToken !== token) {
          // 先更新 token，然后刷新页面
          currentToken = token;
          // 使用 setTimeout 确保路由已经完成变化
          setTimeout(() => {
            window.location.reload();
          }, 100);
          return;
        }

        currentToken = token;

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

      // 路由变化后处理
      router.onAfterRouteChanged = (to) => {
        loadMaxKB(to);
      };
    }
  }
}

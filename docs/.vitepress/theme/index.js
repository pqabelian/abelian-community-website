import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      // 加载 MaxKB 脚本的函数
      const loadMaxKB = (path) => {
        // 移除旧的 MaxKB 脚本和相关元素
        const oldScript = document.querySelector('script[data-maxkb]');
        if (oldScript) {
          oldScript.remove();
        }

        // 移除 maxKB 创建的浮窗元素（如果存在）
        const maxkbWidget = document.querySelector('#maxkb-widget, [class*="maxkb"], [id*="maxkb"]');
        if (maxkbWidget) {
          maxkbWidget.remove();
        }

        // 根据路径选择 token
        let token = "632bf3ead0ebfee2"; // 英文
        if (path.startsWith('/zh/')) {
          token = "c9f446e578abcacc"; // 中文
        }

        // 延迟注入新脚本，确保旧脚本完全卸载
        setTimeout(() => {
          const script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.setAttribute("data-maxkb", "true");
          script.src = `https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=${token}`;
          document.head.appendChild(script);
        }, 100); // 100ms 延迟确保清理完成
      };

      // 首次加载时执行
      if (typeof window !== 'undefined') {
        // 等待 DOM 加载完成
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            loadMaxKB(window.location.pathname);
          });
        } else {
          // DOM 已经加载完成
          loadMaxKB(window.location.pathname);
        }
      }

      // 路由变化时执行
      router.onAfterRouteChanged = (to) => {
        loadMaxKB(to);
      };
    }
  }
}

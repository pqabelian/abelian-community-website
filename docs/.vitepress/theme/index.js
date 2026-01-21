import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      let currentToken = null; // 跟踪当前 token

      // 加载 MaxKB 脚本的函数
      const loadMaxKB = (path) => {
        // 根据路径选择 token
        let token = "632bf3ead0ebfee2"; // 英文
        if (path.startsWith('/zh/')) {
          token = "c9f446e578abcacc"; // 中文
        }

        // 如果 token 没有变化，不需要重新加载
        if (currentToken === token) {
          return;
        }

        currentToken = token;

        // 彻底清理旧的 MaxKB
        const cleanup = () => {
          // 移除脚本标签
          const oldScript = document.querySelector('script[data-maxkb]');
          if (oldScript) {
            oldScript.remove();
          }

          // 移除所有 maxKB 相关的 DOM 元素
          const widgets = document.querySelectorAll('[id*="maxkb"], [class*="maxkb"], [id*="MaxKB"], [class*="MaxKB"]');
          widgets.forEach(widget => widget.remove());

          // 清理 window 对象上的 maxKB 相关属性
          if (window.MaxKBWidget) delete window.MaxKBWidget;
          if (window.maxkb) delete window.maxkb;
          if (window.MaxKB) delete window.MaxKB;

          // 清理可能的事件监听器
          const iframes = document.querySelectorAll('iframe[src*="maxkb"], iframe[src*="hako"]');
          iframes.forEach(iframe => iframe.remove());
        };

        cleanup();

        // 延迟加载新脚本，确保清理完成
        setTimeout(() => {
          const script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.setAttribute("data-maxkb", "true");
          script.src = `https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=${token}`;
          document.head.appendChild(script);
        }, 300); // 增加到 300ms 确保完全清理
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

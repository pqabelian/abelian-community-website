import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = (to) => {
        // 移除旧的 MaxKB 脚本
        const oldScript = document.querySelector('script[data-maxkb]');
        if (oldScript) oldScript.remove();

        // 根据路径选择 token
        let token = "632bf3ead0ebfee2"; // 英文
        if (to.startsWith('/zh/')) {
          token = "c9f446e578abcacc"; // 中文
        }

        // 注入新的脚本
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.setAttribute("data-maxkb", "true");
        script.src = `https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=${token}`;
        document.head.appendChild(script);
      };
    }
  }
}

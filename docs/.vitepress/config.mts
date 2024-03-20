import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/abelian-community-website/",
  ignoreDeadLinks: true,
  lastUpdated: true,

  head: [
    ['link', { rel: "icon", href: "/favicon.ico"}]
  ],
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Abelian-Community-FAQ",
      description: "Abelian-Community-FAQ is committed to integrating mining tutorials and Q&A for the Abelian Community Document repository.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Get Started', link: '/guide/getting-started' },
          { text: 'API', link: '/apis/core-api' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Downloads',
            items: [
              { text: 'Download for Abelian', link: 'https://www.abelian.info/downloads/' },
              { text: 'Abelian Documents', link: '/downloads/documents/' },
              { text: 'Mainet Dababase', link: '/downloads/mainnet-db' },
              { text: 'Ecosystem Tools', link: '/downloads/ecosystem-tools' }
            ]
          },
          {
            text: 'Pools',
            items: [
              { text: 'MabelPools', link: 'https://pool.abelian.info/' },
              { text: 'AbelPool', link: 'https://www.abelpool.io/' },
              { text: 'zkProvers', link: 'https://www.zkprovers.com/' }
            ]
          },
          { text: 'Explorer', link: 'https://explorer.abelian.info/' }
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'What is Abelian', link: '/guide/what-is-abelian'},
                // { text: 'Introduction', 
                  // collapsed: true,
                  // items: [
                    // { text: 'Post-Quantum Blockchain Safe', link: '/intro/post-quantum-blockchain-safe' },
                    // { text: 'Abelian Core Team', link: '/intro/core-team' },
                    // { text: 'Anti-Quantum Encryption', link: '/intro/anti-quantum-encryption' },
                    // { text: 'Digital Gold 2.0', link: '/intro/digital-gold-2' }
                  // ]
                // },
                { text: 'ABEL Tokenomics', link: '/guide/abel-tokenomics'},
                { text: 'Getting Started', link: '/guide/getting-started'},
                { text: 'Abelian Wallet',
                  collapsed: false,  
                  items: [
                    { text: 'Mobile Wallet', link: '/guide/wallet/mobile-wallet' },
                    { text: 'Desktop Wallet', link: '/guide/wallet/desktop-wallet' },
                    { text: 'Wallet CLI', link: '/guide/wallet/wallet-cli' },
                    { text: 'Wallet CLI Lite', link: '/guide/wallet/wallet-cli-lite' }
                  ]
                },
                { text: 'Pool Mining',
                  collapsed: false, 
                  items: [
                    { text: 'Join GPU Pool', link: '/guide/mining/gpu-pool' },
                    { text: 'Join CPU Pool', link: '/guide/mining/cpu-pool' }
                  ]
                }
              ]
            }
          ],
          '/faq/': [
            {
              text: 'FAQ',
              collapsed: false,
              items: [
                { text: 'Software Issues',
                  collapsed: false,
                  items: [
                    { text: 'Wallet Issues', link: '/faq/software-issues/wallet'},
                    { text: 'Miner Issues', link: '/faq/software-issues/miner'},
                    { text: 'Fullnode Issues', link: '/faq/software-issues/fullnode'}
                  ]
                },
                { text: 'Hardware Issues',
                  collapsed: false,
                  items: [
                    { text: 'AMD graphics card', link: '/faq/hardware-issues/amd' },
                    { text: 'NVIDIA graphics card', link: '/faq/hardware-issues/nvidia'}
                  ]
                },
                { text: 'Basic Tutorial', link: '/faq/basic-tutorial/' },
                { text: 'Advanced Tutorial', link: '/faq/advanced-tutorial/' },
                { text: 'Community Highlights', link: '/faq/community/' }
              ]
            }
          ],
          '/apis/': [
            {
              text: 'API',
              collapsed: false,
              items: [
                { text: 'Core API', link: '/apis/core-api'},
                { text: 'Wallet API', link: '/apis/wallet-api' },
                { text: 'Ans API', link: '/apis/ans-api' }
              ]
            }
          ],
          '/downloads/': [
            {
              text: 'Downloads',
              collapsed: false,
              items: [
                { text: 'Abelian Documents', link: '/downloads/abelian-documents'},
                { text: 'Mainnet Database', link: '/downloads/mainnet-db'},
                { text: 'Ecosystem Tools', link: '/downloads/ecosystem-tools' }
              ]
            }
          ]
        },

        editLink: {
          pattern: 'https://github.com/pqabelian/abelian-community-website/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
    
        footer: {
          copyright: '© 2024 Abelian Foundation | All rights reserved'
        }
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      title: "Abelian 知识社区",
      description: "Abelian 知识社区 - 致力于为 Abelian 区块链集文档库、问答、教程和用户经验分享为一体的综合型社区。",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '由此开始', link: '/zh/guide/getting-started' },
          { text: 'API', link: '/zh/apis/core-api' },
          { text: '问答', link: '/zh/faq/' },
          { text: '下载',
            items: [
              { text: 'Abelian 下载', link: 'https://www.abelian.info/downloads/' },
              { text: 'Abelian 文档', link: '/zh/downloads/documents/' },
              { text: 'Abelian 主网数据', link: '/zh/downloads/mainnet-db' },
              { text: 'Abelian 生态工具', link: '/zh/downloads/ecosystem-tools' }
            ]
          },
          {
            text: '矿池',
            items: [
              { text: 'MabelPools', link: 'https://pool.abelian.info/' },
              { text: 'AbelPool', link: 'https://www.abelpool.io/' },
              { text: 'zkProvers', link: 'https://www.zkprovers.com/' }
            ]
          },
          { text: '浏览器', link: 'https://explorer.abelian.info/' }
        ],

        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: 'Abelian 是什么', link: '/zh/guide/what-is-abelian'},
                // { text: 'Abelian 介绍', 
                  // collapsed: true,
                  // items: [
                    // { text: 'Post-Quantum Blockchain Safe', link: '/zh/intro/post-quantum-blockchain-safe' },
                    // { text: 'Abelian Core Team', link: '/zh/intro/core-team' },
                    // { text: 'Anti-Quantum Encryption', link: '/zh/intro/anti-quantum-encryption' },
                    // { text: 'Digital Gold 2.0', link: '/zh/intro/digital-gold-2' }
                  // ]
                // },
                { text: 'ABEL 经济学', link: '/zh/guide/abel-tokenomics'},
                { text: '由此开始', link: '/zh/guide/getting-started'},
                { text: 'Abelian 钱包',
                  collapsed: false,  
                  items: [
                    { text: '移动钱包', link: '/zh/guide/wallet/mobile-wallet' },
                    { text: '桌面钱包', link: '/zh/guide/wallet/desktop-wallet' },
                    { text: '钱包 CLI', link: '/zh/guide/wallet/wallet-cli' },
                    { text: '钱包 CLI 简化版', link: '/zh/guide/wallet/wallet-cli-lite' }
                  ]
                },
                { text: '矿池指南',
                  collapsed: false, 
                  items: [
                    { text: '加入显卡矿池', link: '/zh/guide/mining/gpu-pool' },
                    { text: '加入CPU矿池', link: '/zh/guide/mining/cpu-pool' }
                  ]
                }
              ]
            }
          ],
          '/zh/faq/': [
            {
              text: '问答',
              collapsed: false,
              items: [
                { text: '软件问题',
                  collapsed: false,
                  items: [
                    { text: '钱包问题', link: '/zh/faq/software-issues/wallet'},
                    { text: 'Miner 问题', link: '/zh/faq/software-issues/miner'},
                    { text: '全节点问题', link: '/zh/faq/software-issues/fullnode'}
                  ]
                },
                { text: '硬件问题',
                  collapsed: false,
                  items: [
                    { text: 'AMD 显卡问题', link: '/zh/faq/hardware-issues/amd' },
                    { text: 'NVIDIA 显卡问题', link: '/zh/faq/hardware-issues/nvidia'}
                  ]
                },
                { text: '基础教程', link: '/zh/faq/basic-tutorial/' },
                { text: '进阶教程', link: '/zh/faq/advanced-tutorial/' },
                { text: '社区精选', link: '/zh/faq/community/' }
              ]
            }
          ],
          '/zh/apis/': [
            {
              text: 'API',
              collapsed: false,
              items: [
                { text: '核心 API', link: '/zh/apis/core-api'},
                { text: '钱包 API', link: '/zh/apis/wallet-api' },
                { text: 'Ans API', link: '/zh/apis/ans-api' }
              ]
            }
          ],
          '/zh/downloads/': [
            {
              text: '下载',
              collapsed: false,
              items: [
                { text: 'Abelian 文档', link: '/zh/downloads/abelian-documents'},
                { text: '主网数据', link: '/zh/downloads/mainnet-db'},
                { text: '生态工具', link: '/zh/downloads/ecosystem-tools' }
              ]
            }
          ]
        },

        editLink: {
          pattern: 'https://github.com/pqabelian/abelian-community-website/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页面'
        },
    
        footer: {
          copyright: `© 2024 Abelian 基金会 | 版权所有`
        },
    
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
    
        outline: {
          label: '页面导航'
        },
    
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-dark.png',
      dark: '/logo-light.png',
      alt: "Abelian-Community-FAQ"
    },

    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"/></svg>'
        },
        link: 'https://t.me/abelianfoundation'
      },
      { icon: 'discord', link: 'https://discord.gg/Rrb33mC3Kc' },
      { icon: 'x', link: 'https://twitter.com/PQabelian' },
      { icon: 'github', link: 'https://github.com/pqabelian' }
    ],
  }
})

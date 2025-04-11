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
      description: "Abelian is a quantum resistant blockchain ecosystem with layer 1 being GPU-based POW and layer 2 being EVM-compatible. Abelian-Community-FAQ is committed to integrating mining tutorials and Q&A for the Abelian Community Document repository.",
      keywords: ['quantum resistant blockchain', 'post quantum', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Get Started', link: '/guide/get-started' },
          { text: 'API/SDK', link: '/apis/core-api' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Downloads',
            items: [
              { text: 'Abelian Applications', link: '/downloads/latest' },
              { text: 'Abelian Release History', link: '/downloads/release-history' },
              { text: 'Abelian Source Codes', link: 'https://github.com/pqabelian' },
              { text: 'Mainet Dababase', link: '/downloads/mainnet-db' },
              { text: 'Ecosystem Tools', link: '/downloads/ecosystem-tools' }
            ]
          },
          {
            text: 'Pools',
            items: [
              { text: 'MaxPool (Official)', link: 'https://maxpool.org/' },
              { text: 'AbelPool (Community)', link: 'https://www.abelpool.io/' },
              { text: 'zkProvers (Community)', link: 'https://www.zkprovers.com/' }
            ]
          }
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'What is Abelian', link: '/guide/what-is-abelian'},
                { text: 'Get Started', link: '/guide/get-started'},
                { text: 'Abelian Tech Docs',
                  collapsed: false,
                  items: [
                    { text: 'Tokenomics', link: '/guide/abel-tokenomics'},
                    { text: 'Whitepaper', link: '/guide/abel-whitepaper'},
                    { text: 'PQZKBridge Yellowpaper', link: '/guide/abel-yellowpaper'},
                    { text: 'POW Difficulty Smooth Algorithm (DSA)', link: '/guide/abel-dsa-whitepaper'},
                    //{ text: 'Abelian User Token (AUT) Protocol', link: '/guide/abel-user-token-protocol'},
                    { text: 'ABEL Address Formart', link: '/guide/abel-address-format'},
                    { text: 'Abelian Improvement Proposals (AIP)', link: 'https://github.com/pqabelian/aips'}
                  ]
                },
                { text: 'QDay Tech Docs',
                  collapsed: false,
                  items: [
                    { text: 'Whitepaper', link: '/guide/qday-whitepaper'}
                  ]
                },
                { text: 'Abelian User Guide',
                  collapsed: true,  
                  items: [
                    { text: 'Abelian Apps Basics', link: '/guide/index' },
                    { text: 'Desktop Wallet Pro (MLP)', link: '/guide/wallet/desktop-wallet-pro' },
                    { text: 'Desktop Wallet Legacy', link: '/guide/wallet/desktop-wallet-legacy' },
                    { text: 'CLI Full Node', link: '/guide/cli-full-node' },
                    { text: 'CLI Wallet (MLP)', link: '/guide/wallet/cli-wallet-mlp' },
                    { text: 'CLI Wallet Legacy', link: '/guide/wallet/cli-wallet-legacy' },
                    { text: 'GPU Mining', link: '/guide/mining/gpu-pool' }
                  ]
                },
                { text: 'QDay Testnet User Guide',
                  collapsed: true,
                  items: [
                    { text: 'QDay Testnet Introduction', link: '/guide/qday-testnet/' },
                    { text: 'QDay Explorer', link: '/guide/qday-testnet/explorer' },
                    { text: 'MetaMask Wallet', link: '/guide/qday-testnet/metamask' },
                    { text: 'QDay Faucet', link: '/guide/qday-testnet/qday-faucet' },
                    { text: 'QDay Staking', link: '/guide/qday-testnet/qday-staking' },
                    { text: 'ABEL Faucet', link: '/guide/qday-testnet/abel-faucet' },
                    { text: 'ABEL Staking', link: '/guide/qday-testnet/abel-staking' },
                    { text: 'QDay DEX', link: '/guide/qday-testnet/dex' }
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
                { text: 'Pool Issues', link: '/faq/pool-issues' }
              ]
            }
          ],
          '/apis/': [
            {
              text: 'API/SDK',
              collapsed: false,
              items: [
                { text: 'Core API', link: '/apis/core-api'},
                { text: 'Wallet API', link: '/apis/wallet-api' },
                { text: 'Ans API', link: '/apis/ans-api' },
                { text: 'Java SDK',
                  collapsed: false,
                  items: [
                    { text: 'Guide', link: '/apis/java-sdk/' },
                    { text: 'Demo', link: '/apis/java-sdk/demo'}
                  ]
                }
              ]
            }
          ],
          '/downloads/': [
            {
              text: 'Downloads',
              collapsed: false,
              items: [
                { text: 'Abelian Applications', link: '/downloads/latest' },
                { text: 'Abelian Release History', link: '/downloads/release-history' },
                { text: 'Abelian Source Codes', link: 'https://github.com/pqabelian' },
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
          copyright: '© 2024 <a href="https://pqabelian.io" target="_blank">Abelian</a> | All rights reserved'
        }
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      title: "Abelian 知识社区",
      description: "Abelian 是一个抗量子计算的区块链生态系统，Layer 1 基于 GPU 的 POW，Layer 2 兼容 EVM。 Abelian 知识社区 - 致力于为 Abelian 区块链集文档库、问答、教程和用户经验分享为一体的综合型社区。",
      keywords: ['quantum resistant blockchain', 'post quantum', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '由此开始', link: '/zh/guide/get-started' },
          { text: 'API/SDK', link: '/zh/apis/core-api' },
          { text: '问答', link: '/zh/faq/' },
          { text: '下载',
            items: [
              { text: 'Abelian 应用程序', link: '/zh/downloads/latest' },
              { text: 'Abelian 应用历史版本', link: '/zh/downloads/release-history' },
              { text: 'Abelian 开源代码', link: 'https://github.com/pqabelian' },
              { text: 'Abelian 主网数据', link: '/zh/downloads/mainnet-db' },
              { text: 'Abelian 生态工具', link: '/zh/downloads/ecosystem-tools' }
            ]
          },
          {
            text: '矿池',
            items: [
              { text: 'MaxPool（官方）', link: 'https://maxpool.org/' },
              { text: 'AbelPool（社区）', link: 'https://www.abelpool.io/' },
              { text: 'zkProvers（社区）', link: 'https://www.zkprovers.com/' }
            ]
          }
        ],

        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: 'Abelian 是什么', link: '/zh/guide/what-is-abelian'},
                { text: '由此开始', link: '/zh/guide/get-started'},
                { text: 'Abelian 技术文档',
                  collapsed: false,
                  items: [
                    { text: '经济学', link: '/zh/guide/abel-tokenomics'},
                    { text: '白皮书', link: '/zh/guide/abel-whitepaper'},
                    { text: '后量子跨链桥黄皮书', link: '/zh/guide/abel-yellowpaper'},
                    { text: 'POW 难度平滑算法 (DSA)', link: '/zh/guide/abel-dsa-whitepaper'},
                    //{ text: 'Abelian 用户代币(AUT)协议', link: '/zh/guide/abel-user-token-protocol'},
                    { text: 'ABEL 地址格式', link: '/zh/guide/abel-address-format'},
                    { text: 'Abelian 改进提案 (AIP)', link: 'https://github.com/pqabelian/aips'}
                  ]
                },
                { text: 'QDay 技术文档',
                  collapsed: false,
                  items: [
                    { text: '白皮书', link: '/zh/guide/qday-whitepaper'}
                  ]
                },
                { text: 'Abelian 用户指南',
                  collapsed: true,  
                  items: [
                    { text: '应用程序常识', link: '/zh/guide/index' },
                    { text: '桌面钱包专业版 (MLP)', link: '/zh/guide/wallet/desktop-wallet-pro' },
                    { text: '桌面钱包经典版', link: '/zh/guide/wallet/desktop-wallet-legacy' },
                    { text: '全节点 (CLI)', link: '/zh/guide/cli-full-node' },
                    { text: '多层隐私钱包 (CLI)', link: '/zh/guide/wallet/cli-wallet-mlp' },
                    { text: '经典钱包（CLI）', link: '/zh/guide/wallet/cli-wallet-legacy' },
                    { text: '显卡挖矿', link: '/zh/guide/mining/gpu-pool' }
                  ]
                },
                { text: 'QDay 测试网用户指南',
                  collapsed: true,
                  items: [
                    { text: 'QDay 测试网简介', link: '/zh/guide/qday-testnet/' },
                    { text: 'QDay 浏览器', link: '/zh/guide/qday-testnet/explorer' },
                    { text: 'MetaMask 钱包', link: '/zh/guide/qday-testnet/metamask' },
                    { text: 'QDay 水龙头', link: '/zh/guide/qday-testnet/qday-faucet' },
                    { text: 'QDay 质押', link: '/zh/guide/qday-testnet/qday-staking' },
                    { text: 'ABEL 水龙头', link: '/zh/guide/qday-testnet/abel-faucet' },
                    { text: 'ABEL 质押', link: '/zh/guide/qday-testnet/abel-staking' },
                    { text: 'QDay DEX', link: '/zh/guide/qday-testnet/dex' }
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
                { text: '矿池问题', link: '/zh/faq/pool-issues' },
                { text: '基础教程', link: '/zh/faq/basic-tutorial/' }
              ]
            }
          ],
          '/zh/apis/': [
            {
              text: 'API/SDK',
              collapsed: false,
              items: [
                { text: '核心 API', link: '/zh/apis/core-api'},
                { text: '钱包 API', link: '/zh/apis/wallet-api' },
                { text: 'Ans API', link: '/zh/apis/ans-api' },
                { text: 'Java SDK',
                  collapsed: false,
                  items: [
                    { text: '指引', link: '/zh/apis/java-sdk/' },
                    { text: '演示', link: '/zh/apis/java-sdk/demo'}
                  ]
                }
              ]
            }
          ],
          '/zh/downloads/': [
            {
              text: '下载',
              collapsed: false,
              items: [
                { text: 'Abelian 应用程序', link: '/zh/downloads/latest' },
                { text: 'Abelian 应用历史版本', link: '/zh/downloads/release-history' },
                { text: 'Abelian 开源代码', link: 'https://github.com/pqabelian' },
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
          copyright: `© 2024 <a href="https://pqabelian.io" target="_blank">Abelian</a> | 版权所有`
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
      light: '/logo.svg',
      dark: '/logo.svg',
      alt: "Abelian-Community-FAQ-Website"
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
                  navigateText: '切换',
                  closeText: '关闭'
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
        link: 'https://t.me/pqabelian'
      },
      { icon: 'discord', link: 'https://discord.gg/Rrb33mC3Kc' },
      { icon: 'x', link: 'https://twitter.com/PQabelian' },
      { icon: 'youtube', link: 'https://www.youtube.com/@PQAbelian' },
      { icon: 'github', link: 'https://github.com/pqabelian' }
    ],
  }
})
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/abelian-community-website/",
  ignoreDeadLinks: true,
  lastUpdated: true,

  head: [
    ['link', { rel: "icon", href: "/favicon.ico"}],
    ['script', {
      async: 'true',
      defer: 'true',
      src: 'https://hako.pqabelian.io/api/application/embed?protocol=https&host=hako.pqabelian.io&token=632bf3ead0ebfee2'
    }]
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
          { text: 'Docs', link: '/guide/' },
          { text: 'API/SDK', link: '/apis/core-api' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Downloads',
            items: [
              { text: 'Abelian Applications', link: '/downloads/latest' },
              { text: 'Abelian Release History', link: '/downloads/release-history' },
              { text: 'Abelian Source Codes', link: 'https://github.com/pqabelian' },
              { text: 'Abelian Fullnode Dababase', link: '/downloads/fullnode-db' },
              { text: 'Abelian Ecosystem Tools', link: '/downloads/ecosystem-tools' }
            ]
          },
          {
            text: 'Pools',
            items: [
              { text: 'MaxPool (Official)', link: 'https://maxpool.org/' },
              { text: 'AbelPool (Community)', link: 'https://www.abelpool.io/' }
            ]
          },
          { text: 'Ask Hako', link: 'https://hako.pqabelian.io' }
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'What is Abelian', link: '/guide/what-is-abelian'},
                { text: 'Abelian User Guide',
                  collapsed: false,  
                  items: [
                    { text: 'Abelian Apps Basics', link: '/guide/index' },
                    { text: 'Desktop Wallet Pro (MLP)', link: '/guide/wallet/desktop-wallet-pro' },
                    { text: 'Desktop Wallet Legacy', link: '/guide/wallet/desktop-wallet-legacy' },
                    { text: 'Abelian Node (abec)', link: '/guide/abelian-node' },
                    { text: 'CLI Wallet (MLP)', link: '/guide/wallet/cli-wallet-mlp' },
                    { text: 'CLI Wallet Legacy', link: '/guide/wallet/cli-wallet-legacy' },
                    { text: 'GPU Mining', link: '/guide/mining/gpu-mining' },
                    { text: 'CPU Mining', link: '/guide/mining/cpu-mining' }
                  ]
                },
                { text: 'Abelian Tech Docs',
                  collapsed: false,
                  items: [
                    { text: 'Tokenomics', link: '/guide/abel-tokenomics'},
                    { text: 'Whitepaper', link: '/guide/abel-whitepaper'},
                    { text: 'PQZKBridge Yellowpaper', link: '/guide/abel-yellowpaper'},
                    { text: 'POW Difficulty Smooth Algorithm (DSA)', link: '/guide/abel-dsa-whitepaper'},
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
                { text: 'Pool Issues', link: '/faq/pool-issues' },
                { text: 'Exchanges Issues', link: '/faq/community/exchanges' }
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
                { text: 'Abelian Fullnode Database', link: '/downloads/fullnode-db'},
                { text: 'Abelian Ecosystem Tools', link: '/downloads/ecosystem-tools' }
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
      selectText: '选择语言',
      lang: 'zh-CN',
      link: '/zh/',
      title: "Abelian 知识社区",
      description: "Abelian 是一个抗量子计算的区块链生态系统，Layer 1 基于 GPU 的 POW，Layer 2 兼容 EVM。 Abelian 知识社区 - 致力于为 Abelian 区块链集文档库、问答、教程和用户经验分享为一体的综合型社区。",
      keywords: ['quantum resistant blockchain', 'post quantum', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/guide/' },
          { text: 'API/SDK', link: '/zh/apis/core-api' },
          { text: '问答', link: '/zh/faq/' },
          { text: '下载',
            items: [
              { text: 'Abelian 应用程序', link: '/zh/downloads/latest' },
              { text: 'Abelian 应用历史版本', link: '/zh/downloads/release-history' },
              { text: 'Abelian 开源代码', link: 'https://github.com/pqabelian' },
              { text: 'Abelian 全节点数据', link: '/zh/downloads/fullnode-db' },
              { text: 'Abelian 生态工具', link: '/zh/downloads/ecosystem-tools' }
            ]
          },
          {
            text: '矿池',
            items: [
              { text: 'MaxPool（官方）', link: 'https://maxpool.org/' },
              { text: 'AbelPool（社区）', link: 'https://www.abelpool.io/' }
            ]
          },
          { text: '询问 Hako', link: 'https://hako.pqabelian.io' }
        ],

        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: 'Abelian 是什么', link: '/zh/guide/what-is-abelian'},
                { text: 'Abelian 用户指南',
                  collapsed: false,  
                  items: [
                    { text: '应用程序常识', link: '/zh/guide/index' },
                    { text: '桌面钱包专业版 (MLP)', link: '/zh/guide/wallet/desktop-wallet-pro' },
                    { text: '桌面钱包经典版', link: '/zh/guide/wallet/desktop-wallet-legacy' },
                    { text: 'Abelian 节点 (abec)', link: '/zh/guide/abelian-node' },
                    { text: '多层隐私钱包 (CLI)', link: '/zh/guide/wallet/cli-wallet-mlp' },
                    { text: '经典钱包（CLI）', link: '/zh/guide/wallet/cli-wallet-legacy' },
                    { text: '显卡挖矿', link: '/zh/guide/mining/gpu-mining' },
                    { text: 'CPU 挖矿', link: '/zh/guide/mining/cpu-mining' }
                  ]
                },
                { text: 'Abelian 技术文档',
                  collapsed: false,
                  items: [
                    { text: '经济学', link: '/zh/guide/abel-tokenomics'},
                    { text: '白皮书', link: '/zh/guide/abel-whitepaper'},
                    { text: '后量子跨链桥黄皮书', link: '/zh/guide/abel-yellowpaper'},
                    { text: 'POW 难度平滑算法 (DSA)', link: '/zh/guide/abel-dsa-whitepaper'},
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
                { text: '交易所问题', link: '/zh//faq/community/exchanges' }
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
                { text: 'Abelian 全节点数据', link: '/zh/downloads/fullnode-db'},
                { text: 'Abelian 生态工具', link: '/zh/downloads/ecosystem-tools' }
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
    },

    /*
    tw: {
      label: '繁體中文',
      selectText: '選擇語言',
      lang: 'zh-TW',
      link: '/tw/',
      title: "Abelian 知識社區",
      description: "Abelian 是一個抗量子計算的區塊鏈生態系統，Layer 1 基於 GPU 的 POW，Layer 2 兼容 EVM。 Abelian 知識社區 - 致力於為 Abelian 區塊鏈集文檔庫、問答、教程和用戶經驗分享為一體的綜合型社區。",
      keywords: ['quantum resistant blockchain', 'post quantum', 'quantum resistant', 'quantum safe', 'privacy coin', 'zero knowledge', 'EVM compatible', 'QDay', 'Abelian', 'Abelian Foundation', 'ABEL', 'QDAY'],
      themeConfig: {
        nav: [
          { text: '首頁', link: '/tw/' },
          { text: '文檔', link: '/tw/guide/' },
          { text: 'API/SDK', link: '/tw/apis/core-api' },
          { text: '問答', link: '/tw/faq/' },
          { text: '下載',
            items: [
              { text: 'Abelian 應用程式', link: '/tw/downloads/latest' },
              { text: 'Abelian 應用歷史版本', link: '/tw/downloads/release-history' },
              { text: 'Abelian 開源代碼', link: 'https://github.com/pqabelian' },
              { text: 'Abelian 全節點數據', link: '/tw/downloads/fullnode-db' },
              { text: 'Abelian 生態工具', link: '/tw/downloads/ecosystem-tools' }
            ]
          },
          {
            text: '礦池',
            items: [
              { text: 'MaxPool（官方）', link: 'https://maxpool.org/' },
              { text: 'AbelPool（社區）', link: 'https://www.abelpool.io/' }
            ]
          },
          { text: '詢問 Hako', link: 'https://hako.pqabelian.io' }
        ],

        sidebar: {
          '/tw/guide/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: 'Abelian 是什麼', link: '/tw/guide/what-is-abelian'},
                { text: 'Abelian 用戶指南',
                  collapsed: false,  
                  items: [
                    { text: '應用程式常識', link: '/tw/guide/index' },
                    { text: '桌面錢包專業版 (MLP)', link: '/tw/guide/wallet/desktop-wallet-pro' },
                    { text: '桌面錢包經典版', link: '/tw/guide/wallet/desktop-wallet-legacy' },
                    { text: 'Abelian 節點 (abec)', link: '/tw/guide/abelian-node' },
                    { text: '多層隱私錢包 (CLI)', link: '/tw/guide/wallet/cli-wallet-mlp' },
                    { text: '經典錢包（CLI）', link: '/tw/guide/wallet/cli-wallet-legacy' },
                    { text: '顯卡挖礦', link: '/tw/guide/mining/gpu-mining' },
                    { text: 'CPU 挖礦', link: '/tw/guide/mining/cpu-mining' }
                  ]
                },
                { text: 'Abelian 技術文檔',
                  collapsed: false,
                  items: [
                    { text: '經濟學', link: '/tw/guide/abel-tokenomics'},
                    { text: '白皮書', link: '/tw/guide/abel-whitepaper'},
                    { text: '後量子跨鏈橋黃皮書', link: '/tw/guide/abel-yellowpaper'},
                    { text: 'POW 難度平滑算法 (DSA)', link: '/tw/guide/abel-dsa-whitepaper'},
                    { text: 'ABEL 地址格式', link: '/tw/guide/abel-address-format'},
                    { text: 'Abelian 改進提案 (AIP)', link: 'https://github.com/pqabelian/aips'}
                  ]
                },
                { text: 'QDay 技術文檔',
                  collapsed: false,
                  items: [
                    { text: '白皮書', link: '/tw/guide/qday-whitepaper'}
                  ]
                },
                { text: 'QDay 測試網用戶指南',
                  collapsed: true,
                  items: [
                    { text: 'QDay 測試網簡介', link: '/tw/guide/qday-testnet/' },
                    { text: 'QDay 瀏覽器', link: '/tw/guide/qday-testnet/explorer' },
                    { text: 'MetaMask 錢包', link: '/tw/guide/qday-testnet/metamask' },
                    { text: 'QDay 水龍頭', link: '/tw/guide/qday-testnet/qday-faucet' },
                    { text: 'QDay 質押', link: '/tw/guide/qday-testnet/qday-staking' },
                    { text: 'ABEL 水龍頭', link: '/tw/guide/qday-testnet/abel-faucet' },
                    { text: 'ABEL 質押', link: '/tw/guide/qday-testnet/abel-staking' },
                    { text: 'QDay DEX', link: '/tw/guide/qday-testnet/dex' }
                  ]
                }
              ]
            }
          ],
          '/tw/faq/': [
            {
              text: '問答',
              collapsed: false,
              items: [
                { text: '軟體問題',
                  collapsed: false,
                  items: [
                    { text: '錢包問題', link: '/tw/faq/software-issues/wallet'},
                    { text: 'Miner 問題', link: '/tw/faq/software-issues/miner'},
                    { text: '全節點問題', link: '/tw/faq/software-issues/fullnode'}
                  ]
                },
                { text: '硬體問題',
                  collapsed: false,
                  items: [
                    { text: 'AMD 顯卡問題', link: '/tw/faq/hardware-issues/amd' },
                    { text: 'NVIDIA 顯卡問題', link: '/tw/faq/hardware-issues/nvidia'}
                  ]
                },
                { text: '礦池問題', link: '/tw/faq/pool-issues' },
                { text: '交易所問題', link: '/tw//faq/community/exchanges' }
              ]
            }
          ],
          '/tw/apis/': [
            {
              text: 'API/SDK',
              collapsed: false,
              items: [
                { text: '核心 API', link: '/tw/apis/core-api'},
                { text: '錢包 API', link: '/tw/apis/wallet-api' },
                { text: 'Ans API', link: '/tw/apis/ans-api' },
                { text: 'Java SDK',
                  collapsed: false,
                  items: [
                    { text: '指引', link: '/tw/apis/java-sdk/' },
                    { text: '演示', link: '/tw/apis/java-sdk/demo'}
                  ]
                }
              ]
            }
          ],
          '/tw/downloads/': [
            {
              text: '下載',
              collapsed: false,
              items: [
                { text: 'Abelian 應用程式', link: '/tw/downloads/latest' },
                { text: 'Abelian 應用歷史版本', link: '/tw/downloads/release-history' },
                { text: 'Abelian 開源代碼', link: 'https://github.com/pqabelian' },
                { text: 'Abelian 全節點數據', link: '/tw/downloads/fullnode-db'},
                { text: 'Abelian 生態工具', link: '/tw/downloads/ecosystem-tools' }
              ]
            }
          ]
        },

        editLink: {
          pattern: 'https://github.com/pqabelian/abelian-community-website/edit/main/docs/:path',
          text: '在 GitHub 上編輯此頁面'
        },
    
        footer: {
          copyright: `© 2024 <a href="https://pqabelian.io" target="_blank">Abelian</a> | 版權所有`
        },
    
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },
    
        outline: {
          label: '頁面導航'
        },
    
        lastUpdated: {
          text: '最後更新於',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        langMenuLabel: '多語言',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '菜單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式'
      }
    }
    */
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
          },
          tw: {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜索文檔'
              },
              modal: {
                noResultsText: '找不到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
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

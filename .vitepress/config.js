import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '國考中文醫學知識網站',
  description: '台灣醫學國家考試準備資料庫',
  lang: 'zh-TW',
  
  // Ignore dead links during build
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '內科', link: '/internal-medicine/' },
      { text: '外科', link: '/surgery/' },
      { text: '兒科', link: '/pediatrics/' },
      { text: '婦產科', link: '/obstetrics-gynecology/' },
      { text: '其他科', link: '/other-specialties/' }
    ],

    sidebar: {
      '/internal-medicine/': [
        {
          text: '內科',
          items: [
            { text: '心血管疾病', link: '/internal-medicine/cardiovascular/' },
            { text: '胸腔疾病', link: '/internal-medicine/pulmonary/' },
            { text: '消化系統', link: '/internal-medicine/gastroenterology/' },
            { text: '新陳代謝', link: '/internal-medicine/metabolism/' },
            { text: '內科值班', link: '/internal-medicine/on-call/' }
          ]
        }
      ],
      '/surgery/': [
        {
          text: '外科',
          items: [
            { text: '心血管外科', link: '/surgery/cardiovascular/' },
            { text: '神經外科', link: '/surgery/neurosurgery/' }
          ]
        }
      ],
      '/pediatrics/': [
        {
          text: '兒科',
          items: [
            { text: '兒科概論', link: '/pediatrics/overview/' }
          ]
        }
      ],
      '/obstetrics-gynecology/': [
        {
          text: '婦產科',
          items: [
            { text: '婦產科概論', link: '/obstetrics-gynecology/overview/' }
          ]
        }
      ],
      '/other-specialties/': [
        {
          text: '其他科',
          items: [
            { text: '眼科', link: '/other-specialties/ophthalmology/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/medical-knowledge-site' }
    ],

    footer: {
      message: '國考中文醫學知識網站',
      copyright: 'Copyright © 2025'
    },

    search: {
      provider: 'local'
    }
  },

  // 處理圖片路徑
  assetsDir: 'assets',
  
  // 支援中文 URL
  rewrites: {
    'source/:path*': 'destination/:path*'
  }
})

export default {
  test: {
    title: 'hk test'
  },
  header: {
    nav: [
      {
        title: '主頁',
        haveList: false,
        link: '/hk'
      },
      {
        title: '有關我們',
        haveList: true,
        listItems: [
          { title: '關於我們', link: '/hk/about-us' },
          { title: '聯繫我們', link: '/hk/contact-us' },
          { title: '尋找我們', link: '/hk/find-us' }
        ],
        showList: false,
        link: '/',
        matches: /\babout-us\b | \bcontact-us\b | \bfind-us\b/
      },
      {
        title: '酒單與報價',
        haveList: true,
        listItems: [
          { title: '酒單', link: '/hk/wine-list' },
          { title: '新酒到貨', link: '/hk/new-arrivals' },
          { title: '特别推介', link: '/hk/special-offers' }
        ],
        showList: false,
        matches: /\bwine-list\b | \bnew-arrivals\b | \bspecial-offers\b/
      }
    ],
    'lang-switcher': {
      haveList: true,
      title: '其他語言',
      showList: false,
      lang: [
        { flag: '/media/country-icon/en.svg', locale: 'en' },
        { flag: '/media/country-icon/cn.svg', locale: 'cn' }
      ]
    },
    mobileMenu: [
      { title: '主頁', link: '/hk' },
      { title: '關於我們', link: '/hk/about-us' },
      { title: '酒單', link: '/hk/wine-list' },
      { title: '特别推介', link: '/hk/special-offers' },
      { title: '新酒到貨', link: '/hk/new-arrivals' },
      { title: '尋找我們', link: '/hk/find-us' },
      { title: '聯繫我們', link: '/hk/contact-us' }
      // { "title": "WINE RATING", "link": "/wine-rating" }
    ]
  },
  home: {
    title: '尋找與享受你理想中的葡萄酒',
    'extend-1': {
      title: '在香貝田中獲取理想中的葡萄酒',
      paragraph: '我們提供來自100多家葡萄酒生產商的優質葡萄酒。有如此驚人數目的種類，總有一款適合你的葡萄酒。',
      button_text: '查看酒單',
      button_url: '/hk/wine-list',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614964460/cbtwines/session-one-horizontal_vbtkpk.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614965116/cbtwines/session-one-vertical_iyjnvl.png'
    },
    'extend-2': {
      title: '想找新的感覺嗎？',
      paragraph: '查看{month}我們在全球搜羅的最新貨品。點擊以下按鈕以尋找新的葡萄酒！',
      button_text: '查看新酒到貨',
      button_url: '/hk/new-arrivals',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto,w_553,h_374/v1615054333/cbtwines/kv-pc_1_y0b1yx.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615054335/cbtwines/pexels-photo-3171770_1_yt9lnt.png'
    },
    'extend-3': {
      title: '不知道該選擇什麼？',
      paragraph: '有時候，當您失去想法時，很難找到想要的東西。 讓我們為您提供一些特別的葡萄酒吧！',
      button_text: '查看特别推介',
      button_url: '/hk/special-offers',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/purple-grapes-vineyard-napa-valley-napa-vineyard-45209_1_snhuzf.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/pexels-photo-4946398_1_k6n28d.png'
    }
  },
  'about-us': {
    title: '關於我們',
    paragraph1: '葡萄酒文化源遠流長，每年從各地生產的葡萄酒多不勝數，在如此多種類的葡萄酒中，挑選出符合自己口味的葡萄酒可謂是沙中淘金。我們的使命是替客人在琳琅滿目的葡萄酒種類中，根據客人需求及口味，挑選出符合要求的葡萄酒。',
    paragraph2: '本公司提供了多個地區，各具不同香氣、口感、風味的葡萄酒，以供客人任意挑選，繼而滿載而歸。我們深信每一瓶葡萄酒有其獨特的靈魂及生命，其風味就像訴說它一生的故事，幫助每位客人找到所青睞的葡萄酒，是我們至高無上的榮幸。那就是一',
    link: '香貝田酒業有限公司。'
  },
  'find-us': {
    title: '尋找我們',
    address_1: '香港 九龍',
    address_2: '長沙灣 長義街10號',
    address_3: '昌隆工業大廈',
    address_4: '6樓 B3室',
    'scroll-down': '往下...'
  },
  'contact-us': {
    title: '聯繫我們',
    'msg-title': '主旨',
    'msg-body': '内容',
    'msg-body-placeholder': '留下你的信息...',
    submit: '提交'
  },
  'wine-list': {
    title: '酒單',
    region: '產地',
    origins: [
      { name: 'All', displayname: '全部' },
      { name: 'Bordeaux', displayname: '波爾多區' },
      { name: 'Margaux', displayname: '瑪歌區' },
      { name: 'Pauillac', displayname: '波亞克產區' },
      { name: 'Saint Emilion', displayname: '聖美倫產區' },
      { name: 'Saint Estephe', displayname: '聖愛斯泰夫產區' },
      { name: 'Saint Julien', displayname: '聖祖莉安產區' },
      { name: 'Pessac Leognan', displayname: '佩薩克-雷奧良產區' },
      { name: 'Haut Medoc', displayname: '上美度產區' },
      { name: 'Sauternes', displayname: '蘇岱產區' },
      { name: 'Burgundy', displayname: '勃艮第區' },
      { name: 'Rhone', displayname: '隆河谷區' },
      { name: 'Champagne', displayname: '香檳區' },
      { name: 'Alsace', displayname: '亞爾薩斯' },
      { name: 'Australia', displayname: '澳洲' },
      { name: 'Whisky', displayname: '威士忌' },
      { name: 'Italy', displayname: '義大利' },
      { name: 'U.S.A.', displayname: '美國' },
      { name: 'New Zealand', displayname: '新西蘭' },
      { name: 'Sake', displayname: '清酒' },
      { name: 'Accessory', displayname: '其他' }
    ],
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '產地', value: 'origin' },
      { text: '產區', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '評級', value: 'rating' },
      { text: '價錢(港幣)', value: 'price' }
    ],
    search: '搜尋'
  },
  'new-arrivals': {
    title: '新酒到貨',
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '產地', value: 'origin' },
      { text: '產區', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '評級', value: 'rating' },
      { text: '價錢(港幣)', value: 'price' }
    ],
    paragraph: "對我們的<a href='/hk/special-offers'>特别推介</a>有興趣嗎? 還是看看我們的<a href='/hk/wine-list'>酒單</a>。",
    search: '搜尋'
  },
  'special-offers': {
    title: '特别推介',
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '產地', value: 'origin' },
      { text: '產區', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '評級', value: 'rating' },
      { text: '價錢(港幣)', value: 'price' },
      { text: '折後價', value: 'discountPrice' }
    ],
    paragraph: "對我們的<a href='/hk/new-arrivals'>新酒到貨</a>有興趣嗎? 還是看看我們的<a href='/hk/wine-list'>酒單</a>。",
    search: '搜尋'
  },
  footer: {
    text: '根據香港法律,不得在業務過程中,向未成年人(18歲以下人士)售賣或供應令人醺醉的酒類。'
  },
  'real-footer': {
    text: '&copy;2021 香貝田酒業有限公司版權所有'
  },
  meta: {
    base: {
      url: 'https://www.cbtwines.co/hk',
      image: 'https://cbtwines.co/media/logo.png'
    },
    home: {
      title: '尋找與享受你理想中的葡萄酒 | 香貝田酒業有限公司',
      description: '香貝田酒業有限公司為你提供來自全球的各種酒類，買滿$3000更可享有免運費優惠！',
      keywords: '香貝田酒業, 香貝田, 香港酒業',
      slug: ''
    },
    'about-us': {
      title: '關於我們 | 香貝田酒業有限公司',
      description: '由2011年起，香貝田酒業有限公司為香港提供來自全球的各種酒類，了解更多關於香貝田酒業的資訊。',
      keywords: '香貝田酒業, 香貝田, 香港酒業, 關於香貝田酒業, 了解香貝田酒業',
      slug: 'about-us'
    },
    'find-us': {
      title: '尋找我們 | 香貝田酒業有限公司',
      description: '香貝田酒業有限公司位於荔枝角，歡迎致電或以電郵尋找我們。更多關於香貝田酒業的聯絡方法。',
      keywords: '尋找香貝田, 聯繫香貝田, 香貝田酒業',
      slug: 'find-us'
    },
    'contact-us': {
      title: '聯繫我們 | 香貝田酒業有限公司',
      description: '想要跟我們取得聯繫？留下你的信息，便可方便快捷地以電郵聯繫我們。',
      keywords: '聯繫香貝田酒業, 酒業聯繫',
      slug: 'contact-us'
    },
    'wine-list': {
      title: '酒單 | 香貝田酒業有限公司',
      description: '查看香貝田酒業的酒單，以便了解我們為香港從全球搜羅的美酒。',
      keywords: '香貝田酒業酒單, 酒單, 香貝田酒單, CBT酒單',
      slug: 'wine-list'
    },
    'new-arrivals': {
      title: '新酒到貨 | 香貝田酒業有限公司',
      description: '香貝田酒業提供的全新酒品及貨品，為你的餐桌帶來新的體驗。',
      keywords: '全新酒品, 香貝田酒品, 新酒',
      slug: 'new-arrivals'
    },
    'special-offers': {
      title: '特别推介 | 香貝田酒業有限公司',
      description: '香貝田酒業為你帶來的特别推介，輕鬆物色當季美酒。更有不定期折扣優惠！',
      keywords: '香貝田優惠, 折扣酒品, 酒類優惠, 當季酒類',
      slug: 'special-offers'
    }
  }
}

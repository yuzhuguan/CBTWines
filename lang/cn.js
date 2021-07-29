export default {
  test: {
    title: 'hk test'
  },
  header: {
    nav: [
      {
        title: '主页',
        haveList: false,
        link: '/cn'
      },
      {
        title: '有关我们',
        haveList: true,
        listItems: [
          { title: '关于我们', link: '/cn/about-us' },
          { title: '联系我们', link: '/cn/contact-us' },
          { title: '寻找我们', link: '/cn/find-us' }
        ],
        showList: false,
        link: '/',
        matches: /\babout-us\b | \bcontact-us\b | \bfind-us\b/
      },
      {
        title: '酒单与报价',
        haveList: true,
        listItems: [
          { title: '酒单', link: '/cn/wine-list' },
          { title: '新酒到货', link: '/cn/new-arrivals' },
          { title: '特别推介', link: '/cn/special-offers' }
        ],
        showList: false,
        matches: /\bwine-list\b | \bnew-arrivals\b | \bspecial-offers\b/
      }
    ],
    'lang-switcher': {
      haveList: true,
      title: '其他语言',
      showList: false,
      lang: [
        { flag: '/media/country-icon/en.svg', locale: 'en' },
        { flag: '/media/country-icon/hk.svg', locale: 'hk' }
      ]
    },
    mobileMenu: [
      { title: '主页', link: '/cn' },
      { title: '关于我们', link: '/cn/about-us' },
      { title: '酒单', link: '/cn/wine-list' },
      { title: '特别推介', link: '/cn/special-offers' },
      { title: '新酒到货', link: '/cn/new-arrivals' },
      { title: '寻找我们', link: '/cn/find-us' },
      { title: '联系我们', link: '/cn/contact-us' }
      // { "title": "WINE RATING", "link": "/wine-rating" }
    ]
  },
  home: {
    title: '寻找与享受你理想中的葡萄酒',
    'extend-1': {
      title: '在香贝田中获取理想中的葡萄酒',
      paragraph: '我们提供来自100多家葡萄酒生产商的优质葡萄酒。有如此惊人数目的种类，总有一款适合你的葡萄酒。',
      button_text: '查看酒单',
      button_url: '/cn/wine-list',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614964460/cbtwines/session-one-horizontal_vbtkpk.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614965116/cbtwines/session-one-vertical_iyjnvl.png'
    },
    'extend-2': {
      title: '想找新的感觉吗？',
      paragraph: '查看{month}我们在全球搜罗的最新货品。点击以下按钮以寻找新的葡萄酒！',
      button_text: '查看新酒到货',
      button_url: '/hk/new-arrivals',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto,w_553,h_374/v1615054333/cbtwines/kv-pc_1_y0b1yx.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615054335/cbtwines/pexels-photo-3171770_1_yt9lnt.png'
    },
    'extend-3': {
      title: '不知道该选择什么？',
      paragraph: '有时候，当您失去想法时，很难找到想要的东西。让我们为您提供一些特别的葡萄酒吧！',
      button_text: '查看特别推介',
      button_url: '/cn/special-offers',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/purple-grapes-vineyard-napa-valley-napa-vineyard-45209_1_snhuzf.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/pexels-photo-4946398_1_k6n28d.png'
    }
  },
  'about-us': {
    title: '关于我们',
    paragraph1: '葡萄酒文化源远流长，每年从各地生产的葡萄酒多不胜数，在如此多种类的葡萄酒中，挑选出符合自己口味的葡萄酒可谓是沙中淘金。我们的使命是替客人在琳琅满目的葡萄酒种类中，根据客人需求及口味，挑选出符合要求的葡萄酒。',
    paragraph2: '本公司提供了多个地区，各具不同香气、口感、风味的葡萄酒，以供客人任意挑选，继而满载而归。我们深信每一瓶葡萄酒有其独特的灵魂及生命，其风味就像诉说它一生的故事，帮助每位客人找到所青睐的葡萄酒，是我们至高无上的荣幸。那就是一',
    link: '香貝田酒業有限公司。'
  },
  'find-us': {
    title: '寻找我们',
    address_1: '香港 九龙',
    address_2: '长沙湾 长义街10号',
    address_3: '昌隆工业大厦',
    address_4: '6楼 B3室',
    'scroll-down': '往下...'
  },
  'contact-us': {
    title: '联系我们',
    'msg-title': '主旨',
    'msg-body': '内容',
    'msg-body-placeholder': '留下你的信息...',
    submit: '提交'
  },
  'wine-list': {
    title: '酒单',
    region: '产地',
    origins: [
      { name: 'All', displayname: '全部' },
      { name: 'Bordeaux', displayname: '波尔多区' },
      { name: 'Margaux', displayname: '玛歌区' },
      { name: 'Pauillac', displayname: '波亚克产区' },
      { name: 'Saint Emilion', displayname: '圣美伦产区' },
      { name: 'Saint Estephe', displayname: '圣爱斯泰夫产区' },
      { name: 'Saint Julien', displayname: '圣祖莉安产区' },
      { name: 'Pessac Leognan', displayname: '佩萨克-雷奥良产区' },
      { name: 'Haut Medoc', displayname: '上美度产区' },
      { name: 'Sauternes', displayname: '苏岱产区' },
      { name: 'Burgundy', displayname: '勃艮第区' },
      { name: 'Rhone', displayname: '隆河谷区' },
      { name: 'Champagne', displayname: '香槟区' },
      { name: 'Alsace', displayname: '亚尔萨斯' },
      { name: 'Australia', displayname: '澳洲' },
      { name: 'Whisky', displayname: '威士忌' },
      { name: 'Italy', displayname: '义大利' },
      { name: 'U.S.A.', displayname: '美国' },
      { name: 'New Zealand', displayname: '新西兰' },
      { name: 'Sake', displayname: '清酒' },
      { name: 'Accessory', displayname: '其他' }
    ],
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '产地', value: 'origin' },
      { text: '产区', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '评级', value: 'rating' },
      { text: '价钱(港币)', value: 'price' }
    ],
    search: '搜寻'
  },
  'new-arrivals': {
    title: '新酒到货',
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '产地', value: 'origin' },
      { text: '产区', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '评级', value: 'rating' },
      { text: '价钱(港币)', value: 'price' }
    ],
    paragraph: "对我们的<a href='/cn/special-offers'>特别推介</a>有兴趣吗? 还是看看我们的<a href='/cn/wine-list'>酒单</a>。",
    search: '搜寻'
  },
  'special-offers': {
    title: '特别推介',
    headers: [
      { text: '酒名', value: 'name' },
      { text: '容量', value: 'volume' },
      { text: '中文', value: 'chineseName' },
      { text: '产地', value: 'origin' },
      { text: '产区', value: 'appellation' },
      { text: '年份', value: 'vintage' },
      { text: '评级', value: 'rating' },
      { text: '价钱(港币)', value: 'price' },
      { text: '折后价', value: 'discountPrice' }
    ],
    paragraph: "对我们的<a href='/cn/new-arrivals'>新酒到货</a>有兴趣吗? 还是看看我们的<a href='/cn/wine-list'>酒单</a>。",
    search: '搜寻'
  },
  footer: {
    text: '根据香港法律,不得在业务过程中,向未成年人(18岁以下人士)售卖或供应令人醺醉的酒类。'
  },
  'real-footer': {
    text: '&copy;2021 香贝田酒业有限公司版权所有'
  },
  meta: {
    base: {
      url: 'https://www.cbtwines.co/cn',
      image: 'https://cbtwines.co/media/logo.png'
    },
    home: {
      title: '寻找与享受你理想中的葡萄酒 | 香贝田酒业有限公司',
      description: '香贝田酒业有限公司为你提供来自全球的各种酒类，买满$3000更可享有免运费优惠！',
      keywords: '香贝田酒业, 香贝田, 香港酒业',
      slug: ''
    },
    'about-us': {
      title: '关于我们 | 香贝田酒业有限公司',
      description: '由2011年起，香贝田酒业有限公司为香港提供来自全球的各种酒类，了解更多关于香贝田酒业的资讯。',
      keywords: '香贝田酒业, 香贝田, 香港酒业, 关于香贝田酒业, 了解香贝田酒业',
      slug: 'about-us'
    },
    'find-us': {
      title: '寻找我们 | 香贝田酒业有限公司',
      description: '香贝田酒业有限公司位于荔枝角，欢迎致电或以电邮寻找我们。更多关于香贝田酒业的联络方法。',
      keywords: '寻找香贝田, 联系香贝田, 香贝田酒业',
      slug: 'find-us'
    },
    'contact-us': {
      title: '联系我们 | 香贝田酒业有限公司',
      description: '想要跟我们取得联系？留下你的信息，便可方便快捷地以电邮联系我们。',
      keywords: '联系香贝田酒业, 酒业联系',
      slug: 'contact-us'
    },
    'wine-list': {
      title: '酒单 | 香贝田酒业有限公司',
      description: '查看香贝田酒业的酒单，以便了解我们为香港从全球搜罗的美酒。',
      keywords: '香贝田酒业酒单, 酒单, 香贝田酒单, CBT酒单',
      slug: 'wine-list'
    },
    'new-arrivals': {
      title: '新酒到货 | 香贝田酒业有限公司',
      description: '香贝田酒业提供的全新酒品及货品，为你的餐桌带来新的体验。',
      keywords: '全新酒品, 香贝田酒品, 新酒',
      slug: 'new-arrivals'
    },
    'special-offers': {
      title: '特别推介 | 香贝田酒业有限公司',
      description: '香貝田酒業為你帶來的特别推介，輕鬆物色當季美酒。更有不定期折扣優惠！',
      keywords: '香贝田优惠, 折扣酒品, 酒类优惠, 当季酒类',
      slug: 'special-offers'
    }
  }
}

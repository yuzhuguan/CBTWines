export default{
  "test": {
    "title": "hk test"
  },
  "header": {
    "nav": [
      {
        "title": "主页",
        "haveList" : false,
        "link": '/cn'
      },
      {
        "title": "有关我们",
        "haveList" : true,
        "listItems": [
          { "title": "关于我们", "link": "/cn/about-us" },
          { "title": "联系我们", "link": "/cn/contact-us" },
          { "title": "寻找我们", "link": "/cn/find-us" },
        ],
        "showList": false,
        "link": "/",
        "matches": /\babout-us\b | \bcontact-us\b | \bfind-us\b/
      },
      {
        "title": "酒单与报价",
        "haveList" : true,
        "listItems": [
          { "title": "酒单", "link": "/cn/wine-list" },
          { "title": "新酒到货", "link": "/cn/new-arrivals" },
          { "title": "特别推介", "link": "/cn/special-offers" },
        ],
        "showList": false,
        "matches": /\bwine-list\b | \bnew-arrivals\b | \bspecial-offers\b/
      }
    ],
    "lang-switcher": {
      "haveList" : true,
      "title": "其他语言",
      "showList": false,
      "lang": [
        { "title": "英文", "link": "/en" },
        { "title": "繁体中文", "link": "/hk" }
      ]
    }
  },
  "mobileMenu": [
    { "title": "主页", "link": "/cn" },
    { "title": "关于我们", "link": "/cn/about-us" },
    { "title": "酒单", "link": "/cn/wine-list" },
    { "title": "特别推介", "link": "/cn/special-offers" },
    { "title": "新酒到货", "link": "/cn/new-arrivals" },
    { "title": "寻找我们", "link": "/cn/find-us" },
    { "title": "联系我们", "link": "/cn/contact-us" }
    // { "title": "WINE RATING", "link": "/wine-rating" }
  ],
  "home": {
    "title": "寻找与享受你理想中的葡萄酒",
    "extend-1": {
      "title": "在香贝田中获取理想中的葡萄酒",
      "paragraph": "我们提供来自100多家葡萄酒生产商的优质葡萄酒。有如此惊人数目的种类，总有一款适合你的葡萄酒。",
      "button_text": "查看酒单",
      "button_url": "/cn/wine-list",
      "image-right": "v1614964460/cbtwines/session-one-horizontal_vbtkpk.png",
      "image-left": "v1614965116/cbtwines/session-one-vertical_iyjnvl.png"
    },
    "extend-2": {
      "title": "想找新的感觉吗？",
      "paragraph": "查看{month}我们在全球搜罗的最新货品。点击以下按钮以寻找新的葡萄酒！",
      "button_text": "查看新酒到货",
      "button_url": "/hk/new-arrivals",
      "image-right": "v1615054333/cbtwines/kv-pc_1_y0b1yx.png",
      "image-left": "v1615054335/cbtwines/pexels-photo-3171770_1_yt9lnt.png"
    },
    "extend-3": {
      "title": "不知道该选择什么？",
      "paragraph": "有时候，当您失去想法时，很难找到想要的东西。让我们为您提供一些特别的葡萄酒吧！",
      "button_text": "查看特别推介",
      "button_url": "/cn/special-offers",
      "image-right": "v1615105825/cbtwines/purple-grapes-vineyard-napa-valley-napa-vineyard-45209_1_snhuzf.png",
      "image-left": "v1615105825/cbtwines/pexels-photo-4946398_1_k6n28d.png"
    }
  },
  "about-us": {
    "title" : "关于我们",
    "paragraph1": "葡萄酒文化源远流长，每年从各地生产的葡萄酒多不胜数，在如此多种类的葡萄酒中，挑选出符合自己口味的葡萄酒可谓是沙中淘金。我们的使命是替客人在琳琅满目的葡萄酒种类中，根据客人需求及口味，挑选出符合要求的葡萄酒。",
    "paragraph2": "本公司提供了多个地区，各具不同香气、口感、风味的葡萄酒，以供客人任意挑选，继而满载而归。我们深信每一瓶葡萄酒有其独特的灵魂及生命，其风味就像诉说它一生的故事，帮助每位客人找到所青睐的葡萄酒，是我们至高无上的荣幸。那就是一",
    "link": "香貝田酒業有限公司。"
  },
  "contact-us": {
    "address_1" : "香港 九龙",
    "address_2" : "长沙湾 长义街10号",
    "address_3" : "昌隆工业大厦",
    "address_4" : "6楼 B3室"
  },
  "wine-list": {
    "title": "酒单",
    "region": "产地",
    "origins": [
      { "name": "All", "displayname": "全部"},
      { "name": "Bordeaux", "displayname": "波尔多区"},
      { "name": "Margaux", "displayname": "玛歌区"},
      { "name": "Pauillac", "displayname": "波亚克产区"},
      { "name": "Saint Emilion", "displayname": "圣美伦产区"},
      { "name": "Saint Estephe", "displayname": "圣爱斯泰夫产区"},
      { "name": "Saint Julien", "displayname": "圣祖莉安产区"},
      { "name": "Pessac Leognan", "displayname": "佩萨克-雷奥良产区"},
      { "name": "Haut Medoc", "displayname": "上美度产区"},
      { "name": "Sauternes", "displayname": "苏岱产区"},
      { "name": "Burgundy", "displayname": "勃艮第区"},
      { "name": "Rhone", "displayname": "隆河谷区"},
      { "name": "Champagne", "displayname": "香槟区"},
      { "name": "Alsace", "displayname": "亚尔萨斯"},
      { "name": "Australia", "displayname": "澳洲"},
      { "name": "Whisky", "displayname": "威士忌"},
      { "name": "Italy", "displayname": "义大利"},
      { "name": "U.S.A.", "displayname": "美国"},
      { "name": "Accessory", "displayname": "其他"},
      { "name": "Sake", "displayname": "清酒"}
    ],
    "headers": [
      { "text": "酒名", "value": "name" },
      { "text": "中文", "value": "chineseName" },
      { "text": "产地", "value": "origin" },
      { "text": "产区", "value": "appellation" },
      { "text": "年份", "value": "vintage" },
      { "text": "评级", "value": "rating" },
      { "text": "价钱(港币)", "value": "price" }
    ]
  },
  "new-arrivals": {
    "title": "新酒到货",
    "headers": [
      { "text": "酒名", "value": "name" },
      { "text": "中文", "value": "chineseName" },
      { "text": "产地", "value": "origin" },
      { "text": "产区", "value": "appellation" },
      { "text": "年份", "value": "vintage" },
      { "text": "评级", "value": "rating" },
      { "text": "价钱(港币)", "value": "price" }
    ],
    "paragraph" : "对我们的<a href='/cn/special-offers'>特别推介</a>有兴趣吗? 还是看看我们的<a href='/cn/wine-list'>酒单</a>。"
  },
  "special-offers": {
    "title": "特别推介",
    "headers": [
      { "text": "酒名", "value": "name" },
      { "text": "中文", "value": "chineseName" },
      { "text": "产地", "value": "origin" },
      { "text": "产区", "value": "appellation" },
      { "text": "年份", "value": "vintage" },
      { "text": "评级", "value": "rating" },
      { "text": "价钱(港币)", "value": "price" },
      { "text": "折后价", "value": "discountPrice" }
    ],
    "paragraph" : "对我们的<a href='/cn/new-arrivals'>新酒到货</a>有兴趣吗? 还是看看我们的<a href='/cn/wine-list'>酒单</a>。"
  },
  "real-footer": {
    "text": "&copy;2021 香贝田酒业有限公司版权所有"
  }
}

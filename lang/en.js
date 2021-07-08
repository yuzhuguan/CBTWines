export default {
  test: {
    title: 'en test'
  },
  header: {
    nav: [
      {
        title: 'HOME',
        haveList: false,
        link: '/'
      },
      {
        title: 'MORE ABOUT CBT',
        haveList: true,
        listItems: [
          { title: 'ABOUT US', link: '/about-us' },
          { title: 'CONTACT US', link: '/contact-us' },
          { title: 'FIND US', link: '/find-us' }
        ],
        showList: false,
        link: '/',
        matches: /\babout-us\b | \bcontact-us\b | \bfind-us\b/
      },
      {
        title: 'WINES & OFFERS',
        haveList: true,
        listItems: [
          { title: 'WINE LIST', link: '/wine-list' },
          { title: 'NEW ARRIVAL', link: '/new-arrivals' },
          { title: 'SPECIAL OFFER', link: '/special-offers' }
        ],
        showList: false,
        matches: /\bwine-list\b | \bnew-arrivals\b | \bspecial-offers\b/
      }
    ],
    'lang-switcher': {
      haveList: true,
      title: 'LANGUAGE',
      showList: false,
      lang: [
        { flag: '/media/country-icon/hk.svg', locale: 'hk' },
        { flag: '/media/country-icon/cn.svg', locale: 'cn' }
      ]
    },
    mobileMenu: [
      { title: 'HOME', link: '/' },
      { title: 'ABOUT US', link: '/about-us' },
      { title: 'WINE LIST', link: '/wine-list' },
      { title: 'SPECIAL OFFERS', link: '/special-offers' },
      { title: 'NEW ARRIVALS', link: '/new-arrivals' },
      { title: 'FIND US', link: '/find-us' },
      { title: 'CONTACT US', link: '/contact-us' }
      // { "title": "WINE RATING", "link": "/wine-rating" }
    ]
  },
  home: {
    title: 'FIND AND ENJOY THE IDEAL WINE FOR YOU',
    'extend-1': {
      title: 'Get Your Ideal Wine In CBT Wines',
      paragraph: 'We offer an impressive diversity of wines with excellent quality from over 100 wine producers. With such stunning variety, there is sure to be a bottle that suits every person.',
      button_text: 'View Wine List',
      button_url: '/wine-list',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614964460/cbtwines/session-one-horizontal_vbtkpk.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1614965116/cbtwines/session-one-vertical_iyjnvl.png'
    },
    'extend-2': {
      title: 'Want Something New?',
      paragraph: 'Check out our latest wines in {month}. We stock a vast variety of wines globally. Click the button below to seek for the new arrivals!',
      button_text: 'View New Arrivals',
      button_url: '/new-arrivals',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto,w_553,h_374/v1615054333/cbtwines/kv-pc_1_y0b1yx.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615054335/cbtwines/pexels-photo-3171770_1_yt9lnt.png'
    },
    'extend-3': {
      title: 'No Idea What To Choose?',
      paragraph: "Sometimes is just hard to find something you want when you are ran out of idea. Let's us offer you something special!",
      button_text: 'View Special Offers',
      button_url: '/special-offers',
      'image-right': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/purple-grapes-vineyard-napa-valley-napa-vineyard-45209_1_snhuzf.png',
      'image-left': 'https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1615105825/cbtwines/pexels-photo-4946398_1_k6n28d.png'
    }
  },
  'about-us': {
    title: 'ABOUT US',
    paragraph1: "Like a fingerprint, every bottle of wine is unique. In our belief, every customer pursues a unique flavor in wines. Assisting customers in choosing the most suitable wines according to customers' distinctive characters is our mission.",
    paragraph2: 'With wines from various countries and places, customers can select their wine from a wide range of choices with quality guaranteed. Through Touch & Taste, every customer will gain satisfaction with their favorite bottle of wine after visiting',
    link: 'CBT WINES COMPANY LIMITED.'
  },
  'find-us': {
    title: 'FIND US',
    address_1: 'Unit B3,',
    address_2: '6F Cheung Lung Industrial Building,',
    address_3: '10 Cheung Yee Street,',
    address_4: 'Kowloon',
    'scroll-down': 'SCOLL DOWN...'
  },
  'contact-us': {
    title: 'CONTACT US',
    'msg-title': 'Title',
    'msg-body': 'Message Body',
    'msg-body-placeholder': 'Leave your message here...',
    submit: 'SUBMIT'
  },
  'wine-list': {
    title: 'WINE LIST',
    region: 'Region',
    origins: [
      { name: 'All', displayname: 'All' },
      { name: 'Bordeaux', displayname: 'Bordeaux' },
      { name: 'Margaux', displayname: 'Margaux' },
      { name: 'Pauillac', displayname: 'Pauillac' },
      { name: 'Saint Emilion', displayname: 'Saint Emilion' },
      { name: 'Saint Estephe', displayname: 'Saint Estephe' },
      { name: 'Saint Julien', displayname: 'Saint Julien' },
      { name: 'Pessac Leognan', displayname: 'Pessac Leognan' },
      { name: 'Haut Medoc', displayname: 'Haut Medoc' },
      { name: 'Sauternes', displayname: 'Sauternes' },
      { name: 'Burgundy', displayname: 'Burgundy' },
      { name: 'Rhone', displayname: 'Rhone' },
      { name: 'Champagne', displayname: 'Champagne' },
      { name: 'Alsace', displayname: 'Alsace' },
      { name: 'Australia', displayname: 'Australia' },
      { name: 'Whisky', displayname: 'Whisky' },
      { name: 'Italy', displayname: 'Italy' },
      { name: 'U.S.A.', displayname: 'U.S.A.' },
      { name: 'Accessory', displayname: 'Accessory' },
      { name: 'Sake', displayname: 'Sake' }
    ],
    headers: [
      { text: 'Product', value: 'name' },
      { text: 'Volume', value: 'volume' },
      { text: 'Chinese Name', value: 'chineseName' },
      { text: 'Region', value: 'origin' },
      { text: 'Appellation', value: 'appellation' },
      { text: 'Vintage', value: 'vintage' },
      { text: 'Rating', value: 'rating' },
      { text: 'Price(HKD)', value: 'price' }
    ]
  },
  'new-arrivals': {
    title: 'New Arrivals',
    headers: [
      { text: 'Product', value: 'name' },
      { text: 'Volume', value: 'volume' },
      { text: 'Chinese Name', value: 'chineseName' },
      { text: 'Region', value: 'origin' },
      { text: 'Appellation', value: 'appellation' },
      { text: 'Vintage', value: 'vintage' },
      { text: 'Rating', value: 'rating' },
      { text: 'Price(HKD)', value: 'price' }
    ],
    paragraph: "Do you want some <a href='/special-offers'>Special Offers</a>? Or check out our wine list <a href='/wine-list'>here</a>."
  },
  'special-offers': {
    title: 'Special Offers',
    headers: [
      { text: 'Product', value: 'name' },
      { text: 'Volume', value: 'volume' },
      { text: 'Chinese Name', value: 'chineseName' },
      { text: 'Region', value: 'origin' },
      { text: 'Appellation', value: 'appellation' },
      { text: 'Vintage', value: 'vintage' },
      { text: 'Rating', value: 'rating' },
      { text: 'Price(HKD)', value: 'price' },
      { text: 'Discounted Price', value: 'discountPrice' }
    ],
    paragraph: "Do you want some <a href='/new-arrivals'>New Arrivals</a>? Or check out our wine list <a href='/wine-list'>here</a>."
  },
  footer: {
    text: 'Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.'
  },
  'real-footer': {
    text: '&copy;2021 CBT Wines Company Limited. All rights reserved.'
  },
  meta: {
    base: {
      url: 'https://www.cbtwines.co',
      image: 'https://cbtwines.co/media/logo.png'
    },
    home: {
      title: 'CBT Wines Company Limited',
      description: 'CBT Wines Company Limited Hong Kong, we offer wines from countries worldwide, find us and buy your wines. Get free shipping offer by purchasing above $3000!',
      keywords: 'cbt, wines, cbtwines, wine, cbt wines, hong kong wines, wine',
      slug: ''
    },
    'about-us': {
      title: 'About Us | CBT Wines Company Limited',
      description: 'CBT Wines Company Limited Hong Kong, offers wines from countries since 2011. Find out more about CBT Wines',
      keywords: 'CBT Wines, cbtwines, wine, cbt wines, hong kong wines, wine',
      slug: 'about-us'
    },
    'find-us': {
      title: 'Find Us | CBT Wines Company Limited',
      description: 'CBT Wines is located in Lai Chi Kok, check us out by calling us or sending us email! More information on how to contact CBT Wines',
      keywords: 'CBT Wines, find us, find CBT',
      slug: 'find-us'
    },
    'contact-us': {
      title: 'Contact Us | CBT Wines Company Limited',
      description: 'Want contact CBT Wines? Leave your message down and contact us through email in just a second!',
      keywords: 'CBT Wines, contact us, contact CBT',
      slug: 'contact-us'
    },
    'wine-list': {
      title: 'Wine List | CBT Wines Company Limited',
      description: 'CBT Wines provides you list of wines from countries worldwide, check out the wine list and find your offers.',
      keywords: 'CBT Wines, wine list, wine offer, CBT products',
      slug: 'wine-list'
    },
    'new-arrivals': {
      title: 'New Arrivals | CBT Wines Company Limited',
      description: 'Looking for something new? CBT Wines offers new wines, new products, all just in the new arrival list.',
      keywords: 'CBT Wines, New Arrivals, new wines, CBT products',
      slug: 'new-arrivals'
    },
    'special-offers': {
      title: 'Special Offer | CBT Wines Company Limited',
      description: 'Lost on decision? Don\'t what to buy? Let CBT Wines offers you something special, something right in this season, or even something on sale!',
      keywords: 'CBT Wines, Special offers, CBT Special, CBT products',
      slug: 'special-offers'
    }
  }
}

export default {
    "test": {
        "title": 'en test'
    },
   "header": {
      "nav": [
        {
          "title": "HOME",
          "haveList" : false,
          "link": '/'
        },
        {
          "title": "MORE ABOUT CBT",
          "haveList" : true,
          "listItems": [
            { "title": "ABOUT US", "link": "/about-us" },
            { "title": "CONTACT US", "link": "/contact-us" },
            { "title": "FIND US", "link": "/find-us" },
          ],
          "showList": false,
          "link": "/",
          "matches": /\babout-us\b | \bcontact-us\b | \bfind-us\b/
        },
        {
          "title": "WINES & OFFERS",
          "haveList" : true,
          "listItems": [
            { "title": "WINE LIST", "link": "/wine-list" },
            { "title": "NEW ARRIVAL", "link": "/new-arrivals" },
            { "title": "SPECIAL OFFER", "link": "special-offers" },
          ],
          "showList": false,
          "matches": /\bwine-list\b | \bnew-arrivals\b | \bspecial-offers\b/
        }
      ],
     "mobileMenu": [
       { "title": "HOME", "link": "/" },
       { "title": "ABOUT US", "link": "/about-us" },
       { "title": "WINE LIST", "link": "/wine-list" },
       { "title": "SPECIAL OFFERS", "link": "/special-offers" },
       { "title": "NEW ARRIVALS", "link": "/new-arrivals" },
       { "title": "FIND US", "link": "/find-us" },
       { "title": "CONTACT US", "link": "/contact-us" },
       { "title": "WINE RATING", "link": "/wine-rating" }
     ]
   },
    "home": {
        "navs": [
            { "text": "About Us", "link": "/about-us", "img": "/img/new/banner.png" },
            { "text": "Wine List", "link": "/wine-list", "img": "/img/new/2nd.jpg" },
            { "text": "New Arrivals", "link": "/new-arrivals", "img": "/img/new/new-arrival.jpg" },
            { "text": "Special Offers", "link": "/special-offers", "img": "/img/new/special-offers.jpg" },
            { "text": "Contact Us", "link": "/contact-us", "img": "/img/new/3rd.jpg" }
        ]
    },
    "about-us": {
        "title" : "ABOUT US",
        "paragraph1": "Like a fingerprint, every bottle of wine is unique. In our belief, every customer pursues a unique flavor in wines. Assisting customers in choosing the most suitable wines according to customers' distinctive characters is our mission.",
        "paragraph2": "With wines from various countries and places, customers can select their wine from a wide range of choices with quality guaranteed. Through Touch & Taste, every customer will gain satisfaction with their favorite bottle of wine after visiting",
        "link": "CBT WINES COMPANY LIMITED."
    },
    "contact-us": {
        "address_1" : "Unit B3,",
        "address_2" : "6F Cheung Lung Industrial Building,",
        "address_3" : "10 Cheung Yee Street,",
        "address_4" : "Kowloon"
    },
    "wine-list": {
        "title": "Region",
        "origins": [
            { "name": "All", "displayname": "All"},
            { "name": "Bordeaux", "displayname": "Bordeaux"},
            { "name": "Margaux", "displayname": "Margaux"},
            { "name": "Pauillac", "displayname": "Pauillac"},
            { "name": "Saint Emilion", "displayname": "Saint Emilion"},
            { "name": "Saint Estephe", "displayname": "Saint Estephe"},
            { "name": "Saint Julien", "displayname": "Saint Julien"},
            { "name": "Pessac Leognan", "displayname": "Pessac Leognan"},
            { "name": "Haut Medoc", "displayname": "Haut Medoc"},
            { "name": "Sauternes", "displayname": "Sauternes"},
            { "name": "Burgundy", "displayname": "Burgundy"},
            { "name": "Rhone", "displayname": "Rhone"},
            { "name": "Champagne", "displayname": "Champagne"},
            { "name": "Alsace", "displayname": "Alsace"},
            { "name": "Australia", "displayname": "Australia"},
            { "name": "Whisky", "displayname": "Whisky"},
            { "name": "Italy", "displayname": "Italy"},
            { "name": "U.S.A.", "displayname": "U.S.A."},
            { "name": "Accessory", "displayname": "Accessory"}
        ],
        "headers": [
            { "text": "Product", "value": "name" },
            { "text": "Chinese Name", "value": "chineseName" },
            { "text": "Region", "value": "origin" },
            { "text": "Appellation", "value": "appellation" },
            { "text": "Vintage", "value": "vintage" },
            { "text": "Rating", "value": "rating" },
            { "text": "Price(HKD)", "value": "price" }
        ]
    },
    "new-arrivals": {
        "title": "New Arrivals",
        "headers": [
            { "text": "Product", "value": "name" },
            { "text": "Chinese Name", "value": "chineseName" },
            { "text": "Region", "value": "origin" },
            { "text": "Appellation", "value": "appellation" },
            { "text": "Vintage", "value": "vintage" },
            { "text": "Rating", "value": "rating" },
            { "text": "Price(HKD)", "value": "price" }
        ],
        "paragraph" : "Do you want some <a href='/special-offers'>Special Offers</a>? Or check out our wine list <a href='/wine-list'>here</a>."
    },
    "special-offers": {
        "title": "Special Offers",
        "headers": [
            { "text": "Product", "value": "name" },
            { "text": "Chinese Name", "value": "chineseName" },
            { "text": "Region", "value": "origin" },
            { "text": "Appellation", "value": "appellation" },
            { "text": "Vintage", "value": "vintage" },
            { "text": "Rating", "value": "rating" },
            { "text": "Price(HKD)", "value": "price" },
            { "text": "Discounted Price", "value": "discountPrice" }
        ],
        "paragraph": "Do you want some <a href='/new-arrivals'>New Arrivals</a>? Or check out our wine list <a href='/wine-list'>here</a>."
    }
}

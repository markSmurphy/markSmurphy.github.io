module.exports={
  "title": "Tech Blog",
  "tagline": "Sharing a little of what I've learned",
  "url": "https://marksmurphy.github.io/",
  "baseUrl": "/",
  "organizationName": "markSmurphy",
  "projectName": "tech-blog",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [
      {
        "caption": "MarkMurphy",
        "image": "/img/undraw_operating_system.svg",
        "infoLink": "https://github.com/markSmurphy",
        "pinned": true
      }
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "./sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "./src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Tech Blog",
      "logo": {
        "src": "img/transparent-inverted-white-plain.png"
      },
      "items": []
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Mark Murphy",
      "logo": {
        "src": "img/gravatar.jpg"
      }
    }
  }
}
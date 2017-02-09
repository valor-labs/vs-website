export const projects: any[] = [
  {
      projectId: 0,
      title: 'Dollar Street',
      shortDescription: 'Social project',
      description: 'Ever been curious how do other people really live? Dollar Street allows interactively explore how people live all across the globe. A team of photographers have documented over 200 homes in almost 50 countries so far, and the list is growing.',
      previewImage: 'assets/images/projects/ds.jpg',
      fullImage: 'assets/images/projects/ds-m.jpg',
      headerImage: 'assets/images/projects/ds-header.jpg',
      externalLink: 'http://www.gapminder.org/dollar-street',
      behanceLink: 'https://www.behance.net/gallery/44886893/Get-ready-Dollar-Street-Go-Live',
      details: {
        tasks: [
          'Optimization of architecture and code;',
          'Create design for photographer profile;',
          'New design development;',
          'Blog development;'
      ],
        solutions: [
          'The Angular framework was updated to stable Angular 2;',
          'Statistical data analysis performance optimizations;',
          'General performance optimizations;',
          'D3js used for drawing main navigation element;'
      ],
        outcome : [
          'Powerful and heavy-load ready analytical environment with great design and good performance on large amounts of data.'
      ]
    },
      technologies: ['HTML 5, CSS 3', 'Angular 2', 'Node.js', 'MongoDB', 'Amazon AWS', 'Express', 'TypeScript'],
      members: [19, 6, 5, 18, 12, 1, 17, 16, 10, 9, 24],
      similarTo: [2, 3],
      link: 'dollar-street'
  },
  {
      projectId: 1,
      title: 'Gapminder',
      shortDescription: 'Social project',
      description: 'Gapminder is an independent Swedish foundation with no political, religious or economic affiliations. Gapminder is a data science fact tank, not a think tank. Gapminder fights devastating misconceptions about global development. Gapminder produces free teaching resources making the world understandable based on reliable statistics.',
      previewImage: 'assets/images/projects/gapminder.jpg',
      fullImage: 'assets/images/projects/gapminder-m.jpg',
      headerImage: 'assets/images/projects/gapminder-header.jpg',
      externalLink: 'http://www.gapminder.org',
      details: {
        tasks: [
          'Building modular infrastructure with tight integration between components;',
          'Analytical visualization tools;',
          'Improving internal architecture'
      ],
        solutions: [
          'Test Driven Development;',
          'CVS databases to store all data;',
          'ng2-contentful'
      ],
        outcome : [
          'Complete and production-ready website that acts a single place for other parts of the project, such as Dollar Street and Vizabi Tools.'
      ]
    },
      technologies: ['TypeScript', 'Node.js', 'AngularJS 2', 'MongoDB', 'Redis', 'Nginx'],
      members: [15, 5, 13, 12, 1, 4, 10, 9, 24],
      similarTo: [1,3],
      link: 'gapminder'
  },
  {
      projectId: 2,
      title: 'Vizabi tools',
      shortDescription: 'Industry software',
      description: 'Vizabi is a framework for building visual data exploration tools freely provided by Gapminder. We’ve also built an offline version as separate application!',
      previewImage: 'assets/images/projects/vizabi.jpg',
      fullImage: 'assets/images/projects/vizabi-m.jpg',
      headerImage: 'assets/images/projects/vizabi-header.jpg',
      externalLink: 'https://www.gapminder.org/tools/#_chart-type=bubbles',
      details: {
        tasks: [
          'Embeddable tools with customization',
          'Responsive layout',
          'Support for UI Controls & Interaction',
          'Translation & Localization',
          'Unified data-schema for multidimensional statistics.'
      ],
        solutions: [
          'Test Driven Development;',
          'CVS databases to store all data;',
          'Electron framework for offline version of application;',
          'DDFcsv reader for DDF data reading;',
          'WS reader for querying data on WS by DDFQL'
      ],
        outcome : [
          'Online and offline visualization tool for various metrics and statistics.'
      ]
    },
      technologies: ['AngularJS', 'Node.js', 'Electron', 'TypeScript'],
      members: [15, 11, 5, 13, 22, 12, 1, 14, 10, 9, 24],
      similarTo: [1,2],
      link: 'vizabi-tools'
  },
  {
      projectId: 3,
      title: 'Tables Ready',
      shortDescription: 'Industry software',
      description: 'Table\'s Ready is a paging system that uses your guests\' cell phones instead of expensive pager systems.',
      previewImage: 'assets/images/projects/tables-ready.jpg',
      fullImage: 'assets/images/projects/tables-ready-m.jpg',
      headerImage: 'assets/images/projects/tables-ready-header.jpg',
      video: 'https://player.vimeo.com/video/44085692',
      externalLink: 'http://tablesready.com/',
      details: {
        tasks: [
          'Optimization of architecture and code;',
          'Average wait times, busy periods and walk-ins analytics implementation;',
          'New design development;'
      ],
        solutions: [
          'WebSockets implementation to support multi-user accounts;',
          'Developed Node.js library for Recurly billing system;',
          'Mobile phone number verification system;'
      ],
        outcome : [
          'Business-ready service for table reservations with text messaging notifications and rich analytical support.'
      ]
    },
      technologies: ['HTML 5, CSS 3', 'MongoDB', 'Node.js', 'AngularJS'],
      members: [3],
      similarTo: [7],
      link: 'tables-ready'
  },
  {
      projectId: 4,
      title: 'Priceshredder',
      shortDescription: 'Insurance',
      description: 'Priceshredder is a  platform that can help people who are already insured by the company to change the conditions of insurance at more affordable with the help of insurance brokers of another company.',
      previewImage: 'assets/images/projects/priceshredder.jpg',
      fullImage: 'assets/images/projects/priceshredder-m.jpg',
      headerImage: 'assets/images/projects/priceshredder-header.jpg',
      externalLink: 'https://priceshredder.com/',
      details: {
        tasks: [
          'Notification and modal popups support;',
          'Create design for buyer profile;',
          'Seller/Buyer Dashboard;',
          'Themes support;',
          'New design development',
          'Blog implementation;'
      ],
        solutions: [
          'WebSockets implementation to support multi-user accounts;',
          'Implementation of "Stripe" payment system;'
      ],
        outcome : [
          'Useful and popular smartphone based platform that helps insurance buyers receive and manage bids from major insurance companies. As a result, PriceShredder allows easier, faster, more efficient way to shop for and find insurance coverage. '
      ]
    },
      technologies: ['Amazon EC2', 'Nginx (Proxy server)', 'Amazon S3', 'CloudFlare', 'Prerender.io', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Ionic Framework', 'AngularJS', 'Webpack', 'UI Bootstrap'],
      members: [19, 2, 7, 18, 22, 8, 17, 16, 10, 24],
      similarTo: [5,6],
      link: 'priceshredder'
  },
  {
      projectId: 5,
      title: 'Souqalmal',
      shortDescription: 'Comparison website',
      description: 'Souqalmal.com is the leading comparison website in the Middle East and lets compare, search and get information on financial products.',
      previewImage: 'assets/images/projects/souqalmal.jpg',
      fullImage: 'assets/images/projects/souqalmal-m.jpg',
      headerImage: 'assets/images/projects/souqalmal-header.jpg',
      externalLink: 'https://www.souqalmal.com/ae-en',
      details: {
        tasks: [
          'Optimization of architecture and code;',
          'Rich search engine;',
          'SEO optimization;',
          'Google Ads integration;',
          'Update and modernize existing design;'
      ],
        solutions: [
          'Used Elasticsearch for full-text search;',
          'Interactive documentation with Swagger;',
          'Islamic-friendly banking;',
          'Developed own Node.js-based CMS;'
      ],
        outcome : [
          'Fully working and deployed Debt Burden Ratio Calculator, Airmiles Calculator, Car Loan Calculator  and Mortgage Calculator. Stable environment and further maintenance.'
      ]
    },
      technologies: ['Node.js', 'AngularJS', 'MongoDB', 'ElasticSearch', 'Redis Database', 'Nginx', 'Amazon S3'],
      members: [15, 11, 1, 15],
      similarTo: [4,6],
      link: 'souqalmal'
  }
  /*{
        projectId: 6,
        title: 'Waffle Server',
        shortDescription: 'TODO',
        description: 'Waffle Server is a huge bank of public statistical data which supports its versioning. The sources could be the files or other structures corresponding to the rules described in the DDF (Data Description Format). DDF is a conceptual model or a system to organize data and to define how pieces of data relate to each other. WaffleServer is able to handle complex queries through its own DDFQL (DDF Query Language).',
        previewImage: 'assets/images/projects/souqalmal.jpg',
        fullImage: 'assets/images/projects/souqalmal-m.jpg',
        headerImage: 'assets/images/projects/souqalmal-header.jpg',
        externalLink: 'https://www.souqalmal.com/ae-en',
        details: {
            tasks: [
                'Processing huge CSV databases in seconds;',
                'Analytical visualization tools;',
                'Incremental updates support;',
                'Data-versioning support;'
            ],
            solutions: [
                'Test Driven Development;',
                'Developed specifically-designed versioning system;',
                'WS Diff tool;',
                'WS CLI tool',
                'DDF Validator'
            ],
            outcome : [
                'Highly effective data versioning engine that can operate hundreds of gigabytes of data.'
            ]
        },
        technologies: ['Node.js', 'Express', 'Lodash', 'bunyan', 'mongoose', 'mocha', 'MongoDB', 'Redis', 'Nginx', 'New Relic' , 'AWS EC2', 'AWS ECR', 'AWS ECS', 'ElasticCache', 'AWS CloudFormation', 'HAProxy'
        ],
        members: [15, 13, 12, 4, 2, 14, 11, 0],
        similarTo: [4,6],
        link: 'souqalmal'
    }*/
];

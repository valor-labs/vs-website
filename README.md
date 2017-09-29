# valor-software.com

[**Staging**](https://vs-work.github.io)
[**Production**](https://valor-software.com)

[![Build Status](https://travis-ci.org/VS-work/vs-website.svg?branch=development)](https://travis-ci.org/VS-work/vs-website)

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/guide/styleguide)

### Development
Read this first
- [Style Guide](https://angular.io/guide/styleguide)
- [Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)

Clone the project to your local machine

`git clone git@github.com:VS-work/vs-website.git`

Install dependencies

`npm i` or using yarn `yarn install`

Start development server

`npm run serve`

Site will be available on 4200 port [http://localhost:4200](http://localhost:4200)

Make your changes, make sure tests pass

`npm t`

Create PR, assign developers who can make code review. (ask your mentor, team/tech lead..);

#### Storage notes

All content is stored in json format. To change any data like Projects, Team, Vacancies, Feedback and Text on site just edit ts files in src/services/collections/ dir.

**Team:**

To hide team member on the /team page, set show: false in team.ts.

Leave member on the project page, but make him unclickable, remove url param.

### Publishing

#### Autodeploy is now configured only for staging server using GitHub Deploy keys and Travis CI.

Check links below for details or setting up new keys: 
- [Add GitHub Deploy key](https://github.com/VS-work/VS-work.github.io/settings/keys), 
- [Travis CI config](https://travis-ci.org/VS-work/vs-website/settings)

Public key is stored in repo deploy_key.enc and private as env var on the Travis CI

Check deploy.sh for more details.


#### Manual Deploy
Because of using GitHub Pages to host site all you need is have write access to [https://github.com/VS-work/vs-work.github.io](https://github.com/VS-work/vs-work.github.io) repo for **staging** and to [https://github.com/valor-software/valor-software.github.io](https://github.com/valor-software/valor-software.github.io) for **production**. 
 
##### Sequncing:
1) Make sure all your changes tested well, code was reviewed, tests and TSLint pass.
2) Now you can run `npm run manual.deploy:stage`
3) Test app on https://vs-work.github.io/#/
4) Run `npm run manual.deploy:prod` to publish on production.
5) Test on https://valor-software.com/#/

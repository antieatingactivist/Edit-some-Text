# Edit-some-Text

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## https://mighty-badlands-68759.herokuapp.com





This is a basic code-aware text editor that is a fully installable Progressive Web App. It utilizes a serviceworker which enables offline operation.

##

- Model View Controller (MVC) structure is used with Handlebars.

`const exphbs = require('express-handlebars');`
- Express Router is used for all API routes
```
const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
```

- App is deployed on Heroku using JawsDB for the database.

`if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}`


<img width="948" alt="Screen Shot 2022-03-01 at 9 14 38 PM" src="https://user-images.githubusercontent.com/1414728/156299673-38f24309-7199-40fa-9a5f-651629d316be.png">


## Deployed link

https://mighty-badlands-68759.herokuapp.com


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [express.js](http://expressjs.com)
* [Workbox](https://developers.google.com/web/tools/workbox)
* [Webpack](https://webpack.js.org)

## Authors

Garrett Corbin

- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license

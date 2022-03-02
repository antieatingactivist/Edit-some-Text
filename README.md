# Edit-some-Text

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## https://mighty-badlands-68759.herokuapp.com





This is a basic code-aware text editor that is a fully installable Progressive Web App. It utilizes a serviceworker which enables offline operation.

##

- IndexedDB is used for data persistance.

```
  export const putDb = async (content) => {
  console.log('PUT to the database');
  const editSomeTextDb = await openDB('editSomeText', 1);
  const tx = editSomeTextDb.transaction('editSomeText', 'readwrite');
  const store = tx.objectStore('editSomeText');
  const request = store.put({ content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
} 
```
- A service worker is registered with the browser to enable offline functionality and installability.
```
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
```




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

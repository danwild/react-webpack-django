# resty-react-django

An example app, structured to enforce [much needed decoupling](http://owaislone.org/blog/modern-frontends-with-django/) of 
client application build from Django's opinionated pipeline/staticfiles etc. using Webpack bundle.

In short, we'll let Django do what it is good at - server side, while de-coupling the client for greater flexibility (and less black-box Django magic!)

Largely based on these resources:
* [Let's modernize the way we handle frontend code with Django](http://owaislone.org/blog/modern-frontends-with-django/)
* [Using Webpack transparently with Django + hot reloading React components as a bonus](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
* [Using React with Django, with a little help from Webpack](http://geezhawk.github.io/using-react-with-django-rest-framework)
* [Setting up ReactJS/Redux using Webpack for an existing Django project](https://gist.github.com/genomics-geek/81c6880ca862d99574c6f84dec81acb0)
* [Moving to Webpack v2](https://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/) (notes still useful, many example use v1)



## webpack
Make a bundle: `./node_modules/.bin/webpack --config webpack.config.js`

Make, watch: `./node_modules/.bin/webpack --config webpack.config.js --watch`
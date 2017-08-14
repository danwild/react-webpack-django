# resty-react-django

Fullstack application scaffold. 
Structured to provide [much needed decoupling](http://owaislone.org/blog/modern-frontends-with-django/) between the 
client application build and Django's opinionated pipeline/staticfiles systems. Achieved by using a Webpack bundle.

In short, we'll let Django do what it is good at; Server-side/ORM stuff, while de-coupling the client for greater flexibility (and less confusing black-box Django magic!)

Largely based on these resources:
* [Let's modernize the way we handle frontend code with Django](http://owaislone.org/blog/modern-frontends-with-django/)
* [Using Webpack transparently with Django + hot reloading React components as a bonus](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
* [Using React with Django, with a little help from Webpack](http://geezhawk.github.io/using-react-with-django-rest-framework)
* [Setting up ReactJS/Redux using Webpack for an existing Django project](https://gist.github.com/genomics-geek/81c6880ca862d99574c6f84dec81acb0)
* [Moving to Webpack v2](https://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/) (notes still useful, many example use v1)


## todo
* Routing, React?
* Client/Server request auth.

## webpack
Make a bundle: `npm run build`

Make, watch: `npm run watch`
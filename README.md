# react-webpack-django

Full-stack application scaffold. 
Structured to provide [much needed decoupling](http://owaislone.org/blog/modern-frontends-with-django/) between the 
client application build and Django's opinionated pipeline/staticfiles systems. Achieved by using a Webpack bundle.

In short, we'll let Django do what it is good at; Server-side/ORM stuff, while de-coupling the client for greater flexibility (and less confusing black-box Django magic!)

## todo
* Routing, React?
* Client/Server request auth.

## install, build, run etc.

From project root:
```shell
# javascript things
npm install                         # install js packages
npm run watch                       # run webpack build for client app, and rebuild on change*

# python things
virtualenv venv                     # create python virtualenv
source venv/bin/activate            # enter venv
pip install -r requirements.txt     # install pip packages
python manage.py runserver          # serve
```

\*to just build a webpack bundle once use: `npm run build` 

## License
MIT License

## Resources
Heavily based on these great resources:
* [Let's modernize the way we handle frontend code with Django](http://owaislone.org/blog/modern-frontends-with-django/)
* [Using Webpack transparently with Django + hot reloading React components as a bonus](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
* [Using React with Django, with a little help from Webpack](http://geezhawk.github.io/using-react-with-django-rest-framework)
* [Setting up ReactJS/Redux using Webpack for an existing Django project](https://gist.github.com/genomics-geek/81c6880ca862d99574c6f84dec81acb0)
* [Moving to Webpack v2](https://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/) (notes still useful, many example use v1)


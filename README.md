# Rollup template

The purpose of this template is to hold a simplistic combination of Rollup, its plugins, some PostCSS and Babel to start making a React app with.

Please be aware that [babel-preset-react-app](/facebook/create-react-app) [always requires](https://twitter.com/dan_abramov/status/780508054932623360) explicit value of `NODE_ENV` environment variable. To develop with live reload and proper error logs, run in terminal:

```bash
NODE_ENV=development npm start
```

or, if you use [yarn](/yarnpkg/yarn):

```bash
NODE_ENV=development yarn start
```

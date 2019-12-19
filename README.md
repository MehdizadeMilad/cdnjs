#

Command-line Node.js application to query cdnjs.com API

# [cdnjs](https://github.com/MehdizadeMilad/cdnjs) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React is a Node.JS library to query CDNJS.com's API.

## Installation

```
- git clone https://github.com/MehdizadeMilad/cdnjs.git
- npm install
- npm install -g .
```

## Examples

to find font-awesome's Cloudflare CDN address:

```zsh
$ cdnjs -p font-awesome
```

This example will render "Hello Taylor" into a container on the page.

```
font-awesome => https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css
```

## License

CDNJS is [MIT licensed](./LICENSE).
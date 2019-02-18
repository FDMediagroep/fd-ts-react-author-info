[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-author-info.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-author-info)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-author-info/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-author-info?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-author-info.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-author-info)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-author-info.svg)](https://greenkeeper.io/)

# fd-author-info
FD-themed author info.

# Installation
* Run `npm i -D @fdmg/fd-author-info`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/author-info/demo.html)

# Usage
```
import AuthorInfo from '@fdmg/fd-author-info';
...
<AuthorInfo
    cardStyle="default"
    description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
    title="Nelleke Trappenburg"
/>
```

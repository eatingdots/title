# Title

This package is based on [Vercel's title package](https://github.com/vercel/title) and correctly capitalizes your titles as per [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html). Furthermore, all of
Eating Dots's product names are capitalized properly as well.

## Usage

Firstly, install the package:

```bash
npm i @eatingdots/title
```

Then load it and convert any input:

```js
const title = require("@eatingdots/title");

title("tHe cHicaGo maNual oF StyLe");

// Will result in:
// "The Chicago Manual of Style"
```

You can even pass words that should be capitalized as specified:

```js
title("FaCEbook is great", {
  special: ["facebook"],
});

// Will result in:
// "facebook is great"
```

That's it!

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link it to the global module directory: `npm link <path-to-repo>`

## Authors

- Wlad Paiva ([@wladiston](https://twitter.com/thewladpaiva))
- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo))
- Josh Junon ([@Qix-](https://github.com/Qix-))

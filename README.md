<p align="center">
  <img src="https://github.com/remarkablegames/code-arcade/blob/master/public/logo.png" alt="Code Arcade">
</p>

# Code Arcade

![release](https://img.shields.io/github/v/release/remarkablegames/code-arcade)
[![build](https://github.com/remarkablegames/code-arcade/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/code-arcade/actions/workflows/build.yml)

🕹️ Learn how to program with Code Arcade.

Play the game on:

- [remarkablegames](https://remarkablegames.org/code-arcade)
- [itch.io](https://remarkablegames.itch.io/code-arcade)

## Credits

- Assets from [Kaboom](https://kaboomjs.com/)
- Inspired by [Untrusted](https://alexnisnevich.github.io/untrusted/)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/code-arcade.git
cd code-arcade
```

Use the Node.js version:

```sh
nvm use
```

Install the dependencies:

```sh
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and packages it into a Zip file in the `dist` folder.

Your game can be uploaded to your server, [Itch.io](https://itch.io/), [Newgrounds](https://www.newgrounds.com/), etc.

### `npm run increment-levels`

Increments level by incrementing the level number and renaming file:

```sh
npm run increment-levels -- --level=<number>
```

## License

[MIT](LICENSE)

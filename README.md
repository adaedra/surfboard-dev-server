# 🌊 Surfboard

![Package version](https://img.shields.io/npm/v/@surfboard/dev-server.svg?style=flat&logo=npm)
![License](https://img.shields.io/github/license/adaedra/surfboard-dev-server.svg)
![Build status](https://img.shields.io/circleci/project/github/adaedra/surfboard-dev-server/master.svg?style=flat&logo=circleci)

Surfboard is a modular dashboard project, based on modern web development tools (JavaScript, React,
Rx).
The aim is to create a tool that adapts to the need of its users and not the other way around, by
providing just the needed functional bricks to build your dashboard but leave all flexibility to
the user.

## `@surfboard/dev-server`

This package just provides a handy command `surfboard-dev-server` to run a webpack dev server
including the surfboard server websocket (please note that changes to server side are not
automatically picked up, only changes to client side which are managed by webpack).

## Warning

This project is still in initial development and is not completely ready yet for prime time. You
can toy with it, but be aware that big changes can arise at any moment while this project hasn't
reached the 1.0 release. Also, documentation and inter-packages dependencies may be a bit wonky
during this time.

## How to

Add it to your project:

```
npm i --save-dev @surfboard/dev-server
```

Run it:

```
npx surfboard-dev-server
```

This will run a listening server on the port 1337. Just access it with your browser.

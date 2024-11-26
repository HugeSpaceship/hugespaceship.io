# HugeSpaceship Documentation

This repo contains the documentation for [HugeSpaceship](https://hugespaceship.io), a LittleBigPlanet custom server.

It's built with [Docusaurus](https://docusaurus.io) and is containerized in production.

## Build for production

You most likely won't need to do this but if you need to build the docs for your own computer (e.g. if you fork the project or something) then you can just use

```
$ docker build -t <image tag>
```

and then

```
$ docker run -d -n hugespaceship-docs -p <host_port>:80 <image tag>
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Architecture

Docusaurus is a static site generator and so everything it builds is just HTML, CSS, and JS. The container image uses Nginx to actually host the site.

#!/usr/bin/env node
import express from 'express'
import { resolve } from 'path'
import { cwd } from 'process'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import { createServer, startDispatcher } from '@surfboard/core'

const requireLocal = (name: string) => {
    const fileName = resolve(cwd(), name)
    return require(fileName)
}

const app = express()
const surfboard = createServer(app)
const webpackConfig = requireLocal('webpack.config')
const compiler = webpack(webpackConfig)
const middleware = webpackMiddleware(compiler)
const surfboardConfig = requireLocal('surfboard.server')

app.use(middleware)
surfboard.listen(1337, () => {
    startDispatcher(surfboardConfig.sources)
    console.log('Running!')
})

#!/usr/bin/env node
import express from 'express'
import { resolve } from 'path'
import { cwd } from 'process'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackLog from 'webpack-log'
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
const log = webpackLog({ name: 'sds' })

app.use(middleware)
if (surfboardConfig.server) {
    app.use(surfboardConfig.server)
}

surfboard.listen(1337, () => {
    startDispatcher(surfboardConfig.sources)
    log.info('Running!')
})

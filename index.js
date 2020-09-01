#!/usr/bin/env node

const unified = require('unified')
const stream = require('unified-stream')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const prism = require('@mapbox/rehype-prism')
const doc = require('rehype-document')
const html = require('rehype-stringify')
const inline = require('rehype-inline')
const minify = require('rehype-preset-minify')

const processor = unified()
	.use(markdown)
	.use(remark2rehype)
	.use(prism)
	.use(doc, {
		css: 'index.css',
	})
	.use(inline)
	.use(minify)
	.use(html)

process.stdin
	.pipe(stream(processor))
	.pipe(process.stdout)

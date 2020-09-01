const select = require('hast-util-select').select
const fromString = require('hast-util-from-string')
const toString = require('hast-util-to-string')

module.exports = h1ToTitle

function h1ToTitle() {
	return transformer
}

function transformer(tree) {
	const h1 = select('h1', tree)
	const title = select('title', tree)
	if (h1 && title) {
		fromString(title, toString(h1))
	}
}

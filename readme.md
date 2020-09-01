# Downpipe

> Command line utility to convert Markdown to HTML, including inlined CSS

This is a very simple CLI program that takes a stream of markdown, converts it to a valid HTML document with inlined CSS styles and outputs as a string.

Usage:

```bash
$ downpipe < readme.md > index.html
```

Uses [Unified](https://github.com/unifiedjs/unified) & [Rehype](https://github.com/rehypejs/rehype) plus several plugins.

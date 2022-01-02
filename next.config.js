const remarkShikiTwoslash = require("remark-shiki-twoslash");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkShikiTwoslash.default]],
    rehypePlugins: [],
  },
});
/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

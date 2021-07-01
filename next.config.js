const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const config = {};

module.exports = withPlugins([[withBundleAnalyzer]], config);

const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    // Changes the cache location for Puppeteer.
    cacheDirectory: join("/tmp/abhi8076-backend", '.cache', 'puppeteer'),
    // executablePath: "/tmp/abhi8076-backend/.cache/puppeteer/chrome/linux-113.0.5672.63"
};
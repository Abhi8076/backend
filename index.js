const puppeteer = require('puppeteer');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const app = express();
app.use(cors());
app.use(compression());
const port = 3001;

app.get('/', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        res.status(400).send("Bad request: 'url' param is missing!");
        return;
    }
    try {
    const b = await puppeteer.launch({executablePath: "/tmp/abhi8076-backend/.cache/puppeteer/chrome/linux-113.0.5672.63/chrome-linux/chrome"});
    const page = await b.newPage();
        await page.goto(url);
        await page.waitForSelector('video',{ timeout: 20000 });
        const vu = await page.$eval('video', (el) => el.getAttribute('src'));
        const resp = await fetch(vu);
        const buf = await resp.arrayBuffer();
        res.send(Buffer.from(buf));
    } catch (error) {
        res.status(500).send(error,"<<>>", puppeteer.executablePath());
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

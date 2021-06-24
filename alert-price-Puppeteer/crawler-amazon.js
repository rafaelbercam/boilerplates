const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = 'https://www.amazon.com.br/Echo-Studio-Smart-Speaker/dp/B07NQBGRKY/';

async function configureBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function checkPrice(page) {
    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML);
    // console.log(html);

    $('#conditionalPrice > td.a-span12 > span.a-size-medium.a-color-price.priceBlockSavingsString', html).each(function() {
        let dollarPrice = $(this).text();
        // console.log(dollarPrice);
        let currentPrice = Number(dollarPrice.replace(/[^0-9.-]+/g,""));
        console.log(currentPrice);

        if (currentPrice < 170000) {
            console.log("AÍ SIM, ABAIXOU!  " + currentPrice);
            sendNotification(currentPrice);
        }
    });
}

async function startTracking() {
    const page = await configureBrowser();
  
    let job = new CronJob('*/30 * * * * *', function() { //runs every 30 seconds in this config
      checkPrice(page);
    }, null, true, null, null, true);
    job.start();
}

async function sendNotification(price) {

    let transporter = nodemailer.createTransport({
      host: "example.com",
      port: 999,
      auth: {
        user: "email@example.com",
        pass: "password#"
      }
    });
  
    let textToSend = 'Preço caiu para ' + price;
    let htmlText = `<a href=\"${url}\">Link</a>`;
  
    let info = await transporter.sendMail({
      from: '"Price Tracker" <email@example.com>',
      to: "faelbercam@gmail.com",
      subject: 'O Preço caiu para ' + price, 
      text: textToSend,
      html: htmlText
    });
  
    console.log("Message sent: %s", info.messageId);
  }

startTracking();
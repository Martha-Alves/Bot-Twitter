const CronJob = require('cron').CronJob;
const famousQuotes = require('./famousQuotes');
const { postTweet } = require('./bot');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

const app = async () => {
    for (let i = 0; i < famousQuotes.QUOTES.length; i++) {
        postTweet(famousQuotes.QUOTES[i])
        await sleep(1000 * 60)
    }
}

app()
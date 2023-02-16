console.log("the bot is starting")

require('dotenv').config();
const Twit = require('twit');

const client = new Twit({
    consumer_key:'--------',
    consumer_secret:'--------',
    access_token:'--------',
    access_token_secret:'--------',
});

const postTweet = (message) => {
    return new Promise((resolve, reject) => {
        client.post("statuses/update", {
            status: message.toLowerCase() + " #SaveWarriorNun"
        }, (error, data, response) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
};

module.exports = { postTweet };


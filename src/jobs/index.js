const cron = require('node-cron');
const everyMinute = () => {
    cron.schedule("59 23 * * *", function () {
        console.log("———");
        console.log("This will run 11:59pm every day");
    });

    cron.schedule("* * 22 * *", function () {
        console.log("———");
        console.log("This will run 21st of every month");
    });


    cron.schedule('* * * * *', () => {
        console.log(new Date().toLocaleString())
    })
}
module.exports = everyMinute
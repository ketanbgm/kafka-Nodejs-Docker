const {kafka} = require('./client');
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({groupId: group});
    console.log("🚀 ~ file: consumer.js:6 ~ init ~ consumer:")
    await consumer.connect();
    await consumer.subscribe({ topics : ['rider-updates'], fromBeginning: true})
    await consumer.run({
        eachMessage: async({ topic, partition, message, heartbeat, pause }) =>{
            console.log(
                ` ${group}: nopd[${topic}]: PART:${partition}:`,
                message.value.toString()
            );
        }
    })
}
init();
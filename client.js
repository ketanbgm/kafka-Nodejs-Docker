const { Kafka }  =  require('kafkajs');

exports.kafka = new Kafka({
    brokers: ['192.168.29.176:9092'],
    clientId: 'my-app'
})
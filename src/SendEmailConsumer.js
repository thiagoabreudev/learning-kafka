const uuid = require('uuid');
const kafka = require('kafka-node');
const ConsumerGroup = kafka.ConsumerGroup;
const OPTIONS = {
  kafkaHost: '127.0.0.1:9092',
  groupId: `SEND-EMAIL-CONSUMER`,
  protocol: ['roundrobin']
};

const TOPICS = ['LOJA_NOVO_PEDIDO'];

class SendEmailConsumer {
  constructor() {
    this.consumer = new ConsumerGroup(OPTIONS, TOPICS);
    this.onMessage();
  }

  onMessage() {
    this.consumer.on('message', message => {
      console.log(`[${this.consumer.options.groupId} : ${JSON.stringify(message)}]`);
    });
  }
}

new SendEmailConsumer();

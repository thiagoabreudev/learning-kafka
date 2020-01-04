const kafka = require('kafka-node');

class NewOrderProducer {
	constructor(client) {
		this.topic = 'LOJA_NOVO_PEDIDO';
		this.client = client;
		this.producer = new kafka.HighLevelProducer(client);
    this.isReady = false;
    this.init();
	}

	init() {
		this.producer.on('ready', () => {
			this.isReady = true;
		});
	}

	send(message) {
		if (this.isReady) {
			this.producer.send([{ topic: this.topic, messages: JSON.stringify(message) }], (err, data) => {
				console.log(data);
			});
		}
	}
}

module.exports = NewOrderProducer;

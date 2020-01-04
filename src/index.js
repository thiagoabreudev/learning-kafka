var kafka = require('kafka-node'),
  client = new kafka.KafkaClient();
var express = require('express');

var app = express();
app.use(express.json());

const NewOrderProducer = require('./NewOrderProducer');
const newOrderProducer = new NewOrderProducer(client);

app.post('/', (req, res) => {
  newOrderProducer.send(req.body);
  res.send('ok');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

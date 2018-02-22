const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to MongoDB Server - ${err}`);
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log(`Failed to add to collection Todos ${err}`);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Max Young',
  //   age: 6,
  //   location: 'Cheltenham'
  // }, (err, result) => {
  //   if(err) {
  //     console.log(`Failed to add to collection Users ${err}`);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});

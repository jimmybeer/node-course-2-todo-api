const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to MongoDB Server - ${err}`);
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // }).then(() => client.close());

  db.collection('Users').find({name: /James/}).toArray().then((docs) => {
     console.log(`Users count: ${docs.length}`);
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch users', err);
   }).then(() => client.close());
  //client.close();
});

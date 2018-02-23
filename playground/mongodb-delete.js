const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to MongoDB Server - ${err}`);
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Delete Many
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  //  }, (err) => {
  //    console.log('Unable to fetch todo', err);
  //  }).then(() => client.close());

  // Delete One
  //  db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //    console.log(`Deleted = ${result.deletedCount}`);
  //  }, (err) => {
  //    console.log('Unable to fetch todo', err);
  //  }).then(() => client.close());
  //
  // // Delete Many
  // db.collection('Todos').findOneAndDelete({text: "Eat lunch"}).then((result) => {
  //   console.log(`Object = ${result}`);
  // }, (err) => {
  //   console.log('Unable to fetch todo', err);
  // }).then(() => client.close());

  // db.collection('Users').deleteMany({name: /James/}).then((result) => {
  //   console.log(`Deleted = ${result.deletedCount}`);
  // }, (err) => {
  //   console.log('Unable to fetch todo', err);
  // }).then(() => client.close());

  var id = new ObjectID("5a8f31897b693f5157b5bf09");
  console.log(id);
  db.collection('Users').findOneAndDelete({_id: id}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todo', err);
  }).then(() => client.close());
  //client.close();
});

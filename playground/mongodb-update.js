const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log(`Unable to connect to MongoDB Server - ${err}`);
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5a8fbc2ce8544e8064a7643a")},
                                          {$set:{completed: true}},
                                          {returnOriginal: false}).then((docs) => {
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch users', err);
   }).then(() => client.close());
  //client.close();
});

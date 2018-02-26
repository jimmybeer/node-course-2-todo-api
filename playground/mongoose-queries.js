const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '5a92094a96b42013171eb23511';

// if(!ObjectID.isValid(id)) {
//   console.log("Invalid id");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo)
// }).catch((e) => {
//   console.log(e);
// });

User.findById('5a90270376609e6ac01f95b9').then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
  console.log('user', user)
}).catch((e) => {
  console.log(e);
});

const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User' 
  }
});
module.exports = mongoose.model("User", userSchema);;

// userModel = mongoose.model("user", userSchema);
// module.exports = { userModel, addUser };

/////////////////

// const user = new userModel({
//     age: 23,
//     name: 'femi'
// });
// user.save().then(
//     console.log('id:' + user._id)
// ).catch(
//     (err) => console.error(err)
// );

const mongoose = require('mongoose');
const User = require("./User");
const url = "mongodb://localhost:27017/testDb";
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(url);

findUser();
// addUser();

async function findUser() {
    try {
        // const user = await User.findById("67b98debc035ec2c6816fabb");
        const user = await User.where('name').equals('femi').populate("bestFriend");
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
}   


async function addUser() {
    try {
        const user = new User({
          age: 23,
          name: "femi",
          bestFriend: "67b98debc035ec2c6816fabb",
        });
        await user.save();
        console.log("user: " + user.bestFriend);
    } catch (error) {
        console.error(error.message);
    }

}



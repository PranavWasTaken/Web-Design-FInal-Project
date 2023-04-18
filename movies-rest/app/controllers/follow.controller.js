const User = require('../models/user.model.js');

exports.follow = (req, res) => {
  let userId = req.params.userId;
  let followId = req.params.followId;
  let user1;
  let user2;
  User.findById(userId)
    .then(user => {
      user1 = user;
      return User.findById(followId);
    })
    .then(user => {
      user2 = user;
      user1.following.push({userId: followId, username: user2.username});
      return user1.save();
    })
    .then(()=>{
      user2.followers.push({userId: userId, username: user1.username});
      return user2.save();
    })
    .then(()=>res.status(200).send({message: "Followed Successfully"}))
    .catch(err=>res.status(500).send({message: err.message}));

}
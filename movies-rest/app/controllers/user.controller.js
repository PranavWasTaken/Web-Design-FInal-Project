const User = require('../models/user.model');

exports.create = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    type: req.body.type,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    isGold:req.body.isGold,
  })
  user.save()
    .then(user=>{
      req.session['currentUser'] = user;
      res.send(user);
    })
    .catch(err=>{
      res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
      });
    })
};

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
  };

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
          if(!user) {
              return res.status(404).send({
                  message: "User not found with id " + req.params.userId
              });
          }
          res.send(user);
      }).catch(err => {
          return res.status(500).send({
              message: "Error retrieving user with id " + req.params.userId
          });
      });
  };

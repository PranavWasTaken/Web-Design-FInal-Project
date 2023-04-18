const Review = require('../models/review.model.js');
const User = require('../models/user.model.js');

exports.create = (req, res) => {
  const review = new Review({
        username: req.body.username,
        movieName: req.body.movieName,
        title: req.body.title,
        userId: req.body.userId,
        movieId: req.body.movieId,
        body: req.body.body
  });
  review.save()
    .then(review=>{
      User.findById(req.body.userId)
        .then(user=>{
          user.reviews.push({reviewId: review._id, username: user.username});
          user.save()
            .then(user=>{
              res.send(review);
            })
        })
        .catch(err=>res.status(500).send({message: err.message}))
    })
    .catch(err=>{
      res.status(500).send({
            message: err.message || "Some error occurred while adding the review."
      });
    })
};

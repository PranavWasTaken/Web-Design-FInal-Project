const User = require('../models/user.model.js');

exports.addToWatchlist = (req, res) => {
  let userId = req.params.userId;
  let movieId = req.params.movieId;

  let movieName = req.body.movieName;
  let imageUrl = req.body.imageUrl;

  User.findById(userId)
    .then(user=>{
      user.watchlist.push({movieId: movieId, movieName: movieName, imageUrl: imageUrl});
      return user.save();
    })
    .then(()=>res.status(200).send({message: "Added to watchlist successfully"}))
    .catch(err=>res.status(500).send({message: err.message}));

}
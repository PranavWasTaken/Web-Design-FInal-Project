import React from 'react';
import UserService from "../../services/UserService";
import MovieServiceClient from "../../services/MovieService";
import * as constants from "../../services/Constants";

import Lottie from 'react-lottie';
import animationData from '../../assets/life.json';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  };
  export default class AddToWatchlistComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userProfile: '',
            watchlistIds: []
        }

        this.userService = new UserService();

        this.addToWatchlist = this.addToWatchlist.bind(this);
        this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
    }

    componentDidMount() {
        this.userService.findUserById(this.props.userId).then(response => {

            let idArray = [];
            for (let movie in response.watchlist) {
                idArray.push(response.watchlist[movie].movieId);
            }
            this.setState({
                userProfile: response,
                watchlistIds: idArray
            })

            }
        )
    }
  }
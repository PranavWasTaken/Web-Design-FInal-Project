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

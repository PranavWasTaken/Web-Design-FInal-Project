import React from 'react';
import {HomeNavigationBar} from "../HomeComponent/HomeNavigationBar";
import MovieServiceClient from "../../services/MovieService";
import {MovieSearchResultItem} from "./MovieSearchResultItem";
import UserService from "../../services/UserService";
import FooterComponent from "../../components/HomeComponent/FooterComponent";
import posed from "react-pose";

const AnimatedDiv = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1}
});

export default class MovieSearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.userService = new UserService();

        this.state = {
            searchResults: [],
            userProfile: '',
            searchQuery: '',
            searchType: 'movie',
            isVisible: false
        }

        this.searchTextUpdated = this.searchTextUpdated.bind(this);
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 500);

        MovieServiceClient.instance.searchMovieForQuery(this.props.match.params.query).then(response => {
            console.log(response.results);
            this.setState({
                searchResults: response.results
            })
        });

        this.userService.getProfile().then(
            response => this.setState({
                userProfile: response
            })
        )
    }

    searchTextUpdated(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }

    searchTypeUpdated(event) {
        this.setState({
            searchType: event.target.value
        })
    }

    searchButtonClicked() {
        if (this.state.searchQuery !== '') {
            if (this.state.searchType === 'movie') {
                this.props.history.push('/movie/search/' + this.state.searchQuery);
                window.location.reload(false);
            }
            else {
                this.props.history.push('/user/search/' + this.state.searchQuery);
                window.location.reload(false);
            }
        }
        else {
            alert("Enter a search query first!");
        }
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            if (this.state.searchResults.length === 0) {
                return <h4 className="white-title ml-4">No results found</h4>
            }
            else {
                let items = this.state.searchResults
                    .map(function (result) {
                        return <MovieSearchResultItem searchResult={result}/>;
                    });
                return (items);
            }
        }
    }


}
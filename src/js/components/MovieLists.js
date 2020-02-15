import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { movies: state.movies };
};

const ConnectedListMovie = ({ movies }) => (    
    <ul>
        {movies.map(el => (
            <li key={el.movieNamestr}>{el.movieNamestr}</li>
        ))}
    </ul>
);

const MovieLists = connect(mapStateToProps)(ConnectedListMovie);

export default MovieLists
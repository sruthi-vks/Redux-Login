import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle,addMovies } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        addMovie: movie => dispatch(addMovies(movie))
    };
}



class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            movieNamestr: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleMovieChange(event){
        this.setState({ movieNamestr: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { movieNamestr } = this.state;
        this.props.addArticle({ title });
        this.props.addMovie({ movieNamestr });
        this.setState({ title: "" });
        this.setState({ movieNamestr: "" });
    }
    render() {
        const { title } = this.state;
        const { movieNamestr } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Movie</label>
                    <input
                        type="text"
                        id="movies"
                        value={movieNamestr}
                        onChange={this.handleMovieChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;
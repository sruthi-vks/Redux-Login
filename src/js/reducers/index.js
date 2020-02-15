const initialState = {
    articles: [],
    movies: [],
    mycoll: [{ title: "AA", name: "BB", C: "CC" }, { title: "Admi", name: "Boy", C: "CC" }, { title: "xyz", name: "CC", C: "CC" }],
    usercredentials: [{ "username": "hruday@gmail.com", "password": 'hruday123' }],
    empdetails: {
        user: [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",
            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }
        ]
    }

};

function rootReducer(state = initialState, action) {
    /* if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === ADD_MOVIE) {
        return Object.assign({}, state, {
            movies: state.movies.concat(action.movieName)
        });
    } */
    return state;
};

export default rootReducer;
import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { mycoll: state.mycoll };
};

const Connectedcoll = ({ mycoll }) => (    
    <ul>
        {mycoll.map(el => (
            <li key={el}>{el.name}</li>
        ))}
    </ul>
);

const collection = connect(mapStateToProps)(Connectedcoll);


export default collection
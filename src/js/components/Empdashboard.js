import React, { Component } from "react";
import { connect } from "react-redux";

import './Empdashboard.css';

const mapStateToProps = state => {
    return { empdetails: state.empdetails.user };
};

class ConnectedEmpdashboard extends Component {
    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div>
            <h2>Employee Dashboard</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email address</th>
                    <th>Contact Phone</th>
                </tr>
                {this.props.empdetails.map(el => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.gender}</td>
                        <td>{el.email}</td>
                        <td>{el.phoneNo}</td>
                    </tr>
                ))}
            </table>
            </div>
        );
    }

}

const Empdashboard = connect(mapStateToProps)(ConnectedEmpdashboard);

export default Empdashboard
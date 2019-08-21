import React, { Component } from 'react'
import Header from "../components/Header";
import {Link} from "react-router-dom";

export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass="default-hero">
                <h2 className="text-light text-uppercase">
                    Oops! Sorry, this page does not exist.
                </h2>
                <Link className="text-uppercase btn btn-secondary btn-lf mt-3" to="/">
                    return home
                </Link>
            </Header>
        )
    }
}
    
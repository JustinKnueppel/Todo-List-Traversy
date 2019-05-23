import React, { Component } from "react";
import { linkStyle } from "./Header";
export default class FooterList extends Component {
    render() {
        return (
            <ul style={{display: "table-cell"}}>
                <li style={liStyle} ><h1>{this.props.title}</h1></li>
                {this.props.links.map(link => (
                    <li style={liStyle} >
                        <a href={link.url} style={linkStyle}>{link.text}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

const liStyle = {
    color: "white",
    listStyle: "none",
}
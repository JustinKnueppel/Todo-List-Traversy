import React, { Component } from "react";
import FooterList from "./FooterList";

export default class Footer extends Component {
    state = [
        {
            title: "About",
            links: [
                {
                    text: "Justin Knueppel",
                    url: "https://www.justinknueppel.com/about"
                },
                {
                    text: "The Ohio State University",
                    url: "https://www.osu.edu"
                },
                {
                    text: "Data Analytics 2021",
                    url: "https://data-analytics.osu.edu"
                }
            ]
        },
        {
            title: "Contact",
            links: [
                {
                    text: "Email",
                    url: "mailto:justinknueppel@gmail.com"
                },
                {
                    text: "Linkedin",
                    url: "https://www.linkedin.com/in/justin-knueppel-398266171"
                },
                {
                    text: "Github",
                    url: "https://www.github.com/JustinKnueppel"
                }
            ]
        }
    ]
    render() {
        return (
            <footer style={footerStyle}>
                {this.state.map(stack => (
                    <FooterList title={stack.title} links={stack.links} />
                ))}
            </footer>
        );
    }
}

const footerStyle = {
    display: "table",
    tableLayout: "fixed",
    background: "#333",
    color: "fff",
    width: "100%",
    textAlign: "center",
    position: "fixed",
    padding: "10px",
    bottom: 0
};

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer.js";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import "./App.css";
import axios from "axios";

class App extends React.Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios
            .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(res => this.setState({ todos: res.data }));
    }

    // Toggle complete
    toggleCompleted = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // Delete todo
    deleteTodo = id => {
        axios
            .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ]
                });
            });
    };

    // Add todo
    addTodo = title => {
        axios
            .post("http://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false
            })
            .then(res => {
                this.setState({
                    todos: [...this.state.todos, res.data]
                });
            });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        toggleCompleted={this.toggleCompleted}
                                        deleteTodo={this.deleteTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

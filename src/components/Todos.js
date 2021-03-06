import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo}/>
                    ))}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todos;

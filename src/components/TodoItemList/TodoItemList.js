import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        // todos: todo 객체들이 들어있는 배열
        // onToggle: 체크박스를 키고 끄는 함수
        // onRemove: 아이템을 삭제시키는 함수
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map((todo)=> (
            <TodoItem
                {...todo}
                onToggle={onToggle}
                onRemove={onRemove}
                key={todo.id}
            />
        ));

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;



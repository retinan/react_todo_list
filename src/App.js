import React, {Component} from 'react';
import TodoListTemplate from "./components/TodoListTemplate/TodoListTemplate";
import Form from "./components/Form/Form";
import Palette from "./components/Palette/Palette";
import TodoItemList from "./components/TodoItemList/TodoItemList";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

    id=3

    state = {
        input:'',
        todos: [
            {id:0, text: 'react0', checked:false, color:''},
            {id:1, text: 'react1', checked:true, color:''},
            {id:2, text: 'react2', checked:false, color:''},
        ],
        colors: [
            {id:0, color:'#343a40'},
            {id:1, color:'#f03e3e'},
            {id:2, color:'#12b886'},
            {id:3, color:'#228ae6'},
            // '#343a40', '#f03e3e', '#12b886', '#228ae6'
        ],
        font_color:'',
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input change value
        });
    }

    handleCreate = () => {
        const {input, todos,font_color} = this.state;
        this.setState({
           input:'',
           todos: todos.concat({
               id:this.id++,
               text: input,
               checked: false,
               color: font_color,
           })
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        // parameter index searching
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // select obj

        const nextTodos = [...todos]; // array copied

        // prev value copied, checked value paste
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        })
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo=>todo.id !==id)
        });
    }

    handleColorClick = (id) => {
        const { colors } = this.state;
        const clickColor = colors.filter(color=>color.id === id);
        console.log(id, clickColor[0].color);
        this.setState({
            font_color: clickColor[0].color
        })

    }


    render() {
        const { input, todos, colors, font_color } = this.state;
        const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove, handleColorClick} = this;
        return (
            <TodoListTemplate palette={
                                    (<Palette
                                        colors={colors}
                                        onColorClick={handleColorClick}
                                    />)
                                }
                              form={
                                  (<Form
                                      value={input}
                                      fontColor={font_color}
                                      onKeyPress={handleKeyPress}
                                      onChange={handleChange}
                                      onCreate={handleCreate}
                                  />)
                              }>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </TodoListTemplate>
        )
    }
}



export default App;

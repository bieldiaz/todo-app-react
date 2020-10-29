import React, { useState, useEffect, useRef } from 'react'
import { TiEdit } from 'react-icons/ti';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault(); // NO REFRESH
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Edit task"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <button className="todo-button"><TiEdit /></button>
                </>) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a task"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />

                        <button className="todo-button">+</button>
                    </>
                )

            }

        </form>
    )
}

export default TodoForm

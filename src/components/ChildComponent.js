import React, { useState } from "react";



const ChildComponent = ({ todos }) => {

    const [todoId, setTodoId] = useState("");



    return (
        <div>
            <ul>
                <h2>Child Component</h2>
                {todos.map((todo) => (
                    <li>
                        {todo.text}
                        <button className="btn" onClick={() => {
                            setTodoId(todo.id)
                           
                        }}>Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChildComponent

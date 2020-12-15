import React, {Component} from "react";

export default class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {todo: ''};
    }

    myChangeHandler = (event) => {
        this.setState(
            {todo: event.target.value}
        );
    }

    render() {
        return (<>
                <form>
                    <h1>Hellooo</h1>
                    <p>Enter Todo</p>
                    <input
                        aria-label={"todo"}
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                </form>
                {
                    this.state.todo &&
                    <>
                        <h1>Todo List</h1>
                        <h6>{this.state.todo}</h6>
                    </>
                }
            </>
        );
    }
}
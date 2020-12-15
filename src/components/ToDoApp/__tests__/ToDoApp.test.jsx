import ToDoApp from "../ToDoApp";
import React from "react";
import {render, fireEvent} from "@testing-library/react";

describe('To do App', () => {
    it('should load todo input form', async () => {
        const todoApp = render(<ToDoApp/>);

        expect(todoApp.baseElement).toMatchSnapshot();
    })

    it('should should display todo', async () => {
        const todoApp = render(<ToDoApp/>);

        const inputElement = todoApp.getByLabelText("todo");
        fireEvent.change(inputElement, { target: { value: 'abcd' } })

        expect(todoApp.baseElement).toMatchSnapshot();
    })
});
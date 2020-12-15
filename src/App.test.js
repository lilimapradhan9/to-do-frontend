import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders to to app", () => {
  render(<App />);
  const todoApp = screen.getByText(/Enter Todo/i);
  expect(todoApp).toBeInTheDocument();
});

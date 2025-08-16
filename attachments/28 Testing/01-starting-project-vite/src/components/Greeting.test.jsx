import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true }); // if exact is false casing won't matter, exact: true is the default so it doesn't have to there explicitely

    expect(helloWorldElement).toBeInTheDocument();
  });
});

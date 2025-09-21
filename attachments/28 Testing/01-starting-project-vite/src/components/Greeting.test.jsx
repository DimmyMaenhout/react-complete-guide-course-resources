import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("renders It's good to see you! if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const GoodToSeeYouElement = screen.getByText("It's good to see you!", {
      exact: false,
    }); // if exact is false casing won't matter, exact: true is the default so it doesn't have to there explicitely

    expect(GoodToSeeYouElement).toBeInTheDocument();
  });

  test("renders Changed! when the button IS clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    async () => {
      const buttonElemet = screen.getByRole("button");
      await userEvent.click(buttonElemet);

      // Assert
      const outputElement = screen.getByText("Changed!");
      expect(outputElement).toBeInTheDocument();
    };
  });

  test("does not render 'good to see you' if the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    async () => {
      const buttonElemet = screen.getByRole("button");
      await userEvent.click(buttonElemet);

      // Assert
      const outputElement = screen.queryByText("good to see you", {
        exact: false,
      });
      expect(outputElement).toBeNull();
    };
  });
});

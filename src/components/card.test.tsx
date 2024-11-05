import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./card";

describe("Card component", () => {
  it("renders with default props", () => {
    render(<Card>Card content</Card>);
    const cardElement = screen.getByText(/card content/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("card");
  });

  it("renders with custom className", () => {
    render(<Card className="custom-class">Card content</Card>);
    const cardElement = screen.getByText(/card content/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("card custom-class");
  });
});

describe("CardHeader component", () => {
  it("renders with default props", () => {
    render(<Card.Header>Card header</Card.Header>);
    const headerElement = screen.getByText(/card header/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("card-title");
  });

  it("renders with custom className", () => {
    render(<Card.Header className="custom-class">Card header</Card.Header>);
    const headerElement = screen.getByText(/card header/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("card-title custom-class");
  });
});

describe("CardBody component", () => {
  it("renders with default props", () => {
    render(<Card.Body>Card body</Card.Body>);
    const bodyElement = screen.getByText(/card body/i);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("card-body");
  });

  it("renders with custom className", () => {
    render(<Card.Body className="custom-class">Card body</Card.Body>);
    const bodyElement = screen.getByText(/card body/i);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("card-body custom-class");
  });
});

describe("CardActions component", () => {
  it("renders with default props", () => {
    render(<Card.Actions>Card actions</Card.Actions>);
    const actionsElement = screen.getByText(/card actions/i);
    expect(actionsElement).toBeInTheDocument();
    expect(actionsElement).toHaveClass("card-actions");
  });

  it("renders with custom className", () => {
    render(<Card.Actions className="custom-class">Card actions</Card.Actions>);
    const actionsElement = screen.getByText(/card actions/i);
    expect(actionsElement).toBeInTheDocument();
    expect(actionsElement).toHaveClass("card-actions custom-class");
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AddToCartButton from "./add-to-cart-button";
import { addProductToCartAction } from "@/actions/cart";

// Mock the addProductToCartAction function
vi.mock("@/actions/cart", () => ({
  addProductToCartAction: vi.fn(),
}));

describe("AddToCartButton component", () => {
  it("renders with default props", () => {
    render(<AddToCartButton productId="123" />);
    const buttonElement = screen.getByText(/add to cart/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn btn-lg btn-neutral");
  });

  it("calls addProductToCartAction when clicked", async () => {
    render(<AddToCartButton productId="123" />);
    const buttonElement = screen.getByText(/add to cart/i);
    fireEvent.click(buttonElement);
    expect(addProductToCartAction).toHaveBeenCalledWith("123");
  });
});

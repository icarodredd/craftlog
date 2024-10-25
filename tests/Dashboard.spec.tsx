import { render, screen } from "@testing-library/react";
import Dashboard from "../src/components/Dashboard";
import "@testing-library/jest-dom/vitest";

describe("Dashboard", () => {
  it("should display a button for select the teams", () => {
    render(<Dashboard />);
    const button = screen.getByRole("combobox");
    expect(button).toBeInTheDocument();
  });

  it("should display a greeting", () => {
    render(<Dashboard />);
    const greeting = screen.getByRole("heading");
    expect(greeting).toBeInTheDocument();
    expect(greeting).toHaveTextContent("Hello, member of Nexa Team!");
  });

  it("should display a button for add a task", () => {
    render(<Dashboard />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add Task");
  });

  it("should display a subtitle", () => {
    render(<Dashboard />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Tasks of the project:");
  });
});

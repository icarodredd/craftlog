import { render, screen } from "@testing-library/react";
import Sidebar from "../src/components/Sidebar";
import "@testing-library/jest-dom/vitest";

describe("Sidebar", () => {
  it("should display a heading with text of Craftlog", () => {
    render(<Sidebar />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Craftlog");
  });

  it("should display a button for dashboard", () => {
    render(<Sidebar />);
    const dashboardButton = screen.getByRole("button");
    expect(dashboardButton).toBeInTheDocument();
    expect(dashboardButton).toHaveTextContent("Dashboard");
  });
});

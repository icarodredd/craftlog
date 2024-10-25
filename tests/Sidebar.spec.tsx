import { render, screen } from "@testing-library/react";
import Sidebar from "../src/components/Sidebar";
import "@testing-library/jest-dom/vitest";

describe("Sidebar", () => {
  it("should display a headind with text of Craftlog", () => {
    render(<Sidebar />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Craftlog");
  });
});

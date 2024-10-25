import { render, screen } from "@testing-library/react";
import Task from "@/components/Task";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { TaskData } from "@/components/Dashboard";
import { Firestore } from "firebase/firestore";

describe("Task", () => {
  const mockTask: TaskData = {
    completed: false,
    description: "Random description",
    id: "123",
    priority: "High",
    title: "Random title",
  };
  const mockSetTasks = vi.fn();
  const mockFirestore = {} as Firestore;

  it("should display a heading with text of task", () => {
    render(
      <Task
        task={mockTask}
        db={mockFirestore}
        setTasks={mockSetTasks}
      />,
    );

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Random title");
  });

  it("should display a paragraph with priority", () => {
    render(
      <Task
        task={mockTask}
        db={mockFirestore}
        setTasks={mockSetTasks}
      />,
    );

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Priority: High");
  });

  it("should display a div with description of a task", () => {
    render(
      <Task
        task={mockTask}
        db={mockFirestore}
        setTasks={mockSetTasks}
      />,
    );

    const text = screen.getByText("Random description");
    expect(text).toBeInTheDocument();
  });

  it("should display three buttons for complete, delete and edit a task", () => {
    render(
      <Task
        task={mockTask}
        db={mockFirestore}
        setTasks={mockSetTasks}
      />,
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => expect(btn).toBeInTheDocument());
    expect(buttons).toHaveLength(3);
  });
});

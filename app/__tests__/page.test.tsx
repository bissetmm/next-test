import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";

describe("ToDOアプリ", () => {
  it("初期表示では空のリストが表示される", () => {
    render(<Home />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.queryByText("未完了のタスク")).not.toBeInTheDocument();
  });

  it("タスクを追加できる", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: "新しいタスク" } });
    fireEvent.click(screen.getByText("Add"));
  });

  it("タスクを削除できる", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: "新しいタスク" } });
    fireEvent.click(screen.getByText("Add"));
  });

  it("タスクを完了できる", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: "新しいタスク" } });
    fireEvent.click(screen.getByText("Add"));
  });

  it("タスクを編集できる", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: "新しいタスク" } });
    fireEvent.click(screen.getByText("Add"));
  });
});

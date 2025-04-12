import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../../register/page";

describe("ユーザー登録", () => {
  it("初期表示では空のフォームが表示される", () => {
    render(<Register />);
    expect(screen.getByText("ユーザー登録")).toBeInTheDocument();
    expect(screen.getByLabelText("名前")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByLabelText("パスワード")).toBeInTheDocument();
  });

  it("ユーザー情報を入力して登録できる", () => {
    render(<Register />);
    const nameInput = screen.getByLabelText("名前");
    const emailInput = screen.getByLabelText("メールアドレス");
    const passwordInput = screen.getByLabelText("パスワード");
    const submitButton = screen.getByText("登録");

    fireEvent.change(nameInput, { target: { value: "テストユーザー" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    expect(
      screen.getByText("ユーザー登録を完了しました！")
    ).toBeInTheDocument();
  });
});

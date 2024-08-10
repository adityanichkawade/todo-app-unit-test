import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import TodoContainer from "./TodoContainer";

const addTodo = async (title = "") => {
  await fireEvent.change(screen.getByTestId("todo-input"), {
    target: {
      value: title,
    },
  });

  await fireEvent.submit(
    screen.getByTestId("todo-submit"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
};

describe("Testing <TodoContainer/>", () => {
  beforeEach(() => {
    render(<TodoContainer />);
  });

  it("should able to add todo", async () => {
    await addTodo("Buy Grocery");

    expect(screen.getByTestId("todo-list").children.length).toBe(1);
    expect(
      screen.getByTestId("todo-list").children.item(0).children.item(0)
        .textContent
    ).toBe("Buy Grocery");
  });

  it("should not able to add todo for empty text", async () => {
    await addTodo();
    expect(screen.getByTestId("todo-list").children.length).toBe(0);
  });

  it("should able to delete todo", async () => {
    await addTodo("Buy Grocery");
    await fireEvent.click(screen.getByTestId("todo-delete"));
    expect(screen.getByTestId("todo-list").children.length).toBe(0);
  });

  it("should be able to filter todo", async () => {
    await addTodo("Buy Grocery");
    await addTodo("Buy Stationary");

    expect(screen.getByTestId("todo-list").children.length).toBe(2);

    await fireEvent.change(screen.getByTestId("todo-filter"), {
      target: {
        value: "Grocery",
      },
    });

    expect(screen.getByTestId("todo-list").children.length).toBe(1);

    await fireEvent.change(screen.getByTestId("todo-filter"), {
      target: {
        value: "Buy",
      },
    });

    expect(screen.getByTestId("todo-list").children.length).toBe(2);
  });

  it("should be able to show all the todos on clearing the filter", async () => {
    await addTodo("Buy Grocery");
    await addTodo("Buy Stationary");

    expect(screen.getByTestId("todo-list").children.length).toBe(2);

    await fireEvent.change(screen.getByTestId("todo-filter"), {
      target: {
        value: "",
      },
    });

    expect(screen.getByTestId("todo-list").children.length).toBe(2);
  });

  it("should not show any todos when filter is not matching", async () => {
    await addTodo("Buy Grocery");
    await addTodo("Buy Stationary");

    expect(screen.getByTestId("todo-list").children.length).toBe(2);

    await fireEvent.change(screen.getByTestId("todo-filter"), {
      target: {
        value: "Read Book",
      },
    });

    expect(screen.getByTestId("todo-list").children.length).toBe(0);
  });
});

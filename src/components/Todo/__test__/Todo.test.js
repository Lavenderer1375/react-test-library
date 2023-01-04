import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

// Building a function for repetetive works
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
  const buttonElement = screen.getByRole('button', {
    name: 'Add',
  });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

// Using a function in a test
it('should be able to type into input', () => {
  render(<MockTodo />);
  addTask(['wash car']);
  const divElement = screen.getByText(/wash car/i);
  expect(divElement).toBeInTheDocument();
});

// Testing multiple items
it('should render multiple items normaly', () => {
  render(<MockTodo />);
  addTask(['wash car', 'go shoppiong', ' clean the room']);
  const divElement = screen.queryAllByTestId('task-container');
  expect(divElement.length).toBe(3);
});

// Using loops in Tests
it('should render multiple items loop', () => {
  render(<MockTodo />);
  for (let index = 0; index < 100; index++) {
    addTask([`wash car ${index}`]);
  }
  const divElement = screen.queryAllByTestId('task-container');
  expect(divElement.length).toBe(100);
});

// testing CSS classes
it('task should not have complete calss  initially ', () => {
  render(<MockTodo />);
  addTask(['wash car']);
  const divElement = screen.getByText(/wash car/i);
  console.log(divElement);
  expect(divElement).not.toHaveClass('todo-item-active');
});

// testing CSS classes
it('task should  have complete calss whene clicked ', () => {
  render(<MockTodo />);
  addTask(['wash car']);
  const divElement = screen.getByText(/wash car/i);
  fireEvent.click(divElement);
  expect(divElement).toHaveClass('todo-item-active');
});
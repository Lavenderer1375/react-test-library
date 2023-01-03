import { screen, render, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

it('should render input element', () => {
  render(
    <AddInput
      todos={[]}
      // setTodos={()=>{}}
      setTodos={mockedSetTodo}
    />
  );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

it('should be able to type', () => {
  render(
    <AddInput
      todos={[]}
      // setTodos={()=>{}}
      setTodos={mockedSetTodo}
    />
  );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.change(inputElement, { target: { value: 'task1' } });
  expect(inputElement.value).toBe('task1');
});

it('should call the function button', () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.click(inputElement);
  fireEvent.change(inputElement, { target: { value: 'task1' } });
  const btnElemnt = screen.getByRole('button');
  fireEvent.click(btnElemnt);
  expect(mockedSetTodo).toBeCalled();
});

it(' should have empty input whena add button called', () => {
  render(
    <AddInput
      todos={[]}
      // setTodos={()=>{}}
      setTodos={mockedSetTodo}
    />
  );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  fireEvent.change(inputElement, { target: { value: 'task1' } });
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe('');
});


it('Should work!', () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const InputCheck = screen.getByPlaceholderText('Add a new task here...');
  fireEvent.click(InputCheck);
  fireEvent.change(InputCheck, { target: { value: 'Task1' } });
  expect(InputCheck.value).toBe('Task1');
});

it("Should accept the btn's function.", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const InputSelect = screen.getByPlaceholderText('Add a new task here...');
  fireEvent.change(InputSelect, { target: { value: 'Done' } });
  const ButtonSelect = screen.getByRole('button', { name: 'Add' });
  fireEvent.click(ButtonSelect);
  expect(mockedSetTodo).toBeCalled();
});

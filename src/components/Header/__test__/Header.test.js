import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Should pass title as prop by text', () => {
  render(<Header title="todo" />);

  const HeadElement = screen.getByText('todo');

  expect(HeadElement).toBeInTheDocument();
});


// it('should pass title find by text', async () => {
//   render(<Header title="todo" />);

//   const Head = await screen.findByText('todo');

//   expect(Head).toBeInTheDocument();
// });


// test('should pass title as prop by text', () => {
//   render(<Header title="todo" />);

//   const headerElement = screen.getByText(/todo/i);

//   expect(headerElement).toBeInTheDocument();
// });


// test('should pass title as prop find by text', async () => {
//   render(<Header title="todo" />);

//   const headerElement = await screen.findByText(/todo/i);

//   expect(headerElement).toBeInTheDocument();
// });


// test('should not pass title as prop by text', () => {
//   render(<Header title="todo" />);

//   const headerElement = screen.queryByText(/todoList/i);

//   expect(headerElement).not.toBeInTheDocument();
// });


// test('should pass title as prop by title', () => {
//   render(<Header title="todo" />);

//   const headerElement = screen.getByTitle('Header');

//   expect(headerElement).toBeInTheDocument();
// });


// test('should pass title as prop by role', () => {
//   render(<Header />);

//   const headerElement = screen.getAllByRole('heading');

//   expect(headerElement.length).toBe(2);
// });


// test('should pass title as prop by role', () => {
//   render(<Header />);

//   const headerElement = screen.getByTestId('header-2');

//   expect(headerElement).toBeInTheDocument();
// });


// test('should pass title as prop by role', () => {
//   render(<Header />);

//   const headerElement = screen.getByRole('heading');

//   expect(headerElement).toBeInTheDocument();
// });

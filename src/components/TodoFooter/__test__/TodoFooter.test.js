import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('test the text fot todoFooter ', () => {
  describe('', () => {
    it('should write task for 1 task ', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);

      const onetask = screen.getByText(/1 task left/i);
      expect(onetask).toBeInTheDocument();
    });
  });

//   test('should render correct amount of tasks', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={3} />);
//     const pElement = screen.getByText(/3 tasks left/i);
//     expect(pElement).toBeInTheDocument();
//   });
});

// //!toBeTruthy
// it('should write task for 1 task ', async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);

//   const onetask = await screen.queryByText(/1 task left/i);
//   //    const onetask = await screen.queryByText(/1 task left/i)
//   // falsy=>false nan undefined null ""
//   // expect(onetask).not.toBeTruthy()
//   expect(onetask).toBeTruthy();
// });

// //!ToBeVisible()

//     it("should write task for 1 task ", () => {
//         render(
//             <MockTodoFooter
//             numberOfIncompleteTasks={1}
//             />
//         )

//         const onetask = screen.getByText(/1 task left/i)
//         expect(onetask).toBeVisible()
//     })

//     //! toContainHTML()
//         it("should write task for 1 task ",async () => {
//         render(
//             <MockTodoFooter
//             numberOfIncompleteTasks={1}
//             />
//         )

//             const onetask = await screen.queryByText(/1 task left/i)
//             console.log(onetask);
//         expect(onetask).toContainHTML("p")
//         })

//         //! toHaveTextContent()
//    it("should write task for 1 task ",async () => {
//         render(
//             <MockTodoFooter
//             numberOfIncompleteTasks={1}
//             />
//         )

//             const onetask = await screen.queryByText(/1 task left/i)
//             console.log(onetask);
//         expect(onetask).toHaveTextContent("1 task left")
//    })

//    //!ToBe()

//      it("should write task for 1 task ",async () => {
//         render(
//             <MockTodoFooter
//             numberOfIncompleteTasks={1}
//             />
//         )

//             const onetask = await screen.queryByText(/1 task left/i)

//         expect(onetask.textContent).toBe("1 task left")
//    })

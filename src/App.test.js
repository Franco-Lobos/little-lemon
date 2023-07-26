import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './bookingPage/BookingPage';

test('Form test', ()=>{
  render(<BookingPage/>);
  const headingElemnt = screen.getByText('Book now');
  expect(headingElemnt).toBeInTheDocument();
})


test('Validate initializeTimes', ()=>{
  render(<BookingPage/>);
  const datePicker = screen.getByLabelText(/Choose date/);
  console.log(datePicker.value)
  expect(datePicker.value).toBe("2023-07-26");
})


// test('Validate updateTimesReducer', ()=>{
//   render(<BookingPage/>);
//   const datePicker = screen.getByLabelText(/Choose date/);

//   fireEvent.change(datePicker, {taget:{value: '2023-07-29'}});

//   expect(datePicker.value).toBe("2023-07-29");
// })
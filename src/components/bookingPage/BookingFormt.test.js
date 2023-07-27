import { fireEvent, render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';
import BookingPage from './BookingPage'


const genericTest = (text)=>{
    test(`Form test - ${text}`, ()=>{
        render(<BookingPage/>);
        const element = screen.getByText(text);
        expect(element).toBeInTheDocument();
      })
}


const fields = ['Choose date', 'Choose time', 'Number of guests','Ocassion']

fields.forEach((field)=>{
    genericTest(field);
})

const defaultForm={
    date: '2023-26-07',
    time: '17:00',
    guests: 2,
    ocassion: 'birthday'
}



test(`Form validation test`, ()=>{

    render(<BookingPage/>);

    const keys = Object.keys(defaultForm);

    fields.forEach((field, indx)=>{
        const element = screen.getByLabelText(field);
        fireEvent.change(element, {target: {value: defaultForm[keys[indx]]}})
    });

    const button = screen.getByText(/Book now/);
    button.click();
})


const invalidForm={
    date: '2023-26-07',
    time: '17:00',
    guests: 0,
    ocassion: 'birthday'
}
test(`Form invalid test`, ()=>{

    render(<BookingPage/>);

    const keys = Object.keys(invalidForm);

    fields.forEach((field, indx)=>{
        const element = screen.getByLabelText(field);
        fireEvent.change(element, {target: {value: defaultForm[keys[indx]]}})
    });

    const button = screen.getByText(/Book now/);
    fireEvent.click(button);

    setTimeout(e => {
        const message = screen.getByText(/Required/);
        expect(message).toBeInTheDocument();
    }, 1000);
})

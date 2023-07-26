import Header from '../body/Header';
import Footer from '../body/Footer';

import HomePage from '../HomePage/HomePage';

import {Routes, Route} from 'react-router-dom'
import BookingPage from '../bookingPage/BookingPage';
import ConfirmedBooking from '../bookingPage/ConfirmedBooking';
const DinamicBody = ()=>{

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
                <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default DinamicBody;
import {useState, useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";

import {fetchAPI }from '../../utils/fetchData';

import BookingData from "./BookingData";

const BookingPage =()=>{
    
    const [reservated, setReservated] = useState(0);

    const initializeTimes = () => {
        return window.fetchAPI(new Date())
    }

    const updateTimesReducer = (state, action) =>{
        if (action.type == 'addTimes') {
            const newDate = new Date(action.payload)
            return window.fetchAPI(newDate)
        }
        return state
    }

    const[availableTimes, dispatchAvailableTimes] = useReducer(updateTimesReducer, initializeTimes());


    useEffect(()=>{
        const reservation = window.localStorage.getItem('reservation');
        if (reservation){
            setReservated(1);
        }
    },[])

    return (
        <>
        {!reservated
        ?
            <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} ></BookingForm>
        :
            <div className="chosen-table">
                <h2>A tabel has been reservated, do you want do make a new one?</h2>
                <BookingData></BookingData>
                <button onClick={()=>setReservated(0)}> Make  new reservation</button>
            </div>

        }
        </>
    )
}

export default BookingPage;

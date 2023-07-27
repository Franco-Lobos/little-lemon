import { useState, useEffect } from "react";

const BookingData = ()=>{

    const [reserve, setReserve] =useState('');

    useEffect(()=>{
        const ocation =localStorage.getItem("reservation") ;
        if(!ocation) return;
        const jsonReseve =  JSON.parse(ocation)
        console.log(jsonReseve)
        setReserve(jsonReseve)
    },[])

    const convertDate = (yyyymmdd) =>{
        const date = yyyymmdd.split('-');
        return [date[1], date[2], date[0]].join('/');
    }

    return(
        reserve
        ?
        <div id="card">
            <h5>Date: {convertDate(reserve.resDate)}</h5>
            <h5>Time: {reserve.resTime}</h5>
            <h5>Seats: {reserve.guests}</h5>
            <h5>Occasion: {reserve.occasion}</h5>
        </div>
        :""
    )
}

export default BookingData
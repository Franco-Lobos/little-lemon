import { Link } from "react-router-dom";
import BookingData from "./BookingData";

const ConfirmedBooking = (data)=>{

    const buttonStyle ={
        width: "100%",
        cursor: "pointer"
    }
    return(
        <div className="chosen-table confimation">
            <h4>The book has been succesfully confirmed</h4>
            <BookingData></BookingData>
            <p>Thank you for chosing us</p>
            <Link to={"/"} style={buttonStyle} className='nav-item'><button  style={buttonStyle}>Go Home</button></Link>
        </div>
    )
}

export default ConfirmedBooking;
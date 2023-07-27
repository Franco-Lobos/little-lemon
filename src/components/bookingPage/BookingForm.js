import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
  } from "@chakra-ui/react";


import * as Yup from 'yup';

import {submitAPI }from '../../utils/fetchData'

import { useState } from "react";
import { useFormik } from "formik";

import RejectedModal from './RejectedModal'

const BookingForm =({availableTimes, dispatchAvailableTimes})=>{

    const [rejected, setReejected] = useState(0);

    const formik = useFormik({
      initialValues: {resDate:'', resTime:'', guests:'', occasion:'',},

      onSubmit: values => {
        console.log(values)
        if(window.submitAPI(values)){
            window.localStorage.setItem('reservation', JSON.stringify(values))
            window.location.href = '/confirmed-booking';
        }
        else{
            setReejected(1);
        }
      },

      validationSchema: Yup.object({
            resDate: Yup.string().required("Required"),
            // resTime: Yup.number().min(17, 'Must be at least at 17:00').max(22, 'Must be at 22:00 or earlier').required("Required"),
            guests: Yup.number().min(1, 'Must be at least 1 person').max(10, 'Must be less than 10 person').required("Required"),
            occasion: Yup.string().matches(/birthday|anniversary/).required("Required"),
            resTime: Yup.string().required("Required"),
      }),
    });

    const addZero = num=>{
        if(num<10) return '0'+num;
        return num
    }

    const getTodayAsinput =() =>{
        const today = new Date();
        const returner = [today.getFullYear(), addZero(today.getMonth()+1), addZero(today.getDate())].join('-');
        return returner
    }

    return (
        <>
        {rejected
        ?
        <RejectedModal handleClose={()=>setReejected(0)}></RejectedModal>
        :""
        }
        <Box p={6} rounded="md" w="100%">
            <form
                className="form-main"
                onSubmit={e=>{
                    e.preventDefault();
                    formik.handleSubmit();
                }
            }>
                <h3 className="form-title">In order to book a table at Little Lemon restaurant, please let us knou...</h3>
                <FormControl
                    className={`form-field ${formik.errors.resDate ? "error" : ""}`}
                    isInvalid={formik.errors.resDate}
                    >
                    <FormLabel htmlFor="resDate"><h4>Choose date</h4></FormLabel>
                    <Input
                        id="resDate"
                        name="resDate"
                        type="date"
                        min={getTodayAsinput()}
                        {...formik.getFieldProps("resDate")}
                        onChange={e=>{
                            dispatchAvailableTimes({type:"addTimes", payload: e.target.value});
                            formik.handleChange(e);
                            }
                        }
                    />
                    <FormErrorMessage className="form-error">{formik.errors.resDate}</FormErrorMessage>
                </FormControl>

                <FormControl
                    className={`form-field ${formik.errors.resTime ? "error" : ""}`}
                    isInvalid={formik.errors.resTime}
                    >
                    <FormLabel htmlFor="resTime"><h4>Choose time</h4></FormLabel>
                    <Select id="resTime" name="resTime" 
                        {...formik.getFieldProps("resTime")}
                        placeholder="Choose Time..."
                        >
                        {availableTimes.map((time)=>
                            <option value={time}>{time}</option>
                        )}
                    </Select>
                    <FormErrorMessage className="form-error">{formik.errors.resTime}</FormErrorMessage>
                </FormControl>

                <FormControl
                    className={`form-field ${formik.errors.guests ? "error" : ""}`}
                    isInvalid={formik.errors.guests}
                    >
                    <FormLabel htmlFor="guests"><h4>Number of guests</h4></FormLabel>
                    <Input
                        id="guests"
                        name="guests"
                        min={1}
                        max={10}
                        {...formik.getFieldProps("guests")}
                    />
                    <FormErrorMessage className="form-error">{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl
                    className={`form-field ${formik.errors.occasion ? "error" : ""}`}
                    isInvalid={formik.errors.occasion}
                    >
                    <FormLabel htmlFor="occasion"><h4>Ocassion</h4></FormLabel>
                    <Select id="occasion" name="occasion"
                        {...formik.getFieldProps("occasion")}
                        placeholder="Choose Ocassion..."
                        >
                            {["birthday", "anniversary"].map((oc, indx)=>
                            <option value={oc}>{oc}</option>
                            )}
                    </Select>
                    <FormErrorMessage className="form-error">{formik.errors.occasion}</FormErrorMessage>
                </FormControl>

                <Button type="submit"  width="full" colorScheme="purple" className="button-form">
                    Book now
                </Button>
            </form>
        </Box>
        </>
    )
}

export default BookingForm;

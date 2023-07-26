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

import { useFormik } from "formik";

const BookingForm =({availableTimes, dispatchAvailableTimes})=>{

    const formik = useFormik({
      initialValues: {resDate:'', resTime:'', guests:'', occasion:'',},

      onSubmit: values => {
        console.log(values)
        if(window.submitAPI(values)){
            window.localStorage.setItem('reservation', values)
            window.location.href = '/confirmed-booking';
        }
        // submit("/",values);
      },

      validationSchema: Yup.object({
            resDate: Yup.string().required("Required"),
            // resTime: Yup.number().min(17, 'Must be at least at 17:00').max(22, 'Must be at 22:00 or earlier').required("Required"),
            guests: Yup.number().min(1, 'Must be at least 1 person').max(10, 'Must be less than 10 person').required("Required"),
            occasion: Yup.string().matches(/birthday|anniversary/)
      }),
    });

    const formStyle = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    }

    return (
        <Box p={6} rounded="md" w="100%">
            <form
                style={formStyle}
                onSubmit={e=>{
                    e.preventDefault();
                    formik.handleSubmit();
                }
            }>
                <FormControl
                    isInvalid={formik.errors.resDate}
                    >
                    <FormLabel htmlFor="resDate">Choose date</FormLabel>
                    <Input
                        id="resDate"
                        name="resDate"
                        type="date"
                        {...formik.getFieldProps("resDate")}
                        onChange={e=>{
                            dispatchAvailableTimes({type:"addTimes", payload: e.target.value});
                            formik.handleChange(e);
                            }
                        }
                    />
                    <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={formik.errors.resTime}
                    >
                    <FormLabel htmlFor="resTime">Choose time</FormLabel>
                    <Select id="resTime" name="resTime"
                        {...formik.getFieldProps("resTime")}
                        >
                        {availableTimes.map((time)=>
                            <option value={time}>{time}</option>
                        )}
                    </Select>
                    <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={formik.errors.guests}
                    >
                    <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <Input
                        id="guests"
                        name="guests"
                        min={1}
                        max={10}
                        {...formik.getFieldProps("guests")}
                    />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={formik.errors.occasion}
                    >
                    <FormLabel htmlFor="occasion">Ocassion</FormLabel>
                        <Select id="occasion" name="occasion"
                            {...formik.getFieldProps("occasion")}
                            >
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>

                <Button type="submit"  width="full" colorScheme="purple">
                    Book now
                </Button>
            </form>
        </Box>
    )
}

export default BookingForm;

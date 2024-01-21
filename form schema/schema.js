import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    accountType: Yup.string().required('Account type is required'),
  });

export default validationSchema;  
  
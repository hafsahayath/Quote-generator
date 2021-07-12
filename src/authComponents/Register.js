import React,{ useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { asyncRegisterUser } from '../actions/authActions'

const Register = (props) => {
    const register = useSelector(state=>state.auth.register)
    const { setShow } = props
    useEffect(()=>{
        if(register){
            props.history.push("/")
            setShow(true)
        }
    },[register])

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            username: Yup.string().max(15, 'Must be 15 characters or less').required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required')
        }),
        onSubmit:values=>{
            dispatch(asyncRegisterUser(values))
        }
    })

    return (
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input type="text" name="username" placeholder="enter the username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />  
                        {formik.touched.username && formik.errors.username ? <small>{formik.errors.username}</small> : null} 
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="enter your email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} /> <br />  
                        {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null}
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="enter your password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} /> <br />  
                        {formik.touched.password && formik.errors.password ? <small>{formik.errors.password}</small> : null}
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
    )
}

export default Register

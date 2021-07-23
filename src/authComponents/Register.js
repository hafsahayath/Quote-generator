import React,{ useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { asyncRegisterUser } from '../actions/authActions'

const Register = (props) => {
    const register = useSelector(state=>state.auth.register)

    const { onClose } = props
    
    useEffect(()=>{
        if(register){
            onClose()
            props.history.push("/")
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
            <div className="h-full flex justify-center pt-20">
                <form className="flex-col bg-pink-200 shadow-lg rounded-md pt-20 h-96 w-96" onSubmit={formik.handleSubmit}>
                    <div className="pl-10 m-2">
                        <input className="rounded-sm shadow-lg px-12 py-2 focus:outline-none focus:ring-2 focus:ring-pinkMain focus:border-transparent" type="text" name="username" placeholder="enter the username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange}/> <br />
                        {formik.touched.username && formik.errors.username ? <p className="text-xs text-red-800">{formik.errors.username}</p> : null} 
                    </div>
                    <div className="pl-10 m-2">
                        <input className="rounded-sm shadow-lg px-12 py-2 focus:outline-none focus:ring-2 focus:ring-pinkMain focus:border-transparent" type="text" name="email" placeholder="enter your email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} /> <br />
                        {formik.touched.email && formik.errors.email ? <p className="text-xs text-red-800">{formik.errors.email}</p> : null}
                    </div>
                    <div className="pl-10 m-2">
                        <input className="rounded-sm shadow-lg px-12 py-2 focus:outline-none focus:ring-2 focus:ring-pinkMain focus:border-transparent" type="password" name="password" placeholder="enter your password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} /> <br /> 
                        {formik.touched.password && formik.errors.password ? <p className="text-xs text-red-800">{formik.errors.password}</p> : null}
                    </div>
                    <div className="pl-32 pt-4">
                        <input className="btn bg-white text-pinkMain border-2 border-pinkMain hover:bg-pinkMain hover:text-white" type="submit" value="Register" />
                    </div>
                </form>
            </div>
    )
}

export default Register

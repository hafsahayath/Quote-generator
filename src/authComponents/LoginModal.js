import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { asyncLoginUser } from '../actions/authActions'
import '../styles/Modal.css'

const LoginModal = ({show, onClose, openModal}) => {
    const register = useSelector(state=>state.auth.register)
    const login = useSelector(state=>state.auth.login)
    const dispatch = useDispatch()

    const closeOnEscKey = (e) => {
        if((e.charCode || e.keyCode) === 27){
            onClose()
        }
    }

    useEffect(()=>{
        if(register){
            openModal()
        } 
        if(login){
            onClose()
        }
    },[register, login])

    useEffect(()=>{
        document.body.addEventListener('keydown',closeOnEscKey)
    },[])

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'password must be atleast 6 characters').required('Password is required')
        }),
        onSubmit:values=>{
            dispatch(asyncLoginUser(values))
        }
    })

    // if(!show) {
    //     return null
    // }

    return ReactDOM.createPortal(
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className={`modal flex ${show ? 'show' : ''}`} onClick={onClose}>
                <div className="modal-content bg-white-400 shadow-lg rounded-lg" onClick={(e)=>e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title text-pinkMain text-lg pt-2 text-white">Login</h4>
                    </div>
                    <div className="modal-body">
                        <div className="flex-col">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="pl-12">
                                    <input className="rounded-sm py-2 border-b-2 border-pinkMain px-12 focus:outline-none focus:border-transparent" type="text" name="email" placeholder="enter your email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} /> <br />
                                    {formik.touched.email && formik.errors.email ? <small className="text-red-800">{formik.errors.email}</small> : null}
                                </div>
                                <div className="pl-12 mt-2">
                                    <input className="rounded-sm py-2 border-b-2 border-pinkMain px-12 focus:outline-none focus:border-transparent" type="password" name="password" placeholder="enter your password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} /> <br />
                                    {formik.touched.password && formik.errors.password ? <small className="text-red-800">{formik.errors.password}</small> : null}
                                </div>
                                <div className="pl-36 mt-3">
                                    <input className="btn bg-white text-pinkMain border-2 border-pinkMain hover:bg-pinkMain hover:text-white" type="submit" value="Login" />
                                </div>
                            </form>
                            <div className="py-4 pl-28">
                                <h3 className="text-voilet-200">Don't have an account? <br /> <Link className="uppercase text-sm pl-8 py-3 px-2 text-pinkMain" to="/register">Register here</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button className="button" onClick={onClose}>close</button>
                    </div> */}
                </div>           
            </div>     
        </CSSTransition>, document.getElementById('root')
    )
}

export default LoginModal

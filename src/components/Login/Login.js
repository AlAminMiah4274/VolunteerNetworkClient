import React from 'react';
import logo from '../../assets/logos/Group 1329.png';
import google from '../../assets/logos/googlelogo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <Link to='/'>
                    <img src={logo} alt="" width={202} />
                </Link>
            </div>
            <div className='mt-5 w-50 mx-auto border p-5'>
                <h2 className='text-center fw-bold mb-3'>Login With</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 fw-bold' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='text-center'>or</p>
                <div className='border rounded-pill d-flex align-items-center w-50 mx-auto p-1 mt-4'>
                    <img src={google} alt="" width={30} />
                    <p className='mb-0 ms-5'>Continue with Google</p>
                </div>
                <p className='text-center mt-2'>Don't have an account? <Link to='/register'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logos/Group 1329.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {

    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, []);

    return (
        <div>
            <div className='text-center mt-4'>
                <Link to='/'>
                    <img src={logo} alt="" width={202} />
                </Link>
            </div>
            <div className='mt-5 w-50 mx-auto border p-5'>
                <h2 className='text-center mb-3'>Register as a Volunteer</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Control type="text" placeholder="Your full name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDate">
                        <Form.Control placeholder="Date" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control placeholder="Description" required />
                    </Form.Group>
                    <Form.Group controlId="formGroupSelect">
                        <Form.Select required>
                            <option>Choose your service</option>
                            {options.map(o => <option
                                key={o._id}
                            >{o.title}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Button className='w-100 mt-4' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;
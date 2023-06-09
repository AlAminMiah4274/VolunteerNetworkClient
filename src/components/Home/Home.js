import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from '../Shared/Header/Header';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className='mt-5'>
                <h1 className='text-center fw-bold'>I GROW BY HELPING PEOPLE IN NEED</h1>
                <InputGroup className="mt-3 w-25 mx-auto">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <Button className='fw-medium' variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;
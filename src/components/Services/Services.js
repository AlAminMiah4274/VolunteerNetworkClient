import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
import React from 'react';
import Card from 'react-bootstrap/Card';

const ServiceCard = ({ service }) => {

    const { img, title } = service;

    return (
        <Card className="text-center">
            <Card.Img variant="top" src={img} alt='' />
            <Card.Footer className="text-muted">{title}</Card.Footer>
        </Card>
    );
};

export default ServiceCard;
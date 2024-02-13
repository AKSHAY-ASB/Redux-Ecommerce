import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <>
            {products.map((product) => {
                const { id, title, category, price, image } = product;
                return (
                    <Link to={`product/${id}`} key={id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Title>{price}</Card.Title>
                                <Card.Text>{category}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                );
            })}
        </>
    );
};

export default ProductComponents;

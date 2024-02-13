import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';
import Card from 'react-bootstrap/Card';

export const ProductDetails = () => {

    const prod = useSelector((state => state.product));

    const { image, title, price, category, description } = prod;
    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log("productId", productId);

    const fetchProductDetail = async () => {
        const res = await axios
            .get(`https://fakestoreapi.com/products/${productId}`).
            catch(err => {
                console.log(err)
            });
        dispatch(selectedProducts(res.data))
    }


    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId])

    return (

        <div>
        {
            Object.keys(prod).length === 0 ? (
                <h1>.... Loading</h1>
            ) : (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
            )
        }

           
        </div>
    )
}

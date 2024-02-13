import { logDOM } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponents from './ProductComponents';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log("products", products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products").
        catch((err) => {
            console.log(err)
        });
        console.log("-----------------",res.data)
        dispatch(setProducts(res.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <div className='ui grid container'>
            <ProductComponents />
        </div>
    )
}

export default ProductListing

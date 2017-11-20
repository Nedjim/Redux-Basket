import React from 'react';
import Product from './Product.jsx';
import data from '../data/products.json';

const Products = () => (
    <div id='products'>
        {data.products.map( e => (
             <Product key={e.id} product={e}/>
        ))}
    </div>
)

export default Products;
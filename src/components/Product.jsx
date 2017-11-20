import React from 'react';
import playIcon from '../icons/play.png';

const Product = (props) => (
    <div className='product'>
        <div className='box-image'>
            <img className='album-img' src={props.product.img} alt={props.product.artist + " " + props.product.title}/>
            <img className='play-icon' src={playIcon} alt='Play icon'/>
        </div>
        <div className='details'>
            <p><strong>{props.product.artist}</strong></p>
            <p className='title'>{props.product.title}, {props.product.date}</p>
            <div className='shop'>
                <p>{props.product.price} €</p>
                <div>
                    <input type='text' value='1'/>
                    <input type='button' value='Ajouter au panier' className='btn btn-primary btn-sm'/>
                </div>
            </div>
        </div>
    </div>
)

export default Product;
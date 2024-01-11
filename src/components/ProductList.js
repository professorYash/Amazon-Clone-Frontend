import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../data/data';
import '../styles/ProductList.css';
import Product from './Product';
import { listProducts } from '../actions/ProdcutActions';

const ProductList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home-product-container">
      <>
        <h2 className="sec-title">Products</h2>
        <div className="product-container">
          {data.map((product) => {
            return (
              <Product key={product.id} product={product} />
            );
          })
          }
        </div>
      </>
    </div>


  );
};

export default ProductList;
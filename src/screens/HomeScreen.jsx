import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const display = loading ? <Loader />
    : (
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    );

  return (
    <>
      <h1>Latest Product</h1>
      {error ? (
        <Message>{error}</Message>

      ) : display}

    </>
  );
};
export default HomeScreen;

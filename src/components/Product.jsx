import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
  <Card className="my-3 p-3 rounded">
    <Link to={`/product/${product.id}`}>
      <Card.Img src={product.image} variant="top" />
    </Link>
    <Card.Body>
      <Link to={`/product/${product.id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <div className="my-3">
          {product.rating}
          {' '}
          Date Published:
          {' '}
          {product.date}
        </div>
      </Card.Text>
      <Card.Text as="h3">
        €
        {product.price}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Product;

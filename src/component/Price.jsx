import product from '../product';

const Price = () => {
  return (
    <>
      {product.map((item, index) => (
        <p>{item.price}</p>
      ))}
    </>
  );
};

export default Price;

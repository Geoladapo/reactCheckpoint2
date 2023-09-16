import products from '../product';

const Description = () => {
  return (
    <div>
      {products.map((item, index) => (
        <p>{item.description}</p>
      ))}
    </div>
  );
};

export default Description;

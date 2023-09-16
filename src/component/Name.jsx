import products from '../product';

const Name = () => {
  return (
    <div>
      {products.map((item, index) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default Name;

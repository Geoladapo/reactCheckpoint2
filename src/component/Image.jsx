import products from '../product';

const Image = () => {
  return (
    <div>
      {products.map((item, index) => (
        <img src={item.image} />
      ))}
    </div>
  );
};

export default Image;

import Image from './component/Image';
import Name from './component/Name';
import Description from './component/Description';
import Price from './component/Price';

export default function App() {
  return (
    <>
      <Card />
      <p className="text-center">Hello Elijah</p>
    </>
  );
}

function Card() {
  return (
    <div className="max-w-[500px] my-10 mx-auto shadow-2xl rounded-lg">
      <Image />
      <div className="text-center w-[80%] mx-auto flex flex-col gap-5">
        <Name />
        <Description />
        <Price />
      </div>
    </div>
  );
}

import { useEffect, useState, useRef } from "react";
import img1 from "../assets/bodypage_caraousel/img1.jpg";
import img2 from "../assets/bodypage_caraousel/img2.jpg";
import img3 from "../assets/bodypage_caraousel/img3.jpg";
import img4 from "../assets/bodypage_caraousel/img4.jpg";
import img5 from "../assets/bodypage_caraousel/img5.jpg";
import LeftArrowCarousel from "./LeftArrowCarousel";
import RightArrowCarousel from "./RightArrowCarousel";

const BodypageCarousel = () => {
  const imgArr = [img1, img2, img3, img5];

  const [index, setIndex] = useState(0);
  const image = useRef(null);

  const [currOpacity, setCurrOpacity] = useState(1);

  // useEffect(() => {
  //   // setCurrOpacity(image.current.style.opacity);

  //   const intervalId = setInterval(() => {
  //     // console.log("Reduce the opacity");

  //     setIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
  //     // console.log(image.current);
  //     // console.log("Increase the opacity");
  //   }, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setTimeout(() => {
  //     setIndex((prevIndex) =>
  //       prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2500);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [index]);

  return (
    <>
      {/* <div className="absolute" style={{
        transition: "ease-in 1000"
      }}>
        <img
          src={imgArr[index]}
          alt="images"
          className="w-screen h-[32rem] object-cover"
          ref={image}
          style={{
            transition: "ease 1000ms"
          }}
        />
      </div> */}

      {/* <div className="absolute bg-black w-screen flex justify-center">
        {imgArr.map((img, idx) => {
          return idx === index ? (
            <div key={img}>
              <img
                src={img}
                alt="images"
                className="w-[75rem] h-[35rem] rounded-lg"
                ref={image}
                style={{
                  transition: "ease 1000ms",
                }}
              />
            </div>
          ) : null;
        })}
      </div>
      <LeftArrowCarousel arr={imgArr} setIndex={setIndex} />
      <RightArrowCarousel arr={imgArr} setIndex={setIndex} /> */}
      <div className="LandingPage w-96 h-96 relative">
        <div className="Rectangle1 w-96 h-96 left-0 top-0 absolute bg-black bg-opacity-20 border border-black" />
        <div className="MaskGroup w-96 h-96 left-[249px] top-0 absolute">
          <div className="Rectangle3 w-96 h-96 left-0 top-0 absolute bg-zinc-300" />
        </div>
        <div className="Rectangle4 w-96 h-96 left-0 top-0 absolute bg-gradient-to-r from-zinc-800 via-stone-900 to-stone-900" />
        <div className="Rectangle5 w-96 h-96 left-[268px] top-0 absolute bg-gradient-to-r from-zinc-800 to-zinc-800" />
        <div className=" left-[138px] top-[277px] absolute text-white text-7xl font-medium font-['Inknut Antiqua']">
          || हर हर महादेव ||
          <br />
          || ॐ नमः शिवाय ||
        </div>
      </div>
    </>
  );
};

export default BodypageCarousel;

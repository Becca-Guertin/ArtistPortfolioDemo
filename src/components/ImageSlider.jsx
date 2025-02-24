import { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "../assets/css/style.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/MultiPlanetBabe_1.PNG",

    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/697FFE83-2969-4C17-B6DC-966D55B959F0.JPG",

    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/A986051F-4A0C-48D6-A256-DED1D52CFA8C.JPG",
  ];
  useEffect(() => {
    const next = () => {
      setIndex((i) => (i + 1) % images.length);
    };

    const timer = setInterval(next, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [images.length]); // Dependency only on images.length

  return (
    <img
      className="shadow roundCorners"
      src={images[index]}
      alt=""
      style={{
        maxHeight: 500,
        maxWidth: "auto",
        marginBottom: 40,
      }}
    />
  );
};

export default ImageSlider;

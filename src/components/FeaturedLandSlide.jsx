import { useEffect, useState } from "react";
import "../assets/css/style.css";

const FeaturedLandSlide = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/WhiteBangRainbowBriteTexture.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/ClownBabeTexture.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/StrawbbcremeGalaxyB%26Wtex.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/QueenOfHeartBabeTex.png",
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/BlueRedGirltex.png",
    "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AlienConeFlowerHeadTex.PNG",
    "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Purple5thElementOperaBabeTex.png",
    "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/CloudGalaxyBabeTex.png",
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
      className="shadow roundCorners1 zoom"
      src={images[index]}
      alt=""
      style={{
        maxHeight: 390,
        maxWidth: "auto",
        marginBottom: 40,
      }}
    />
  );
};

export default FeaturedLandSlide;

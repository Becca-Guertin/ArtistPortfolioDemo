import { useState } from "react";
import { Link } from "react-router-dom";
import Modal6 from "./modals/Modal6";
import sunpopFlower from "../assets/images/icons/siteFlowerIcon.png";
import heart2 from "../assets/images/Image from iOS (heart2).png";
import ImageSlider from "../components/ImageSlider";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import FeaturedLandSlide from "../components/FeaturedLandSlide";
import "../assets/css/index.css";
import "../assets/css/style.css";

const Landing = () => {
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const fruityBabes = {
    pink: "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/pink.png",
    stripes:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/stripes.png",
    featuredFont:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/FeaturedColorText2Crop.png",
  };

  const handleClick3 = () => {
    setIsModalOpen3(true);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${fruityBabes.pink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        padding: "2rem 0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
      }}
    >
      <Grid2
        container
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        <Grid2
          container
          direction="row"
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid2 item>
            <img
              src={heart2}
              style={{ maxHeight: 100, maxWidth: 100 }}
              alt=""
            />
          </Grid2>
          <Grid2 item>
            <Link to="/about" title="click for more info about me!">
              <img
                className="zoom logo"
                src={sunpopFlower}
                style={{ maxHeight: 300, maxWidth: 300 }}
                alt=""
              />
            </Link>
          </Grid2>
          <Grid2 item>
            <img
              src={heart2}
              style={{ maxHeight: 100, maxWidth: 100 }}
              alt=""
            />
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid2 item>
            <img
              className="shadow roundCorners zoom"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Bending+backwards_NoBckg2.jpg"
              }
              style={{ maxWidth: 300, maxHeight: 500 }}
            />
          </Grid2>
          <Grid2 item className="justify-content-flex-end">
            <Box>
              <img
                className=" shadow roundCorners zoom"
                style={{ maxWidth: 350, maxHeight: 550 }}
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SunPopShop+logo.png"
                }
              ></img>
            </Box>
          </Grid2>
          <Grid2 item>
            <Box>
              <img
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SunpopShapesNPeople.PNG"
                }
                style={{ maxWidth: 300, maxHeight: 500 }}
                className="shadow roundCorners zoom"
              />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 item>
            <img
              src={fruityBabes.featuredFont}
              style={{ maxHeight: 285, maxWidth: 385 }}
            ></img>
          </Grid2>

          <Grid2 item>
            <FeaturedLandSlide />
          </Grid2>
        </Grid2>

        <Grid2
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={4}
        >
          <Grid2 item>
            <Box>
              <ImageSlider />
            </Box>
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={6}
        >
          <Grid2
            container
            className="shadow"
            style={{
              backgroundImage: "url(" + fruityBabes.stripes + ")",
              padding: 80,
            }}
          >
            <Grid2 item>
              <Link to="/Collections/Alienbabes">
                <div className="box">
                  <img
                    className="shadow roundCorners image"
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-alienSoulSister.PNG"
                    }
                    style={{
                      //   marginTop: 30,
                      //   marginLeft: 20,
                      height: "auto",
                      width: "auto",
                      maxHeight: 370,
                      maxWidth: 370,
                    }}
                  ></img>
                  <div className="middle">
                    <div className="text">click to see more like me!</div>
                  </div>
                </div>
              </Link>
            </Grid2>

            <Grid2 item>
              <Modal6 open={isModalOpen3} setIsModalOpen={setIsModalOpen3} />
              <div className="box hoverHand" onClick={handleClick3}>
                <img
                  className="image btn shadow roundCorners"
                  src={
                    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/girls/blueBerry2.PNG"
                  }
                  style={{
                    // marginTop: 30,
                    // marginLeft: 20,
                    height: "auto",
                    width: "auto",
                    maxHeight: 370,
                    maxWidth: 370,
                  }}
                />
                <div className="middle">
                  <div className="text hoverHand">click me</div>
                </div>
              </div>
            </Grid2>
            <Grid2 item>
              <Link to="/Collections/Alienbabes">
                <Box>
                  <img
                    className="shadow roundCorners image"
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/girls/strawberry2.PNG"
                    }
                    style={{
                      //   marginTop: 30,
                      //   marginLeft: 20,
                      height: "auto",
                      width: "auto",
                      maxHeight: 370,
                      maxWidth: 370,
                    }}
                  ></img>
                  <div className="middle">
                    <div className="text">click to see more like me!</div>
                  </div>
                </Box>
              </Link>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Landing;

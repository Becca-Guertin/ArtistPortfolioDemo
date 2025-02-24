import { useState } from "react";
import SunPopIlloTemplate from "../components/SunPopIlloTemplate";
import Modal2 from "../components/Modals/Modal2";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";

const SunPop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSunPopIllo, setCurrentSunPopIllo] = useState();

  const sunPopIllos = {
    sunPops: [
      {
        id: 1,
        title: "My Heart Remix, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-myHeartRevamp.PNG",
      },
      {
        id: 2,
        title: "Dining Room Chest Hair, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-BabetteChestStars2.PNG",
      },
      {
        id: 3,
        title: "We Match Remix, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-WeMatchClose.PNG",
      },
      {
        id: 4,
        title: "Alien Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-alienStripes.png",
      },
      {
        id: 5,
        title: "Celebrate New Challenges, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-celebrateNewChallenges.PNG",
      },
      {
        id: 6,
        title: "Everything Means Nothing, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/EverythingMeansNothing.PNG",
      },
      {
        id: 7,
        title: "Love You To Death Remix, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-love2death.PNG",
      },
      {
        id: 8,
        title: "Retro 70's Logo/Watermark, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SunPopLogoStampOG.png",
      },

      {
        id: 9,
        title: "Galaxy Logo/Watermark 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Sun+pop+logo+stamp_galaxyC.png",
      },
      {
        id: 10,
        title: "Retro 70's Logo/Watermark, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Krafty-Kuts-green+logo+stamp.png",
      },
      {
        id: 11,
        title: "You're Alive, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/DE0A4174-6922-4D78-97C8-D40DB7961115.JPG",
      },
      {
        id: 12,
        title: "Galaxy Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/3032E53F-88DC-4052-BC72-98A834F987A9.JPG",
      },
    ],
    background:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/SiteBackGround.PNG",
  };

  const mapSunPopIllos = (sunPop) => {
    return (
      <SunPopIlloTemplate
        key={`SunPopIllos-${sunPop.id}`}
        sunPop={sunPop}
        handleClick={handleClick}
        imageUrl={sunPopIllos.sunPops.imageUrl}
        title={sunPopIllos.sunPops.title}
      />
    );
  };

  const handleClick = (e, res) => {
    console.log(e, res);
    let sunPop = e.imageUrl;
    setIsModalOpen(true);
    setCurrentSunPopIllo(sunPop);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${sunPopIllos.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Modal2
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          initialValue={currentSunPopIllo}
          style={{ marginTop: 50 }}
        />
        {sunPopIllos.sunPops.map(mapSunPopIllos)}
      </Grid2>
    </Box>
  );
};

export default SunPop;

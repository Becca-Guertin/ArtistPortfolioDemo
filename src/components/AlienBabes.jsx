import Grid2 from "@mui/material/Grid2";
import { Box } from "@mui/material";
import AlienBabeTemp from "./AlienBabeTemp";
import "../assets/css/style.css";

const AlienBabes = () => {
  const alienBabes = {
    babes: [
      {
        id: 0,
        title: "Alien Conehead Babe, June 2021",
        imageUrl:
          "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/AlienConeFlowerHeadTex.PNG",
      },
      {
        id: 1,
        title: "Elfy Alien Galaxy Babe, June 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/BlueRedGirltex.png",
      },
      {
        id: 2,
        title: "Queen of Hearts Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/QueenOfHeartBabeTex.png",
      },
      {
        id: 3,
        title: "Smurfy Rainbow Brite Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/WhiteBangRainbowBriteTexture.png",
      },

      {
        id: 4,
        title: "Sad Clown Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/ClownBabeTexture.png",
      },
      {
        id: 5,
        title: "Head in the Clouds Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/CloudGalaxyBabeTex.png",
      },
      {
        id: 6,
        title: "",
        imageUrl:
          "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/Purple5thElementOperaBabeTex.png",
      },
      {
        id: 7,
        title: "Galaxy Rainbow Strawberry Creme Babe, 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/StrawbbcremeGalaxyB%26Wtex.png",
      },

      {
        id: 8,
        title: "2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp_upCloseStrawBabe.PNG",
      },
      {
        id: 9,
        title: " 2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/girls/blueBerry2.PNG",
      },

      {
        id: 10,
        title: "2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-alienSoulSister.PNG",
      },
      {
        id: 11,
        title: "2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-alienStripesGalaxy.png",
      },

      {
        id: 12,
        title: "2021",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/0C4AE941-836E-4A5A-BCBD-9BB90C555A6C.JPG",
      },
      {
        id: 13,
        title: "",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Bewitched90sgalaxyBabeTex.png",
      },
      {
        id: 14,
        title: "",
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/CloudSittingBabeOrangeTex.png",
      },
    ],
    background:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/PurpleGalaxyBackGroundHorizontal.png",
  };

  const mapFruityBabes = (babe) => {
    return (
      <AlienBabeTemp
        key={`FruitBabes-${babe.id}`}
        babe={babe}
        imageUrl={alienBabes.babes.imageUrl}
        title={alienBabes.babes.title}
      />
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${alienBabes.background})`,
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
        style={{ marginTop: 50 }}
      >
        {alienBabes.babes.map(mapFruityBabes)}
      </Grid2>
    </Box>
  );
};

export default AlienBabes;

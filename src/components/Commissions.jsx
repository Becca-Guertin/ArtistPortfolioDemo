import { Box } from "@mui/material";
import CommishTemp from "./CommishTemp";
import Grid2 from "@mui/material/Grid2";

const Commissions = () => {
  const hazardsHijinks =
    "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GalacticPeriwinkleHornsYellowB.png";

  const commissions = {
    commish: [
      {
        id: 1,
        imageUrl: hazardsHijinks,
        title: "Hazards and Hijinks: Logos and Banners, 2021",
      },
      {
        id: 2,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/clownCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 3,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/fallingCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 4,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/hauntmeCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 5,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/iguessitsokCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 6,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/thistimeurrightCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 7,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/unwindCS.jpg",
        title: "Crime Spree in Candyland: The Grand Design, 2020",
      },
      {
        id: 8,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Tiff%26mike_2_wbkgdColor2.jpg",
        title: "Custom Couple Portrait, 2020",
      },

      {
        id: 9,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Tiff%26mike_2_B%26Winverse.png",
        title: "Custom Couple Portrait, 2020",
      },
      {
        id: 10,
        imageUrl:
          "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-atty2.png",
        title: "Custom Pup Portrait, 2021",
      },
    ],

    background:
      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/uprightFramedBG.JPG",
  };

  const mapCommissions = (commission) => {
    return (
      <CommishTemp
        key={`FruitBabes-${commission.id}`}
        commission={commission}
        imageUrl={commissions.commish.imageUrl}
        title={commissions.commish.title}
      />
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${commissions.background})`,
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
        spacing={2}
      >
        <Grid2 item className="justify-content-flex-start"></Grid2>

        {commissions.commish.map(mapCommissions)}
      </Grid2>
    </Box>
  );
};

export default Commissions;

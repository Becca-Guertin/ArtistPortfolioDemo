import PropTypes from "prop-types";
import Grid2 from "@mui/material/Grid2";
import "../assets/css/style.css";

const AlienBabeTemp = (props) => {
  return (
    <Grid2 item>
      <img
        style={{
          height: "auto",
          width: "auto",
          maxHeight: 475,
          maxWidth: 290,
          marginBottom: 30,
        }}
        src={props.babe.imageUrl}
        className="roundCorners shadow zoom"
        alt="..."
      ></img>
      <h3 style={{ fontFamily: "Brush Script MT" }} className="text-black"></h3>
    </Grid2>
  );
};

AlienBabeTemp.propTypes = {
  babe: PropTypes.shape({
    id: PropTypes.int,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default AlienBabeTemp;

import PropTypes from "prop-types";
import { Card, CardContent,  } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import "../assets/css/style.css";

const SunPopIlloTemplate = (props) => {
  const onHandleClick = () => {
    props.handleClick(props.sunPop);
  };

  return (
<Grid2 item>
      <Card className="card-box-hover-rise mb-4 justify-content-center" padding="10px">
        <CardContent className="p-3 justify-center">
          <div className="bt" onClick={onHandleClick}>
            <div className="box">
              <img
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: 475,
                  maxWidth: 290,
                  marginBottom: 30,
                }}
                src={props.sunPop.imageUrl}
                className="image rounded"
                alt="..."
              ></img>
              <h3
                style={{ fontFamily: "Brush Script MT" }}
                className="text-black"
              ></h3>
              <div className="middle">
                <div className="text">{props.sunPop.title}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </Grid2>
  );
};

SunPopIlloTemplate.propTypes = {
  sunPop: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default SunPopIlloTemplate;

import PropTypes from "prop-types";
import { Card, CardContent,  } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import "../assets/css/style.css";

const CommishTemp = (props) => {
  return (
      <Grid2 item>
        <Card className="card-box-hover-rise mb-4 justify-content-center shadow">
          <CardContent className="p-3 justify-center">
            <div className="bt text-black">
              <div className="box zoom">
                <img
                  style={{
                    height: "auto",
                    width: "auto",
                    maxHeight: 600,
                    maxWidth: 400,
                    marginBottom: 30,
                  }}
                  src={props.commission.imageUrl}
                  className="image rounded"
                  alt="..."
                ></img>
                <h3
                  style={{ fontFamily: "Brush Script MT" }}
                  className="text-black"
                ></h3>
                <div className="middle">
                  <div className="text">{props.commission.title}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid2>
  );
};

CommishTemp.propTypes = {
  commission: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default CommishTemp;

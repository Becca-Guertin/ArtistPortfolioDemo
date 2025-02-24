
import { IconButton, Paper } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Tooltip } from "@mui/material";
import github from "../assets/images/icons/github.png";
import instagram from "../assets/images/icons/instagram.png";
import linkedin from "../assets/images/icons/linkedin.png";
import sunpopFlower from "../assets/images/siteFlowerIcon.png";
import clsx from "clsx";
import PropTypes from "prop-types";

const Footer = (props) => {
  const { footerShadow, sidebarToggle, footerFixed } = props;
  const etsy =
    "https://wallpapers.com/images/hd/etsy-logo-image-cr2ahcom6umkml87-2.png";
  return (

      <Paper
      elevation={footerShadow ? 11 : 2}
      className={clsx("app-footer text-black-50", {
        "app-footer--fixed": footerFixed,
        "app-footer--fixed__collapsed": sidebarToggle,})}
      >
        <Grid2
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: 20 }}
        >
          {/* <Grid item></Grid>
          <Grid item></Grid> */}
          <Grid2 item>
            <div className="row" style={{ marginBottom: 25, marginLeft: 10 }}>
              <Tooltip arrow title="Etsy">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://www.etsy.com/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      src={etsy}
                    />
                  </span>
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Github">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://github.com/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      src={github}
                    />
                  </span>
                </IconButton>
              </Tooltip>
              <IconButton href="/" title="SunPopShop">
                <img
                  className="rounded"
                  src={sunpopFlower}
                  style={{ maxHeight: 35, maxWidth: 35 }}
                ></img>
              </IconButton>
              <Tooltip arrow title="LinkedIn">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://www.linkedin.com/in/rebecca-guertin/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      src={linkedin}
                    />
                  </span>
                </IconButton>
              </Tooltip>

              <Tooltip arrow title="Instagram">
                <IconButton
                  className="nav-link text-white text-bold"
                  href="https://www.instagram.com/sunflowerpopshop/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="btn-wrapper--icon">
                    <img
                      style={{
                        height: 50,
                        width: 50,
                      }}
                      src={instagram}
                    />
                  </span>
                </IconButton>
              </Tooltip>
            </div>
          </Grid2>
        </Grid2>
      </Paper>
  );
};

// Define PropTypes
Footer.propTypes = {
    footerShadow: PropTypes.bool.isRequired,
    sidebarToggle: PropTypes.bool.isRequired,
    footerFixed: PropTypes.bool.isRequired,
  };

export default Footer;
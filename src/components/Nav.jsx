import { useState } from "react";
import instagram from "../assets/images/icons/instagram.png";
import sunpop from "../assets/images/icons/siteFlowerIcon.png";
import github from "../assets/images/icons/github.png";
import linkedin from "../assets/images/icons/linkedin.png";
import {
  IconButton,
  Tooltip,
  Fab,
  Drawer,
  ListItem,
  List,
  Divider,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";

import { Link } from "react-router-dom";
import "../assets/css/index.css";
import "../assets/css/style.css";

const Nav = () => {
  const [state, setState] = useState({
    right: false,
    display: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const about =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/AboutText.png";

  const collectionsFont =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/CollectionsText.png";

  const commissions =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/CommissionsText.png";

  const alienBabes =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/AlienBabesText.png";

  const otherIllos =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/OtherIllos.png";

  const etsy =
    "https://wallpapers.com/images/hd/etsy-logo-image-cr2ahcom6umkml87-2.png";

  const multi1 =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png";
  const multi2 =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/MultiColorFlowerStamp2.png";

  return (
    <Grid2
      container
      direction="row"
      alignItems="center"
      spacing={4}
      className="navBar"
      style={{ backgroundColor: "white" }}
      paddingBottom={3}
      paddingTop={3}
    >
      <Grid2 item>
        <Fab
          title="menu"
          style={{ marginTop:"10px", marginLeft: "45px"}}
          onClick={toggleDrawer("right", true)}
          color="secondary"
          size="medium"
          alt="View More"
        ></Fab>
      </Grid2>
      <Grid2 item>
        <Link to="/" title="SunPopShop">
          <i>
            <img
            //   className="round"
              alt="SunPopShop"
              src={sunpop}
              style={{ height: 75, width: 75, marginTop: 10 }}
            />
          </i>
        </Link>
      </Grid2>
      <Drawer
        style={{ marginRight: 20, marginTop: 10, padding: 50 }}
        variant="temporary"
        anchor="left"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        elevation={11}
      >
        <List className="py-0">
          <ListItem className="d-block bg-secondary py-2 px-3">
            <div
              className="d-flex w-100 justify-content-between navbar-light align-content-center"
              style={{ marginRight: 20, marginTop: 10 }}
            >
              <Grid2 item>
                <div className="nav-logo">
                  <Link to="/" title="SunPopShop">
                    <i className="bg-white">
                      <img
                        alt="SunPopShop"
                        src={sunpop}
                        style={{
                          height: 100,
                          width: 100,
                          marginLeft: 90,
                          marginBottom: 10,
                        }}
                      />
                    </i>
                  </Link>
                </div>
              </Grid2>
              <Grid2 item>
                <div
                  className="row"
                  style={{ marginBottom: 25, marginLeft: 30 }}
                >
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
                  <Tooltip arrow title="LinkedIn">
                    <IconButton
                      className="nav-link text-white text-bold"
                      href="https://www.linkedin.com/"
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
                      href="https://www.instagram.com"
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
            </div>
          </ListItem>
          <Divider />
          <ListItem className="d-block py-3 px-2">
            <Link
              title="about"
              to="/about"
              className="d-flex px-2 align-items-center dropdown-item rounded"
              style={{
                color: "black",
                fontSize: 47,
                fontFamily: "Brush Script MT",
              }}
            >
              <div className="align-box-row w-100">
                {/* <div className="mr-3">
                  <div className="bg-strong-bliss text-center text-white d-40 rounded-circle"></div>
                </div> */}
                <div className="text-truncate max-w-70 overflow-hidden">
                  <div
                    className="font-weight-bold text-primary d-block"
                    style={{ textAlign: "center" }}
                  >
                    <i className="bg-white">
                      <img
                        alt=""
                        src={multi2}
                        style={{ height: 60, width: 60, marginRight: 20 }}
                      />
                    </i>
                    <img
                      src={about}
                      style={{ maxHeight: 100, maxWidth: 115 }}
                    ></img>
                  </div>
                  <span className="text-black-50"></span>
                </div>
              </div>
            </Link>
          </ListItem>
          <Divider />
          <ListItem className="d-block py-3 px-2">
            <div
              className="dropdown"
              style={{
                color: "black",
                fontSize: 45,
                fontFamily: "Brush Script MT",
              }}
            >
              <div className="btn dropdown-toggle">
                <i className="bg-white">
                  <img
                    alt=""
                    src={multi1}
                    style={{ height: 60, width: 60, marginRight: 20 }}
                  />
                </i>
                <img
                  src={collectionsFont}
                  style={{ maxHeight: 100, maxWidth: 185 }}
                ></img>
              </div>
              <Divider />
              <div className="container">
                <div className="row">
                  <div className="col">
                    <i className="bg-white">
                      <img
                        alt=""
                        src={sunpop}
                        style={{
                          height: 35,
                          width: 35,
                          marginRight: 20,
                          marginTop: 10,
                          marginLeft: 25,
                        }}
                      />
                    </i>
                    <Link
                      title="commissions"
                      to="/Collections/Commissions"
                      style={{
                        fontSize: 35,
                        color: "black",
                        marginBottom: 10,
                      }}
                    >
                      <img
                        src={commissions}
                        style={{
                          maxHeight: 100,
                          maxWidth: 155,
                        }}
                      ></img>
                    </Link>
                  </div>
                  <div className="col">
                    <i className="bg-white">
                      <img
                        alt=""
                        src={sunpop}
                        style={{
                          height: 35,
                          width: 35,
                          marginRight: 20,
                          marginTop: 10,
                          marginLeft: 25,
                        }}
                      />
                    </i>
                    <Link
                      title="alien babes"
                      to="/Collections/AlienBabes"
                      style={{
                        fontSize: 35,
                        color: "black",
                        marginBottom: 10,
                      }}
                    >
                      <img
                        src={alienBabes}
                        style={{
                          maxHeight: 85,
                          maxWidth: 135,
                        }}
                      ></img>
                    </Link>
                  </div>
                  <div className="col">
                    <i className="bg-white">
                      <img
                        alt=""
                        src={sunpop}
                        style={{
                          height: 35,
                          width: 35,
                          marginRight: 20,
                          marginLeft: 25,
                        }}
                      />
                    </i>
                    <Link
                      title="other illos"
                      to="/Collections/OtherIllos"
                      style={{
                        fontSize: 35,
                        color: "black",
                        marginBottom: 10,
                      }}
                    >
                      <img
                        src={otherIllos}
                        style={{ maxHeight: 85, maxWidth: 120 }}
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </Grid2>
  );
};

export default Nav;

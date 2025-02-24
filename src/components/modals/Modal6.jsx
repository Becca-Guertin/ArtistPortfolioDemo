import React from "react";
import "../../assets/css/modal.css";
import { Modal } from "@mui/material";
import PropTypes from "prop-types";

const Modal6 = ({ setIsModalOpen, open }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className="container justify-content-center">
        <Modal open={open} onClose={handleClose}>
          <img
            src={
              "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-blueGirlStars.PNG"
            }
            style={{
              maxHeight: 600,
              maxWidth: 600,
            }}
          />
        </Modal>
      </div>
    </React.Fragment>
  );
};

Modal6.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal6;

import "../../assets/css/modal.css";
import { Modal } from "@mui/material";
import Grid from "@mui/material/Grid2";

import PropTypes from "prop-types";

const Modal2 = ({ initialValue, setIsModalOpen, open }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Grid container justify="center" direction="row" alignItems="center">
      <Modal open={open} onClose={handleClose}>
        <Grid container justify="space-evenly">
          <Grid item>
            <img
              src={initialValue}
              style={{
                // marginTop: 100,
                // marginLeft: 800,
                maxHeight: 600,
                maxWidth: 600,
              }}
            />
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
};

Modal2.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  initialValue: PropTypes.shape({
    imageUrl: PropTypes,
  }),
};

export default Modal2;

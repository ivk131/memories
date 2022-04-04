import React from "react";
import { Snackbar } from "@material-ui/core";
// import { alpha } from "@material-ui/core/styles";

import Alert from "@material-ui/lab/Alert";
const Notification = (props) => {
  const { notify, setNotify } = props;

  const handleClose = () => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };
  return (
    <>
      <Snackbar
        style={{ marginTop: "56px" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={notify.isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notify.type}
          sx={{ width: "100%" }}
        >
          {notify.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;

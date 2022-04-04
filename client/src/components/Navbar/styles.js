import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 10),
    marginBottom: theme.spacing(3),
  },
  heading: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    // color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    margin: "0 8px",
  },
  brandContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    marginLeft: "24px",
    textTransform: "capitalize",
  },
  signIn: {
    fontSize: "14px",
    padding: "8px 24px",
    textTransform: "capitalize",
  },
}));

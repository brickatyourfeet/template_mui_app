import React, { useState } from "react";
import axios from "axios";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import Head from "next/head";
import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/ctabg0.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em", //for lifting / aligning background -- may change this based on bg
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/nettle-mobile.jpg")`,
      filter: "grayscale(100%)", //let's goooooooooooooo
    },
  },
  consultationButton: {
    ...theme.typography.consultation,
    borderRadius: 50,
    height: 80,
    width: 205,
    //backgroundColor: "theme.palette.common.red",
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      fontColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: "1rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid black`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.consultation,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 205,
      //change these to relative sizes if needed
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const onChange = (event) => {
    let valid;
    //can add more cases to this switch statement if fields are added - just maintain the id values
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        !valid
          ? setEmailHelper("Please enter valid Email Address")
          : setEmailHelper(""); //using empty string to have error length of 0
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);

    axios
      .get("https://us-central1-rainier-elixirs.cloudfunctions.net/sendMail", {
        params: {
          email: email,
          name: name,
          //phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setAlert({ open: true, color: "#4BB543" }); //change these colors, and extract to theme at some point
        setAlertMesssage("Message sent successfully!");
        //console.log(email, name, phone, message); //for testing
        console.log(email, name, message);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" }); //change these colors, and extract to theme at some point
        setAlertMesssage("Error sending message. Please try again.");
        //should maybe send error email to biz/support email to see potential errors?
        console.error(err);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </React.Fragment>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Placeholder</title>
        <meta name="description" key="description" content="Placeholder" />
        <meta property="og:title" content="Placeholder" key="og:title" />
        <meta property="og:url" key="og:url" content="Placeholder.com" />
        <link rel="canonical" key="canonical" href="Placeholder.com" />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
          backgroundImage: `url("Placeholder.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ paddingTop: matchesXS ? "5em" : null }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: "black", textShadow: "1px 1px black" }}
              >
                Placeholder
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{
                  color: "black",
                  textShadow: "1px 1px black",
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                }}
              >
                (Placeholder)
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="Placeholder.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    textShadow: "1px 1px black",
                  }}
                >
                  <a
                    href="tel:Placeholder" //could get rid of this to have no mobile clickability
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      textShadow: "1px 1px black",
                    }}
                  >
                    Placeholder
                  </a>
                </Typography>{" "}
                {/** add social media icons / info too? */}
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    textShadow: "1px 1px black",
                  }}
                >
                  <a
                    href="mPlaceholder@this.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Placeholder
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}></Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }} //this disables the underline on the base input component
                value={message}
                className={classes.message}
                multiline
                fullWidth
                rows={8}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }} //to have modal over the app bar z index
        open={open}
        fullScreen={matchesSM} //takes up entire screen if on phone
        onClose={() => setOpen(false)}
        PaperProps={{
          //passing style down to the 'paper' component
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "11em"
              : "15em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "11em"
              : "15em",
            //double check above styles with different devices, add more media queries if needed
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Placeholder
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}></Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            {" "}
            {/** message box is full and centered on small devices */}
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              className={classes.message}
              multiline
              fullWidth
              rows={10}
              id="message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 301 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Placeholder
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton} //style these buttons differently
                onClick={onConfirm}
              >
                {loading ? (
                  <CircularProgress color="secondary" size={30} />
                ) : (
                  buttonContents
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
        lg={8} //background image takes up more of the screen (offcentered) on larger screens
        xl={9}
      >
        <Grid
          item //call to action again but different for this page, could render different based on location hook?
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid
              container
              justifyContent={matchesSM ? "center" : undefined}
              item
              style={{ paddingTop: "2rem" }}
            >
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
              >
                <Button
                  href="Placeholder.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Typography
                    variant=""
                    style={{
                      color: "white",
                      textShadow: "1px 2px black",
                      fontSize: "1.5rem",
                    }}
                  >
                    Placeholder
                  </Typography>
                </Button>
                <Button href="/about" rel="noopener noreferrer">
                  <Typography
                    variant=""
                    style={{
                      color: "white",
                      textShadow: "1px 2px black",
                      fontSize: "1.3rem",
                    }}
                  >
                    Placeholder
                  </Typography>
                </Button>
                <Button href="/herbz" rel="noopener noreferrer">
                  <Typography
                    variant=""
                    style={{
                      color: "white",
                      textShadow: "1px 2px black",
                      fontSize: "1.1rem",
                    }}
                  >
                    Placeholder
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

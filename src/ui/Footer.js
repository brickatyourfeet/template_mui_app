import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.teal,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {  //will restructure this based on how many icons
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {   //for down to cell phone size
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {   //getting close to edge down to cell size
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justifyContent="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                href="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/service1"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Service 1
              </Grid>
              <Grid
                item
                component={Link}
                href="/service2"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Service 2
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                href="/service3"
                className={classes.link}
              >
                Service 3
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                component={Link}
                href="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Herbz?
              </Grid>
              <Grid
                item
                component={Link}
                href="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz1
              </Grid>
              <Grid
                item
                component={Link}
                href="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz2
              </Grid>
              <Grid
                item
                component={Link}
                href="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz3
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About 2?
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About 3?
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                href="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black footer slash"
        src="/assets/footerAdornment.svg"
        className={classes.adornment}
      />

      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        className={classes.socialContainer}
        // style={{margin: 0}}
      >
        <Grid
          item
          component={"a"}
          href="https://www.etsy.com/shop/rainierelixirs/"
          rel="noopener noreferrer"
          target="_blank" 
        >
          <img alt="etsy logo" src="/assets/etsy.svg" className={classes.icon} />
        </Grid>
        {/*will need to add newer etsy vector of same/similar size */}
{/*
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com/rainierelixirs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src="/assets/twitter.svg" className={classes.icon} />
        </Grid>
*/}
{/*
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com/rainierelixirs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src="/assets/facebook.svg" className={classes.icon} />
        </Grid>
*/}
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/rainierelixirs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src="/assets/instagram.svg" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
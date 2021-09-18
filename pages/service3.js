import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, IconButton, Typography, useMediaQuery, Hidden} from "@material-ui/core";
import Head from "next/head"
//import backArrow from "../assets/backArrow.svg";
//import forwardArrow from "../assets/forwardArrow.svg";

//import herbs from "../assets/herbs.svg"

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em"
  },
  arrowContainer: {
    marginTop: "0.5em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  paragraphContainer: {
    maxWidth: "30em"
  }
}));

export default function Service3(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
    <Head>
      <title key="title">
        Rainier Elixirs | Service 3
      </title>
      <meta name="description" key="description" content="Rainier Elixirs | 
        Wildcrafted locally sourced tincture organic 
        northwest essential herbs not oils teeth and plaque conspiracy and metallica"
      />
      <meta property="og:title" content="Put a blurb about rainier elixirs here" key="og:title" />
      <meta property="og:url" key="og:url" content="rainierelixirs.com/service3" />
      <link rel="canonical" key="canonical" href="rainierelixirs.com/service3" /> 
    </Head>
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/service2"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to service 2"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Service 3 title
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquid quo nesciunt doloribus unde voluptatibus minus voluptas suscipit sapiente perspiciatis, velit maxime, aperiam hic fugiat laboriosam eveniet iste recusandae neque.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore impedit nostrum possimus voluptate, animi ipsum, sit perspiciatis dolor fugiat quos nobis blanditiis velit quidem molestiae temporibus? Eligendi, distinctio praesentium.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src="/assets/forwardArrow.svg" alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                One item
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/herbs.svg"
                style={{ marginLeft: "-2.75em" }}
                alt="imagalt"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? "center" : undefined} variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti tempore quisquam culpa quos harum perferendis odit minus quod quibusdam necessitatibus? Porro nostrum quas ipsam enim explicabo maxime deleniti officiis architecto?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Title again
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/herbs.svg" alt="imagalt" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            another short thing here
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            a short thing here
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                A title
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/herbs.svg" alt="imagalt" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
        >
          <Typography align={matchesSM ? "center" : undefined} variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum dolores quas sunt magnam odit, quia accusamus dolor voluptates quod aut quis unde neque doloribus officiis. Assumenda commodi modi necessitatibus.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Another
                <br />
                Item
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/herbs.svg" alt="imagalt" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Some descript here
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Shorter thing here 
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque, doloremque voluptatum, iure provident mollitia id fugit harum suscipit dignissimos officiis debitis quia quasi nesciunt porro. Temporibus quis beatae soluta.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

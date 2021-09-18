import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {IconButton, Grid, Typography, useMediaQuery, Hidden} from "@material-ui/core";
import Head from "next/head"
// import forwardArrow from "../assets/forwardArrow.svg";
// import backArrow from "../assets/backArrow.svg";
// import service1Icon from "../assets/tincture.svg";

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
  }
}));

export default function Service2(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  return (
    <Grid container direction="column">
    <Head>
      <title key="title">
        Rainier Elixirs | Service 2
      </title>
      <meta name="description" key="description" content="Rainier Elixirs | 
        Wildcrafted locally sourced tincture organic 
        northwest essential herbs not oils teeth and plaque conspiracy and metallica"
      />
      <meta property="og:title" content="Put a blurb about rainier elixirs here" key="og:title" />
      <meta property="og:url" key="og:url" content="rainierelixirs.com/service2" />
      <link rel="canonical" key="canonical" href="rainierelixirs.com/service2" /> 
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
              href="/service1"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="button back to service 1"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Service 2
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Service 2 blurb
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              service 2 paragraph service 2 paragraph service 2 paragraph
              service 2 paragraph
              service 2 paragraph
              service 2 paragraph
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              service 2 blurb
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/service3"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="button forward to service 3"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              A title ish
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              A two or three sentence blurb here. A two or three sentence blurb here. A two or three sentence blurb here. 
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              A two or three sentence blurb here. A two or three sentence blurb here. A two or three sentence blurb here. 
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <img src="/assets/tincture.svg" alt="imagalt" />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              A Title here
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              A two or three sentence blurb here. A two or three sentence blurb here. A two or three sentence blurb here. 
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              A two or three sentence blurb here. A two or three sentence blurb here. A two or three sentence blurb here. 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em", display: matchesMD ? "grid" : undefined }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              First thing
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/tincture.svg" alt="imagalt" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0
          }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Second Thing
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/tincture.svg"
              alt="imagalt"
              style={{ maxWidth: matchesMD ? "15em" : "20em", 
                       height: matchesMD ? "20em" : undefined
               }}  //double check these
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Third thing
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/tincture.svg" alt="imagalt" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
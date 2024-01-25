import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  Hidden,
  Divider,
} from "@material-ui/core";
import Head from "next/head";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "2rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  middleBoundStuff: {
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    filter: "grayscale(100%)",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: matchesMD ? "-4em" : "2em" }}
    >
      <Head>
        <title key="title">Placeholder</title>
        <meta
          name="description"
          key="description"
          content="Learn about Jewell - the owner, herbalist, 
      wildcrafter & formulator behind Rainier Elixirs"
        />
        <meta
          property="og:title"
          content="Rainier Elixirs | About Jewell, owner & herbalist"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="rainierelixirs.com/about"
        />
        <link rel="canonical" key="canonical" href="rainierelixirs.com/about" />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
          Placeholder
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Placeholder
        </Typography>
      </Grid>

      <Grid item style={{ paddingTop: "5em" }}>
        <Typography align="center" variant="h4" gutterBottom>
          Placeholder
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" paragraph align="center">
          Placeholder
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Placeholder
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        lg
        style={{ paddingBottom: matchesMD ? "1em" : "1.5em" }}
      >
        <Avatar
          alt="avatar"
          src="/assets/jewell.jpg"
          className={classes.avatar}
          style={{ filter: "grayscale(100%)" }}
        />
      </Grid>

      <Grid item>
        <Typography align="center" variant="h4" gutterBottom>
          Placeholder
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{
            paddingBottom: matchesMD ? "1em" : "1.5em",
            paddingRight: matchesMD ? "2rem" : "15rem",
            paddingLeft: matchesMD ? "2rem" : "15rem",
          }}
        >
          Placeholder
        </Typography>

        <Grid item>
          <Typography align={"center"} variant="h4" gutterBottom>
            Placeholder
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={"center"}
            paragraph
            style={{
              paddingBottom: matchesMD ? "1em" : "1.5em",
              paddingRight: matchesMD ? "2rem" : "15rem",
              paddingLeft: matchesMD ? "2rem" : "15rem",
            }}
          >
            Placeholder
          </Typography>
          <Grid item>
            <Typography align={"center"} variant="h4" gutterBottom>
              Placeholder
            </Typography>
            <Typography
              variant="body1"
              align={"center"}
              paragraph
              style={{
                paddingBottom: matchesMD ? "1em" : "1.5em",
                paddingRight: matchesMD ? "2rem" : "15rem",
                paddingLeft: matchesMD ? "2rem" : "15rem",
              }}
            >
              Placeholder
            </Typography>
            <Typography align={"center"} variant="h4" gutterBottom>
              Placeholder
            </Typography>
            <Typography
              variant="body1"
              align={"center"}
              paragraph
              style={{
                paddingBottom: matchesMD ? "1em" : "3em",
                paddingRight: matchesMD ? "2rem" : "15rem",
                paddingLeft: matchesMD ? "2rem" : "15rem",
              }}
            >
              Placeholder
            </Typography>

            <Divider
              variant="middle"
              style={{ marginBottom: matchesMD ? "1em" : "3em" }}
            />
            <Divider
              variant="middle"
              style={{ marginBottom: matchesMD ? "1em" : "3em" }}
            />
            <Divider
              variant="middle"
              style={{ marginBottom: matchesMD ? "1em" : "3em" }}
            />

            <Typography
              variant="body1"
              paragraph
              style={{
                paddingBottom: matchesMD ? "1em" : "3em",
                paddingRight: matchesMD ? "2rem" : "15rem",
                paddingLeft: matchesMD ? "2rem" : "15rem",
              }}
            >
              <h2>Placeholder</h2>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

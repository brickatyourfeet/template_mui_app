import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import JuicerFeed from "react-juicer-feed";
import Head from "next/head";
//import herbs from "../assets/herbs.svg";

import CallToAction from "../src/ui/CallToAction";

const placeholderFeed = "placeholderFeed";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Herbz(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  //background color on this container won't account for top padding - move this style later
  return (
    <Grid
      container
      direction="column"
      style={{
        backgroundColor: "#607580",
        marginTop: "-2rem",
        filter: "grayscale(100%)",
      }}
    >
      <Head>
        <title key="title">Placeholder</title>
        <meta
          name="description"
          key="description"
          content="Placeholder"
          //this one is super important above - work on it
        />
        <meta property="og:title" content="Placeholder" key="og:title" />
        <meta property="og:url" key="og:url" content="Placeholder" />
        <link rel="canonical" key="canonical" href="Placeholder" />
      </Head>
      {/* <JuicerFeed crossorigin feedId={rainierFeed} style={{}} data-filter="Instagram, Tumblr"/> */}
      <JuicerFeed feedId={placeholderFeed} />
      {/* <iframe target="_parent" src="https://rainierelixirs.tumblr.com/" width="100%" height="1000" frameborder="0"></iframe> */}

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

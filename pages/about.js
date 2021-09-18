import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, Typography, Avatar, useMediaQuery, Hidden} from "@material-ui/core";
import Head from "next/head";


import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300
    }
  }
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
    <Head>
      <title key="title">
        About Rainier Elixirs - Wildcraft local organic 60 characters
      </title>
      <meta name="description" key="description" content="Rainier Elixirs | 
        Wildcrafted locally sourced tincture organic 
        northwest essential herbs not oils teeth and plaque conspiracy and metallica"
      />
      <meta property="og:title" content="Put a blurb about rainier elixirs here" key="og:title" />
      <meta property="og:url" key="og:url" content="rainierelixirs.com/about" />
      <link rel="canonical" key="canonical" href="rainierelixirs.com/about" />  
    </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
          About
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
          Describe about Lorem  Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis pariatur quidem assumenda ab molestias, amet eum expedita quas blanditiis accusamus, voluptatum saepe natus ullam! At placeat nisi consequatur quas!
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Timeline?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                Caption title thinger
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Short blurb spot
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                More descript Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis repellat deserunt repudiandae sed, recusandae dicta fugit doloribus tempora ratione? Maxime beatae explicabo consequuntur omnis facilis assumenda molestias deserunt accusantium?
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Bigger lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti eaque, nostrum hic repellendus maxime consequatur iste labore accusamus voluptatibus quod nulla fugiat tenetur aliquam modi voluptates. Necessitatibus, nesciunt doloribus?
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Short blurby spot
              </Typography>
              <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              These could go on forever.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src="/assets/herbs.svg"
              alt="imagalt"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Jewell Braden, Founder / Herb Slinger
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Herbalist - Nerd - Donut Enthusiast 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="avatar" src="/assets/herbs.svg" className={classes.avatar} />
        </Grid>
        {/** 3 item container below avatar for other potential ideas **/}
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Hidden lgUp> {/** hidden on large screens **/}
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                LG Up About Jewell Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum quidem esse expedita, quas harum omnis delectus hic velit quaerat placeat, aperiam voluptates minima aut. Autem consequatur incidunt quibusdam? Veniam.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Lg Up Short blurb maybe if you want that
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src="/assets/herbs.svg"
                alt="imagalt"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Lg Up brief descript caption flex end
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown> {/** hidden on medium and down screens **/}
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                MD Down About Jewell Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum quidem esse expedita, quas harum omnis delectus hic velit quaerat placeat, aperiam voluptates minima aut. Autem consequatur incidunt quibusdam? Veniam.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                MD Down Short blurb maybe if you want that
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
            {/** 300 for phones **/}
              <img                
                src="/assets/herbs.svg"
                alt="imagalt"
                style={{ maxWidth: matchesMD ? 300 : undefined }} 
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                MD Down brief descript caption flex end
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

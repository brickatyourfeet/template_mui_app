import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, Typography, Avatar, useMediaQuery, Hidden} from "@material-ui/core";
import Head from "next/head";


import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "2rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
  middleBoundStuff: {
    maxWidth: "50em",
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em"
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
      maxWidth: 300
    }
  }
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" style={{ marginTop: matchesMD ? "-4em" : "2em" }}>
    <Head>
      <title key="title">
      Rainier Elixirs | About Jewell, Owner & Herbalist
      </title>
      <meta name="description" key="description" content="Learn about Jewell - the owner, herbalist, 
      wildcrafter & formulator behind Rainier Elixirs"
      />
      <meta property="og:title" content="Rainier Elixirs | About Jewell, owner & herbalist" key="og:title" />
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
          Our mission is to create herbal medicines that are not only effective and affordable, but are the highest possible quality. We support this idea by hand-harvesting almost all of the herbs that we use in our blends from the wild forests of the Pacific Northwest, and by utilizing over 15 years of knowledge and experience in herbalism to create the most effective blends possible. 
        </Typography>
      </Grid>


      <Grid item style={{paddingTop: "5em"}}>
          <Typography align="center" variant="h4" gutterBottom >
            The Herbalist
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Jewell Braden
          </Typography>
          <Typography variant="body1" paragraph align="center" >
            Herbalist - Wildcrafter - Formulator
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" lg style={{ paddingBottom: matchesMD ? "1em" : "1.5em"}}>
          <Avatar alt="avatar" src="/assets/jewell.jpg" className={classes.avatar} style={{filter: "grayscale(100%)"}} />
        </Grid>



        <Grid item>
              <Typography
                align="center"
                variant="h4"
                gutterBottom
              >
                About
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="center"
                paragraph
                style={{ paddingBottom: matchesMD ? "1em" : "1.5em", paddingRight: matchesMD ? "2rem" : "15rem", paddingLeft: matchesMD ? "2rem" : "15rem"}}
              >
                              Hiya from Rainier Elixirs! I've been studying herbalism for over 15 years and enjoy wildcrafting the freshest & healthiest herbs to offer in our blends.

Since 2007, I?ve completed herbal courses with Jane Bothwell, Rosemary Gladstar, and Michael & Leslie Tierra, as well as studied with Lynda Emashowski in the ways of native & folk herbalism. I also hold a Bachelor of Science in Alternative Medicine.

I live in the Pacific Northwest with my husband & two kids, and we are lucky enough to be surrounded by lush, bountiful forests in the mountains, lowlands & coastlines of our region. Outings & vacations most often include lots of wild herb hunting!
              </Typography>

              <Grid item>
              <Typography
                align={"center"}
                variant="h4"
                gutterBottom
              >
                Why small batches?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={"center"}
                paragraph
                style={{ paddingBottom: matchesMD ? "1em" : "1.5em", paddingRight: matchesMD ? "2rem" : "15rem", paddingLeft: matchesMD ? "2rem" : "15rem"}}
              >
                Small batches mean that we control exactly what goes into each blend, and are able to produce them using the most effective methods. This means higher quality herbs & solvents (wild & live), longer macerating times (up to a year), and the ability to use cold press extraction (which squeezes out every last drop of herbal gold). 
              </Typography>
              <Grid item>
              <Typography
                align={"center"}
                variant="h4"
                gutterBottom
              >
                Why live plants?
              </Typography>
              <Typography
                variant="body1"
                align={"center"}
                paragraph
                style={{ paddingBottom: matchesMD ? "1em" : "1.5em", paddingRight: matchesMD ? "2rem" : "15rem", paddingLeft: matchesMD ? "2rem" : "15rem"}}
              >
               When plants are dried, they lose many of their nutrients and all of their vitality as a result. Furthermore, the longer a plant remains dried before it is used as medicine, the more nutrients it will lose. Using live plants allows the extraction of almost all of the plant?s nutrients and vital energy into the solution & can be seen as an encapsulation of the entire plant. 
              </Typography>
              <Typography
                align={"center"}
                variant="h4"
                gutterBottom
              >
                Why wild?
              </Typography>
              <Typography
                variant="body1"
                align={"center"}
                paragraph
                style={{ paddingBottom: matchesMD ? "1em" : "3em", paddingRight: matchesMD ? "2rem" : "15rem", paddingLeft: matchesMD ? "2rem" : "15rem"}}
              >
            Wild plants in their natural habitat are able to absorb their desired nutrients from their surroundings as nature intended, creating a well-rounded herb with the highest amount of nutrients possible. Farmed plants - while they have their place in herbalism when wild plants are unavailable - lack most of their natural food sources found in their wild habitat, and therefore are lacking in nutrients compared to their wild counterparts. 
            Every drop is chock-full of vital plant nutrients and energy to elicit deep healing and nourishment.              </Typography>
            </Grid>
            </Grid>

            </Grid>


        {/* <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src="/assets/basket.jpg"
              alt="imagalt"
              style={{ maxHeight: matchesMD ? 350 : "44em", filter: "grayscale(100%)" }}
            />
          </Grid>
        </Grid> */}






      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
   );
}
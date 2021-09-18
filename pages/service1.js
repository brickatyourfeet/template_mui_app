import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, IconButton, Typography, useMediaQuery, Hidden} from "@material-ui/core/";
import Head from "next/head"
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
  itemContainer: {
    maxWidth: "40em"
  }
}));

export default function Service1(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  //using hidden to hide arrows when on medium screen and down

  return (
    <Grid container direction="column">
    <Head>
      <title key="title">
        Rainier Elixirs | Service 1
      </title>
      <meta name="description" key="description" content="Rainier Elixirs | 
        Wildcrafted locally sourced tincture organic 
        northwest essential herbs not oils teeth and plaque conspiracy and metallica"
      />
      <meta property="og:title" content="Put a blurb about rainier elixirs here" key="og:title" />
      <meta property="og:url" key="og:url" content="rainierelixirs.com/service1" />
      <link rel="canonical" key="canonical" href="rainierelixirs.com/service1" /> 
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
              href="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src="/assets/backArrow.svg" alt="back to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Service 1
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              paragraph of info paragraph of info paragraph of info paragraph of info 
              paragraph of info paragraph of info 
              paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info paragraph of info 
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              paragraph of info
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              paragraph of info
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Little blurb here.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/service2"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to service 2"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Icon with no link</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0
          }}
        >
          <Grid item>
            <Typography variant="h4">Icon with no link</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Icon with no link</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : "space-between"}
        className={classes.rowContainer}
        style={{ display: matchesMD ? "grid" : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Another H4
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Short Blurb
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                paragraph of info
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Paragraph of info
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Another H4
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                paragraph of info
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="tempSvg"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              header
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              sub-header
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              paragraph of data
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : "space-between" }
        style={{ marginBottom: "18em", display: matchesMD ? "grid" : undefined }} //may want to change up the marginBottom
        className={classes.rowContainer}                                          //could change to marginTop on CTA grid parent
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Another h4
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Short blurb
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                medium blurb
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                medium blurb
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <img src="/assets/herbs.svg" alt="tempSvg" />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Another H4
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                short blurb
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                short blurb
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                paragraph of data
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} setBgImgNum={props.setBgImgNum}/>
      </Grid>
    </Grid>
  );
}
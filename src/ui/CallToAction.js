import React, {useEffect} from "react";
import {Typography, Button, ButtonGroup, useMediaQuery, Grid, Hidden} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },                                        
  background: {                            
    backgroundImage: `url("/assets/bask.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    filter: "grayscale(100%)",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/hops-mobile-cut.png")`,
      backgroundAttachment: "inherit" //this will get rid of parallax (static) bg
    }
  },
  consultationButton: {
    ...theme.typography.consultation,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: "white",
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  ctaBlurb: {
    //backgroundColor: alpha(theme.palette.common.red, 0.4),
    borderRadius: 20,
    height: 350,
    width: 450,
  }
}));

export default function CallToAction(props) {
  //refactor to call media queries smallScreen and extraSmallScreen
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography 
              variant="h1"
              style={{
                lineHeight: matchesXS ? 1.1 : null, 
                marginBottom: matchesXS ? "0.5em" : null,
                fontSize: "2.25em",
                color: "white",
                textShadow: "2px 2px black"
              }}
            >
              Wild & living herbal elixirs handcrafted in the Pacific Northwest
              <br />
            </Typography>
            <Grid container justifyContent={matchesSM ? "center" : undefined} item style={{paddingTop: "2rem"}}>

              <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                  >
                    <Button 
                      href="https://www.etsy.com/shop/rainierelixirs/"
                      rel="noopener noreferrer"
                      target="_blank" >
                       <Typography variant="" style={{ color: "white", textShadow: "1px 2px black", fontSize: "1.5rem" }}>
                        Shop Tinctures Now
                        </Typography>
                      </Button>
                      <Button 
                      href="/about"
                      rel="noopener noreferrer"
                       >
                       <Typography variant="" style={{ color: "white", textShadow: "1px 2px black", fontSize: "1.3rem" }}>
                        Learn More
                        </Typography>
                      </Button>
                      <Button 
                      href="/herbz"
                      rel="noopener noreferrer"
                      >
                       <Typography variant="" style={{ color: "white", textShadow: "1px 2px black", fontSize: "1.1rem" }}>
                        Social
                        </Typography>
                      </Button>
                  </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <Hidden mdDown>
        <Button
          component={Link}
          href="https://www.instagram.com/rainierelixirs"
          variant="contained"
          className={classes.consultationButton}
          style={{color: "black"}}
          onClick={() => props.setValue(5)}
          rel="noopener noreferrer"
          target="_blank" 
        >
          Follow
        </Button>
        </Hidden>
      </Grid>
    </Grid>
  );
}
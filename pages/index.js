import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import ButtonArrow from "../src/ui/ButtonArrow";
import Head from "next/head";
import CallToAction from "../src/ui/CallToAction";

//watch network tab to see images loading - this will help set the threshold
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  consultationButton: {
    ...theme.typography.consultation,
    //backgroundColor: theme.palette.common.red,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  shopButton: {
    ...theme.typography.consultation,
    //backgroundColor: theme.palette.common.red,
    borderRadius: 50,
    height: 45,
    width: 145,
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    padding: "1rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "18em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: "white",
  },
  subtitle: {
    marginBottom: "1em",
  },
  //may need to change margin bottom XS for icons / text
  //may need to make margin changes when updating different svgs
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 6,
    },
  },
  herbzBackground: {
    backgroundImage: `url("/assets/transdala.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "150%",
    width: "100%",
    marginTop: "-15em",
    marginBottom: "-35em",
    //opacity: 0.5
  },
  herbzCard: {
    backgroundImage: `url("/assets/tincs.jpg")`,
    backgroundPosition: "center",
    //backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    justifyContent: "flex-start",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    //height: "300px",
    height: "15vh",
    //width: "55vw",
    [theme.breakpoints.up("xl")]: {
      width: "36vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
      //height: "75vh"
    },
  },
  infoBackground: {
    position: "absolute",
    zIndex: -1,
    backgroundImage: `url("/assets/ctabg2.jpg")`,
    //backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "150%",
    width: "100%",
  },
}));

export default function Landing(props) {
  const classes = useStyles();
  const theme = useTheme();
  //media query variables for checking screen size
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justifyContent={matchesSM ? "center" : undefined}
    >
      <Head>
        <title key="title">
          Rainier Elixirs | Tinctures Made with Wildcrafted Medicinal Herbs
        </title>
        <meta
          name="description"
          key="description"
          content="Small batch, wildcrafted elixirs 
      & tinctures formulated using organic, wild & living medicinal plants from the Pacific Northwest. Adaptogens, tonics & remedies."
        />
        <meta
          property="og:title"
          content="Rainier Elixirs | Tinctures Made with Wildcrafted Medicinal Herbs"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rainierelixirs.com" />
      </Head>
      <Hidden smDown>
        <Grid item>
          {/*-----ABOUT Block-----*/}
          <Grid //the height and marginTop here may need adjusting based on bg image
            container
            style={{ height: "20em" }}
            alignItems="center"
            direction="row"
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Grid
                  container
                  style={{ marginBottom: matchesXS ? "10em" : 0 }}
                  direction="column"
                >
                  <Typography
                    variant="h1"
                    style={{
                      color: "white",
                      textShadow: "4px 4px black",
                      fontSize: matchesMD ? "3.5rem" : "4.5rem",
                    }}
                  >
                    {matchesMD ? null : "Wild & living herbal elixirs "}
                    handcrafted in the Pacific Northwest
                  </Typography>

                  <Typography
                    style={{ color: "black", borderColor: "black" }}
                    variant="subtitle2"
                  ></Typography>

                  <Grid item>
                    <Button
                      component={Link}
                      href="/about"
                      variant="outlined"
                      style={{ color: "black", borderColor: "black" }}
                      className={classes.learnButton}
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column"></Grid>
              </Grid>
            </Grid>
            <LazyLoadComponent threshold={850}>
              <div className={classes.infoBackground} />
            </LazyLoadComponent>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Herbz-----*/}
          <Grid //the height and marginTop here may need adjusting based on bg image
            container
            style={{ height: "100em", marginTop: "30em" }}
            alignItems="center"
            justifyContent="center"
          >
            {/*-----Card content is the top portion, actions is the buttons etc-----*/}
            <Card className={classes.herbzCard}>
              {/*--https://material-ui.com/components/cards/--*/}
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      style={{
                        color: "white",
                        fontSize: "6.5rem",
                        textShadow: "-4px -2px black",
                      }}
                      gutterBottom
                    >
                      {matchesMD ? null : "Visit our"} shop
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "white",
                        fontSize: "1.5rem",
                        textShadow: "-2.5px -1.5px black",
                      }}
                    >
                      {matchesMD ? null : "Check now for shop updates!"}
                    </Typography>
                    <Button
                      component={Link}
                      href="https://www.etsy.com/shop/rainierelixirs"
                      variant="contained"
                      className={classes.shopButton}
                      style={{ color: "black" }}
                      onClick={() => props.setValue(5)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Shop Tinctures
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <LazyLoadComponent threshold={850}>
              <div className={classes.herbzBackground} />
            </LazyLoadComponent>
          </Grid>
        </Grid>
      </Hidden>
      <Grid item style={{ marginTop: matchesSM ? "-14em" : null }}>
        {/*-----CTA-----*/}
        <LazyLoadComponent threshold={850}>
          <CallToAction
            setValue={props.setValue}
            // setBgImgNum={props.setBgImgNum}
            // bgImg0000={props.bgImg0000}
          />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
}

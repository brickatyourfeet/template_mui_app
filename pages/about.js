import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, Typography, Avatar, useMediaQuery, Hidden, Divider} from "@material-ui/core";
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

Since 2007, I've completed herbal courses with Jane Bothwell, Rosemary Gladstar, and Michael & Leslie Tierra, as well as studied with Lynda Emashowski in the ways of native & folk herbalism. I also hold a Bachelor of Science in Alternative Medicine.

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
               When plants are dried, they lose many of their nutrients and all of their vitality as a result. Furthermore, the longer a plant remains dried before it is used as medicine, the more nutrients it will lose. Using live plants allows the extraction of almost all of the plant's nutrients and vital energy into the solution & can be seen as an encapsulation of the entire plant. 
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
            Every drop is chock-full of vital plant nutrients and energy to elicit deep healing and nourishment.              
            </Typography>

<Divider variant="middle" style={{ marginBottom: matchesMD ? "1em" : "3em"}} />
<Divider variant="middle" style={{ marginBottom: matchesMD ? "1em" : "3em"}} />
<Divider variant="middle" style={{ marginBottom: matchesMD ? "1em" : "3em"}} />

            <Typography
                variant="body1"
                
                paragraph
                style={{ paddingBottom: matchesMD ? "1em" : "3em", paddingRight: matchesMD ? "2rem" : "15rem", paddingLeft: matchesMD ? "2rem" : "15rem"}}
              >
<h2>
	Web Site Terms and Conditions of Use
</h2>

<h3>
	1. Terms
</h3>

<p>
	By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, applicable laws and regulations and their compliance. If you disagree with any of the stated terms and conditions, you are prohibited from using or accessing this site. The materials contained in this site are secured by relevant copyright and trade mark law. 
</p>

<h3>
	2. Use License
</h3>

<ol type="a">
	<li>
		Permission is allowed to temporarily download one duplicate of the materials (data or programming) on Rainier Elixirs's site for individual and non-business use only. This is the just a permit of license and not an exchange of title, and under this permit you may not: 
		
		<ol type="i">
			<li>modify or copy the materials;</li>
			<li>use the materials for any commercial use , or for any public presentation (business or non-business); </li>
			<li>attempt to decompile or rebuild any product or material contained on Rainier Elixirs's site;</li>
			<li>remove any copyright or other restrictive documentations from the materials; or</li>
			<li>transfer the materials to someone else or even "mirror" the materials on other server.</li>
		</ol>
	</li>
	<li>
		This permit might consequently be terminated if you disregard any of these confinements and may be ended by Rainier Elixirs whenever deemed. After permit termination or when your viewing permit is terminated, you must destroy any downloaded materials in your ownership whether in electronic or printed form.
	</li>
</ol>

<h3>
	3. Disclaimer
</h3>

<ol type="a">
	<li>
		The materials on Rainier Elixirs's site are given "as is". Rainier Elixirs makes no guarantees, communicated or suggested, and thus renounces and nullifies every single other warranties, including without impediment, inferred guarantees or states of merchantability, fitness for a specific reason, or non-encroachment of licensed property or other infringement of rights. Further, Rainier Elixirs does not warrant or make any representations concerning the precision, likely results, or unwavering quality of the utilization of the materials on its Internet site or generally identifying with such materials or on any destinations connected to this website. 
	</li>
</ol>

<h3>
	4. Constraints
</h3>

<p>
	In no occasion should Rainier Elixirs or its suppliers subject for any harms (counting, without constraint, harms for loss of information or benefit, or because of business interference,) emerging out of the utilization or powerlessness to utilize the materials on Rainier Elixirs's Internet webpage, regardless of the possibility that Rainier Elixirs or a Rainier Elixirs approved agent has been told orally or in written of the likelihood of such harm. Since a few purviews don't permit constraints on inferred guarantees, or impediments of obligation for weighty or coincidental harms, these confinements may not make a difference to you. 
</p>

<h3>
	5. Amendments and Errata 
</h3>

<p>
	The materials showing up on Rainier Elixirs's site could incorporate typographical, or photographic mistakes. Rainier Elixirs does not warrant that any of the materials on its site are exact, finished, or current. Rainier Elixirs may roll out improvements to the materials contained on its site whenever without notification. Rainier Elixirs does not, then again, make any dedication to update the materials. 
</p>

<h3>
	6. Links
</h3>

<p>
	Rainier Elixirs has not checked on the majority of the websites or links connected to its website and is not in charge of the substance of any such connected webpage. The incorporation of any connection does not infer support by Rainier Elixirs of the site. Utilization of any such connected site is at the user's own risk.
</p>

<h3>
	7. Site Terms of Use Modifications
</h3>

<p>
	Rainier Elixirs may update these terms of utilization for its website whenever without notification. By utilizing this site you are consenting to be bound by the then current form of these Terms and Conditions of Use. 
</p>

<h3>
	8. Governing Law
</h3>

<p>
	Any case identifying with Rainier Elixirs's site should be administered by the laws of the country of USA Rainier Elixirs State without respect to its contention of law provisions. 
</p>

<p>
	General Terms and Conditions applicable to Use of a Web Site.
</p>

<h2>
	Privacy Policy
</h2>

<p>
	Your privacy is critical to us. Likewise, we have built up this Policy with the end goal you should see how we gather, utilize, impart and reveal and make utilization of individual data. The following blueprints our privacy policy. 
</p>

<ul>
	<li>
		Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
	</li>
	<li>
		We will gather and utilization of individual data singularly with the target of satisfying those reasons indicated by us and for other good purposes, unless we get the assent of the individual concerned or as required by law.
	</li>
	<li>
		We will just hold individual data the length of essential for the satisfaction of those reasons.
	</li>
	<li>
		We will gather individual data by legal and reasonable means and, where fitting, with the information or assent of the individual concerned. 
	</li>
	<li>
		Personal information ought to be important to the reasons for which it is to be utilized, and, to the degree essential for those reasons, ought to be exact, finished, and updated. 
	</li>
	<li>
		We will protect individual data by security shields against misfortune or burglary, and also unapproved access, divulgence, duplicating, use or alteration. 
	</li>
	<li>
		We will promptly provide customers with access to our policies and procedures for the administration of individual data. 
	</li>
</ul>

<p>
	We are focused on leading our business as per these standards with a specific end goal to guarantee that the privacy of individual data is secure and maintained. 
</p>

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
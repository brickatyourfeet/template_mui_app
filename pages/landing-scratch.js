<Grid item>
{" "}
</Grid>
<Grid item>
{" "}
{/*-----Service 1-----*/}
{/*--grid container on left, center when small--*/}
<Grid
  container
  direction="row" 
  justifyContent={matchesSM ? "center" : undefined} 
  className={classes.serviceContainer}
>
  <Grid
    item
    style={{
      marginLeft: matchesSM ? 0 : "5em",
      textAlign: matchesSM ? "center" : undefined
    }}
  >         {/*-----1 grid item for text-----*/}
    <Typography variant="h4">Service 1</Typography>
    <Typography variant="subtitle1" className={classes.subtitle}>
      Service 1
    </Typography>
    <Typography variant="subtitle1">
      Service 1 description{" "}
      <span className={classes.specialText}>special{matchesXS && <br/>} text.</span>
    </Typography>
    <Button
      component={Link}
      href="/service1"
      variant="outlined"
      className={classes.learnButton}
      onClick={() => {
        props.setValue(1);         //setValue in the navbar
        props.setSelectedIndex(1); //selected index for the dropdown as well
      }}
    >
      <span style={{ marginRight: 10 }}>Learn More</span>
      <ButtonArrow
        width={10}
        height={10}
        fill={theme.palette.common.teal}
      />
    </Button>
  </Grid>
  <Grid item> {/*-----1 grid item for image-----*/}
    <LazyLoadImage
      className={classes.icon}
      alt="service 1 icon"
      src="/assets/tincture.svg"
    />
  </Grid>
</Grid>
</Grid>
<Grid item>
{" "}
{/*-----Service 2-----*/}
{/*--grid container on right (flex-end), center when small--*/}
<Grid
  container
  direction="row"
  justifyContent={matchesSM ? "center" : "flex-end"}
  className={classes.serviceContainer}
>
  <Grid
    item
    style={{
      textAlign: matchesSM ? "center" : undefined
    }}
  >
    <Typography variant="h4">Service 2</Typography>
    <Typography variant="subtitle1" className={classes.subtitle}>
      Service 2 description
    </Typography>
    <Typography variant="subtitle1">
      Service 2 part 2 desc
      {matchesSM ? null : <br />}with a break if necessary.
    </Typography>
    <Button
      component={Link}
      href="/service2"
      variant="outlined"
      className={classes.learnButton}
      onClick={() => {
        props.setValue(1);
        props.setSelectedIndex(2);
      }}
    >
      <span style={{ marginRight: 10 }}>Learn More</span>
      <ButtonArrow
        width={10}
        height={10}
        fill={theme.palette.common.teal}
      />
    </Button>
  </Grid>
  <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
    <LazyLoadImage
      className={classes.icon}
      alt="service 2 icon"
      src="/assets/tea-bag.svg"
    />
  </Grid>
</Grid>
</Grid>
<Grid item>
{" "}
{/*-----Service 3-----*/}
<Grid
  container
  direction="row"
  justifyContent={matchesSM ? "center" : undefined}
  className={classes.serviceContainer}
>
  <Grid
    item
    style={{
      marginLeft: matchesSM ? 0 : "5em",
      textAlign: matchesSM ? "center" : undefined
    }}
  >
    <Typography variant="h4">Service 3</Typography>
    <Typography variant="subtitle1" className={classes.subtitle}>
      Service 3 descript
    </Typography>
    <Typography variant="subtitle1">
      service 3 description 2
    </Typography>
    <Button
      component={Link}
      href="/service3"
      variant="outlined"
      className={classes.learnButton}
      onClick={() => {
        props.setValue(1);
        props.setSelectedIndex(3);
      }}
    >
      <span style={{ marginRight: 10 }}>Learn More</span>
      <ButtonArrow
        width={10}
        height={10}
        fill={theme.palette.common.teal}
      />
    </Button>
  </Grid>
  <Grid item>
    <LazyLoadImage
      className={classes.icon}
      alt="service 3 icon"
      src="/assets/green-tea.svg"
    />
  </Grid>
</Grid>
</Grid>
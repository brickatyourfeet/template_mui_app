import React, {useState, useEffect} from 'react'
import Router from "next/router";
import ReactGA from "react-ga";
import {AppBar, Toolbar, useScrollTrigger, Hidden, MenuList, Popper, Paper, Grow, ClickAwayListener, Typography, SwipeableDrawer, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, IconButton, List, ListItem, ListItemText, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Accordion, AccordionDetails, AccordionSummary, Grid} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import Link from "../Link";
import {ExpandMore} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function handleListKeyDown(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
  }
}

const useStyles = makeStyles(theme => ({
  headerMargin: { //these will need to change as logos do
    ...theme.mixins.toolbar,
    marginBottom: "4.5em", //offsetting from logo
    [theme.breakpoints.down('md')] : {
      marginBottom: "2em",
    },
    [theme.breakpoints.down('xs')] : {
      marginBottom: ".85em",
    }
  },
  logo: {  //these will need to change as logos do
    //textTransform: "none",    //this would be used to keep logo text the case it is
    height: "9em",
    marginTop: "0.3em",
    //marginBottom: "-1em",
    [theme.breakpoints.down('lg')] : {
      height: '8.1em'
    },
    [theme.breakpoints.down('md')] : {
      height: '6em'
    },
    [theme.breakpoints.down('xs')] : {
      //height: '5em'
      width: '20em'     //this will have to change with different sized logos
    }                     //make sure to test on mobile
  },
  logoContainer: {
    //to get rid of default button padding
    //padding: 0 
    //to get rid of opacity when hovering over logo
    // "&:hover": {
    //   backgroundColor: 'transparent'
    // }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
     minWidth: 10,
     marginLeft: '25px'
  },
  button: {
    ...theme.typography.consultation,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    fontHeight: '45px',
    // height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    // textTransform: 'none'
  },
  menu: {
    backgroundColor: theme.palette.common.red,
    color: 'white',
    //borderRadius: '0px'  //can do this to make edges of menu sharp
    zIndex: 1302, //based on mui default 
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      // backgroundColor: 'white'
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.teal,

  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  drawerItemConsultation: {
    backgroundColor: theme.palette.common.red
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,

  },
  expansion: {
    backgroundColor: theme.palette.common.teal,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)", //to match the main menu items
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0
    },
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  },
  expansionDetails: {
    padding: 0, //can get rid of this to indent inner menu items
    backgroundColor: theme.palette.primary.light
  },
  expansionSummary: {
    padding: "0 24px 0 16px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    },
    backgroundColor: props =>
      props.value === 1 ? "rgba(0, 0, 0, 0.14)" : "inherit"
  }

}))

export default function Header(props){

  const classes = useStyles(props)   //so we can use props in the styles above 
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const [previousURL, setPreviousURL] = useState("");


  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setMenuOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setMenuOpen(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setMenuOpen(false)
  }

  const menuOptions = [
    //{name: 'services', link: '/services', activeIndex: 1, selectedIndex: 0},  //check this again
    {name: 'service1', link: '/service1', activeIndex: 1, selectedIndex: 0},
    {name: 'service2', link: '/service2', activeIndex: 1, selectedIndex: 1},
    {name: 'service3', link: '/service3', activeIndex: 1, selectedIndex: 2},
  ]

  const routes = [
    {name: "Home", link: '/', activeIndex: 0}, 
    {name: "Services", link: '/services', activeIndex: 1, ariaOwns: anchorEl ? 'simple-menu' : undefined, ariaPopup: anchorEl ? true : undefined, mouseOver: event => handleClick(event)},
    {name: "Herbz", link: '/herbz', activeIndex: 2},
    {name: "About", link: '/about', activeIndex: 3},
    {name: "Contact", link: '/contact', activeIndex: 4},
    {name: "Shop", link: 'https://rainierelixirs.etsy.com', activeIndex: 5},
    //{name: "Consultation", link: '/consultation', activeIndex: 5}, //adding this here gets rid of index error for 5
  ]

  const path = typeof window !== 'undefined' ? window.location.pathname : null

  const activeIndex = () => {
    const found = routes.find(({link}) => link === path)
    const menuFound = menuOptions.find(({link}) => link === path)

    if(menuFound){
      props.setValue(1)
      props.setSelectedIndex(menuFound.selectedIndex)
    } else if(found === undefined){
      props.setValue(false)
    } else {
      props.setValue(found.activeIndex)
    }
  }

  useEffect(() => {
    activeIndex()
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [path])

  const tabs = (
    <React.Fragment>
      <Tabs 
      value={props.value} 
      onChange={handleChange} 
      className={classes.tabContainer}
      //can set indicator color to primary to get rid of underline
      // indicatorColor="primary" 
      >
        {routes.map((route, index) => (
          <Tab 
            key={`${route}${index}`}
            className={classes.tab} 
            component={Link} 
            href={route.link} 
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={()=> setMenuOpen(false)}
            //onMouseLeave={()=> console.log(route)}
            //target={index === 5 ? '_blank' : null}
            target={route.name === 'Shop' ? '_blank' : null}
            disabled={false}
          />
        ))}
      </Tabs>
      
      {/* <Button component={Link} href='/consultation' onClick={() => props.setValue(5)} variant='contained' color='secondary' className={classes.button}>
      Schedule a Consultation?
      </Button> */}
      <Popper placement='bottom-start' open={menuOpen} anchorEl={anchorEl} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ 
                //transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' 
                transformOrigin: 'top left'
              }}
            >
              <Paper classes={{root: classes.menu}} elevation={0}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList 
                    onMouseLeave={handleClose} 
                    disablePadding autoFocusItem={false} 
                    id="simple-menu" 
                    onKeyDown={handleListKeyDown}
                    onMouseOver={()=> setMenuOpen(true)}
                    >
                  {menuOptions.map((option, index) => (
                    <MenuItem 
                      key={`${option}${index}`}
                      component={Link} 
                      href={option.link} 
                      classes={{root: classes.menuItem}} 
                      onClick={(event) => {
                        handleMenuItemClick(event, index); props.setValue(1); handleClose()
                      }}
                      selected={index === props.selectedIndex && props.value === 1 && window.location.pathname !== '/services'}
                      //can remove above once services is removed
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      {/* <Menu 
        id='simple-menu' 
        anchorEl={anchorEl} 
        open={menuOpen} 
        onClose={handleClose}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
        keepMounted
        style={{zIndex: 1302}}
      >

      </Menu>  */}
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        onOpen={() => setDrawerOpen(true)}
        classes={{paper: classes.drawer}}
      >
       <div className={classes.headerMargin} />
       <List disablePadding>
        {routes.map(route => route === 'Services' ? (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              {route.name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{ root: classes.expansionDetails }}> {/** overwriting mui class */} 
            <Grid container direction="column">
                    {menuOptions.map(route => (
                      <Grid item>
                        <ListItem
                          divider
                          key={`${route}${route.seleselectedIndex}`}
                          button
                          component={Link}
                          href={route.link}
                          selected={
                            props.selectedIndex === route.selectedIndex &&
                            props.value === 1 &&
                            window.location.pathname !== "/services"
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setDrawerOpen(false);
                            props.setSelectedIndex(route.selectedIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name}
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
            </ExpansionPanelDetails>

          </ExpansionPanel>
        ) : (
          <ListItem 
            key={`${route}${route.activeIndex}`}
            divider 
            button 
            component={Link} 
            href={route.link} 
            onClick={() => {setDrawerOpen(false); props.setValue(route.activeIndex)}}
            selected={props.value === route.activeIndex}
            classes={{selected: classes.drawerItemSelected}}
            >
            <ListItemText 
              className={classes.drawerItem} 
              disableTypography
            >
              {route.name}
            </ListItemText>
          </ListItem>
        ))}
        {/* <ListItem selected={props.value===5} classes={{root: classes.drawerItemConsultation, selected: classes.drawerItemSelected}} onClick={()=> {setDrawerOpen(false); props.setValue(5)}} divider button component={Link} href='/consultation'>
          <ListItemText className={classes.drawerItem} disableTypography>Schedule Consultation</ListItemText>
        </ListItem> */}
       </List>
      </SwipeableDrawer>
       
      <IconButton className={classes.drawerIconContainer} onClick={()=> setDrawerOpen(!drawerOpen)}>
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
          <Button 
            component={Link} 
            href='/' 
            className={classes.logoContainer} 
            onClick={()=> props.setValue(0)}
            style={{ textDecoration: "none" }} //this gets rid of underline
            // disableRipple  //can disable ripple on click 
          >
            <img className={classes.logo} src="/assets/rainierelixirswidewhite2.svg" alt="rainier elixirs logo" />
            {/* use the svg directly for the svg text to show up in safari browser */}
            {/* 
            <svg 
              className={classes.logo} 
              viewBox="0 0 652 107" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink"
              >
              <style>{``}</style>
  <image width="652" height="107" xlink:href="data:image/png;charset=utf-8; base64,iVBORw0KGgoAAAANSUhEUgAAAowAAABrCAMAAADKMyP3AAAAAXNSR0IB2cksfwAAAj1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////anIwUQAAAL90Uk5TADBggCCwENBAn/D/cKDvkMC/r99Q6PTy3r3CkutK3Ta024PNnfFcjLk7bJMOb7HhyYsIPfpG7irG7Y6r6ZfI0tOeVfeRGZWZ5P5jF6x3A0fOojT9Hpb5KBP1+wwCgtchJIjZxXouFL4mw6nPSKVizHVpN6PlhKhoFT+GulfWp+a8u9hT4uAFEV+kChvaIg8sMZyyXfN/7Oe3cwccPMTRs27VQk9rWnsztsdZ+KpmcUt0fDlEQScpyn5Sm7hNZZjNtyJkAAAACXBIWXMAACFfAAAhXwF62/PiAAAQFklEQVR4nO2d+YMUxRXHe46dHabY2dmDVRHlEDwiYDhXBEFBgQmH4sLK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"/>
</svg><svg viewBox="0 0 652 107" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="652" height="107" xlink:href="data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAABrCAMAAADKMyP3AAAAAXNSR0IB2cksfwAAAj1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////anIwUQAAAL90Uk5TADBggCCwENBAn/D/cKDvkMC/r99Q6PTy3r3CkutK3Ta024PNnfFcjLk7bJMOb7HhyYsIPfpG7irG7Y6r6ZfI0tOeVfeRGZWZ5P5jF6x3A0fOojT9Hpb5KBP1+wwCgtchJIjZxXouFL4mw6nPSKVizHVpN6PlhKhoFT+GulfWp+a8u9hT4uAFEV+kChvaIg8sMZyyXfN/7Oe3cwccPMTRs27VQk9rWnsztsdZ+KpmcUt0fDlEQScpyn5Sm7hNZZjNtyJkAAAACXBIWXMAACFfAAAhXwF62/PiAAAQFklEQVR4nO2d+YMUxRXHe46dHabY2dmDVRHlEDwiYDhXBEFBgQmH4sLKHiCisOhGjSiICqjIIIcSDYgKiSckURKvJMZEzd+WrlfdPd07dbza6W2G5X1+2amtN72vqr/b3a/qVbXjEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBxEAqLfttJpu0HwSRbpL+OtecT9gR4ppnQiEnr8gz6RWTIMaKCWyiqqqF1EgkSZoVlHVZxuhOTSRGtsha1bUlVlTcwgkidtq0F7+JjLUn5wtxbZNmjGmq84xu1ERSdDBW0lTnXDG2JeYMcU3TyfRidNx6RmPfRBI0YcSoCXAIIjaKGDF2JOUNcS3D4xNjAEP3aSIJJoLWUmqDNBhQPB03k7pCXHf9DZ3Gb0z2rW9UmkzxTW6qrbvZq5oqitOgMF1ykBn+QW6prZvZVcOsW+NoHJABrSlnA8UzJTPPCSK9vM2vvF1zLF1vBAe4Q5R/JUqTay1LvuWdtXV2nTV7zty7uOGkX8+brzW0oYuNYNICwzeafUtJgzwW+iaLausWe1Xdong3FJZIDnKPf5Dra+uWjvTaZVkcjQNamf6ZMCsOljEdB+nlvX7dcs2xdL0RHMD7BxdXdrai1vI+3/L+2jqrzlq5qmq38AGN31Y8eAMccPUMlzVr+cfyb/TfWLde+LBho9LkoYfBYpPs4vLIZKjr8Yqbl5YZW/qIxHD+ll4wXP1obd3Wlh5e17fGY30/Y81xNA4oiQYqb8MZpBiRXg6s6Qez1gc1x9L1xsAWIY05Xnlw23ZXinc+Vmu5Y26ZG978+EBtnU1ngQTK10+YuROO98SgxnMr4D/Cexh/Ev7ILv0X5otzIbnqVYHe2S2vWwZfD3p+iLE9csMZ3O4ped00Xvd0UHQvDg/LzKwbx/HEOKyozhaRYkR72RI1k6Prjd+CQ+uC8jOMPSu3fI4b/k5eh+6s53ll/17+sRv+R14w+I5mWcgF0S0v6r+wSJyLfTqbJRoxToevz/CL+5VifEnT/TOj5+8xxWm2bhynlWnV1u5VI55AkV4+jhGjrjec63jlPUFxFVuouFjdrhEjtrMOwGPYy6KQgmvjVIPzWCIuDPSYD/2KOBev6mzMYtzuF2MRo3PwkDSesm4cx7sNK0KUtF+LiKaRXtYvxsO88rWQi/IsdQsxajoL/tghv/QEL91gcB5LxAXndV7ar/3CG+Jc3KWzMYuxx3/kjEeMCqwbxwnkVpTobY5fORoxKqhfjLvAo81e6UgQH9aAFqOms+AEvumX9vJSr8F5LFEX4FlBMnwQ4igrG/++WYzMH+RIUIyIxnGygd6CmMAnN6FaZzxOgmIUHb5afN7MWEVlhxejurPgMbH6GACX0GMG75FEXbiJl45qv9DLpvRxq7c0Nggx+lf2BMWIaBxQqSquLTLPcryjWqOdL7TzMgYxwl/yxo1OaAZJ8WJUdtbJEZeiWbysuhJbEnXhFC+t1dnvZmz525ELtQSEGPu8YoJiNDdO4EcwQPtxL6s7O2c4/HvMOpjkxLgDfHoHPrvhi3LYDS9GZWedDumeA+fz9wbvkURdeMt4vg4ytgamIHRjnQgxsndFMUExmhsnSLEow20uxejvVGsHR+NlDGJ0JvHq9/gn95H3D0ozvBiVnQViDMXZ26+gGFczdmaDvmNMYuw/G/Rcg4kx9T7AzAwLS70kExTjA7z6HP+kCV/GnRjvZuzUVG71gcbIIMYPebU3EtFQYswVEDoMYXhwTFCMD4I/3RC+aB6L4xLjlGo5PXPmzDUxTVDbnq9lrN8Z5PF0v8bIIMY3oedEBNRQYnTvcTCWHXlqlAERwkTT8E6CYnTu4vWbIHz5SG0VgxjP84q4xnK0Luw2nq8eNsmLoC6ojQxiHIThgA1QTFCM5sa5kTQkSOSCdBA5MKacK6qGli29jEWM+3h9UR++2IhR3Vkwla7JsKuDqAt/NJ0vN2z7k+N8zM008aRBjOL7YvI3QTEaG+fwxFmYBdTfr5vhUbHFmF+bpBjhSsbedcOXaZqj4MWo7iyw+8Tg7uiIuvApL32mMX8Jcsde4Gbvqa1MYoQRVXGfT1CMxsZxSmKBfkqjRqHFlDlVIkkxilGKp4/ogwm8GNWddRt0wucGf0dF1AWYH5+rMd/E2EGvZ55TW5nEuBXa8wUvJihGY+M4WdYCP1PKO7XQotNmHt1JVIzwD95ruPTjxajurAFIlOiTpKHVTdQFSCO6qDH/GEQGY6yylFgPkxidD4JLfd1i3HNJ7Ydl44BWLyzJleRabBUa7EQMeyO9jEeMA2Xhn0JqArwYNZ11HP6ONAGpTiIunOGFVTrzWWwh/8EjkLLayijG+7nBLF6sV4ybdGG9ZeOAXMFfoN8puVVXvMyxXIckT3aUXsYjRucQONivnSZGi1HbWSK3/OOYJqQVLohUyT9rrAfLYrxzCjdUj60axfgXaM4Op24xHihjxWhunEc6uOblMiPkWAmuhhmrrB29lzGJ8SNw8UPtUbBiNHTWPPhTaxVnePRUXTiwDxK0/6qznsrYEP/5Jbf8VGlmFKMDuRZ8RrE+MR6bqx3wtGucT3NH9Wkw3RTosdJaHc/IGod1LLyMSYzz4T79lfYoODGaO+uLy9ygV5efMBqWjbgPPaO13hA2Paw0M4sRVlzwMb06xOhhEiO6cT75aJyczaebWjujF0LzsI6FlzGJUay32qQ1MYoR21m7YRaQ/S225S9SF/6utW4Km96nNDOL8VZuUT6ZsBj1jQtoKY6QWtuIzUzymBUwiYvxa26yWGtiI0ZDZ90GF+IP3tFb2QEuPLvI5fgQP3z5G53124x9e8blO/6t65RmZjFuhEmYi3WJcfKiRd8Mm8WIblxAthDdfzE9cv+I4Qpqt1Ckl3GJUSyV0+YsGMVo0Vnfwzxcz0t6KyvCj62dMOf8rsa6z4uhYXaaKa/RZjGKZI8v6w5g1qEDGHPjqowITzqamiNb4KWRu3ojvYxLjF+BGLVL9bABDKqzzr9h/oN2RAL69/UXPP6/d058gv+K71V2CDHC0sve+od2JqOHdkyNC5GrhBeqZgrZfFiduSImzRvvZVxi/IwZ79PooR1cZ0HimiZ2sCXiwkYYXFcvwnwo2PdgBTd8UmWHEKPIeXq5/kHvbSeU7to1Lkx4SDtXdB8QW0I7TKCGdSy8jEmMp5hAl8OAFiOys8SODrHdqaPj7rAoWD0J/gpjW8SnE9xQObWGEKNzjtvsT3I60NC4CKXqHvItfHlTthCELP6EoZlEpwPFBB7Tr3/Ez8AgOwvG+Pp166FsiLoAA6f3KY1fh5lpzkVuKNuwCcCIcT+3OZekGA2Ni5AKdgNNeSmOgTrbC9jd8JIVYx/ryZhurngxIjtrEKYN1fsu2RF14R+8pJ5qX8vYVvHpUW6onFvDiPGf8G98KkExGhoXgMn3RkwGJizGM4y9LuanlY/yNmLEdhZsSaUfT8ITdWGd3oWF1RRfaLYq2xwjRrH+dl+CYjQ0rop7gSmVCqy55FJhJUEzq4gfBV6HempMVIzb+QYQMD+tmRxCinEjvrNg5aomTcEKm8z8A6GNJOCR7yGFIUqMy7nRkcZadiBwL41Zb1FBrhg8IJZgeIf/OoVaNZ2sGC8wnoIPN9c+tRVKjBd27PrXDz9gOwtmDnU7qFlgc74OMhbsaPlvbvmKwhAlRkjf7FnagGJ00vzVGrACIVPNWoQ3WMKwThtyD+UkxehGlD/689PqxNcY1sA4/7l06VLoSQC2z7sCqwO3hLbm+i+3fENhiBKjeMCpNKIYnZJ7/cuziW7kHJr3a+nIOa3u4Tqx4XSSYlzFes473oKQn5RWMYhxNq9ogKWqXwY7oXkZlqpFkSgxigVtrCHFmOdJHE3FbHt415psIQNBdgdqBT/eyzjEmHbDF/4TRjkuK83G0brpKaEdfi5wS9WKRZwYVzeuGJ0WuCx2ROf9MmzY1WFGt9/3aLyMQ4w7vf3rjsGc/88qs7jEGFo0v/MKibGHna0WYMXiVrkhTozdDSzGbKGYq+7UWCXtZIvKPb5G6WUMYsxC+MK5hdsNqeziuk2HYiQ412Oy8ZP2fO2JLBeDZSwr5ZY4MTpnG1eMrhBb3ai6Ix+ms9jMr5nol24kJ8bDEL5wnuV2C1V2cQQw8KhfLcK8oWaptg0W5+v5yJz4U9xU8f4NpBh/amAx5iosNTI9JwNhDTJLAu9lDGK8LMIXl439motELGKEJP29fmkzLxUNzmOxOF8vRJaLQcbGE3JLpBgPxibGA/eO3NcTqEOMbszcFl2BINYaYId1LLwcKcbTD0gWn2jF+EtoJ2OYLZa8BAaIQ4xDvCb4j4RUCd1bQ2ywOF8rIrqBDXMmyS2RYhTbnMQgxmO9iA3mLcXolFhnNKWbrzVI27zBEunlSDF2ySb9tWKcHtp++5LuPh2HGGGvibI3zD0b7tKqyQ9bwIXgHQtvaRTmzApe38KBhfhleQQDYlQkpE9nPUFSrsjAk70GxtHvFACnuboNYUb3tgNc42pJ8eGd0AoELswceljHwksQYzVB5qI0A0XXG9lwswZBHopXb4AYt8nr0J31Kq9aApk681/knzGL0xDsPgiPo9v9EXUIleTDVLMX8DYGV7GBBSCkzyRx1MkF8NzynHSO6DE3all/0itsg2Os2Cwz7P4fr+uR5lTvgj32Lx9fILh0VnqaLRonpcVVX7YQDHC3VWyGddBeOt3wupjeXzyzlYtlYtT1Rrer5u3BeTgNu0B3fSGz3At7Di+RZVJYdNb5o7zu7P2LPr8XtlBdFtMCaniBCMd/IFUvJ/De0PWdV+zzv1m7VYJ/0B6JUH+Gmt7TonREGJYlr3j41j++5B0f/gBlGMle6BaNk5ITwzte8Jy2G9ZBeynbmrRGjLre8A4wT5REAOOytNZysn+Ur2vrbDpr41DY2cMxhdJiq3ouBz89GHySJfie9yy/FcXBwJd5NaZl/6CSd4vBSq4gG9PrgbLkRn3CP75kzCzSFx4zas3wjVMwkbUEKxBgUrrd5l2qSC/XS8xq8gN1veEdwHue3Opb3lxredSvk+zgaNdZ3UOL4Qv9Rz9BvY9xdEDLDpntrkqsG8eHd7wVCBn3o82wzlVPAyhhD/x7jKHaryTWjcvz4R1YgQBrDYavpTeeN4ISboSr7x1X1Icxw7pxTe5lEZIj+AZ4adzS/fFCIygBAvfyzh+vqBNjhW3jsgzSxlI8nSxXtBnWGQc0ghL2wXoA5L40Vxu2jcvwwcVCW0eFb9yIW7o/fmgEJRzbtvy1ri7NnvlXM5aNyxWKfAWCG0VncYuwxhXjWglXIWnW7jjNMCltMaxDEGMBX4GQslhrQBBjRh7eEZLrQC/dJ4gxo4UHLplra1iHaFD4FHWW4XZkJIixJcNa22ymtAli7KgY359KEAmRH6sXNxKENU0Waw0IYkzJUvRCEARBEARBEARBEARBEARBEARBEARBEARBEMRVxv8B9/XktSVhGzYAAAAASUVORK5CYII="/>
</svg>
             */}
          </Button>
          {/* yooooooooooooo */}
          <Hidden mdDown> 
            {tabs}
          </Hidden>
          <Hidden lgUp>
            {drawer}
          </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.headerMargin} />
    </React.Fragment>
  )
}
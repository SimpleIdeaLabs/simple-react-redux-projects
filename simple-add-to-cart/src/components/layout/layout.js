import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
  
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class Layout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="title" color="inherit" noWrap>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              My Cart Sample Implementation with React / Redux
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {this.props.children}
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Created By - <a href="https://github.com/MarkMatute">Mark Ernest R. Matute</a>
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
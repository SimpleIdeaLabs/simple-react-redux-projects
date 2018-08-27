import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { 
  getPhotos,
  addToCart 
} from '../../actions/photosActions';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
});

class Album extends React.Component {

  constructor(props) {
    super(props);

    this.onAddToCart = this.onAddToCart.bind(this);
  }

  componentWillMount() {
    this.props.getPhotos();
  }

  onAddToCart(photo) {
    this.props.addToCart(photo);

    // Todo Change to good alret
    alert('Photo added to cart!');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      console.log(nextProps);
    }
  }

  render() {
    const { classes, photos } = this.props;

    return (
      <React.Fragment>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                My Album With Checkout
              </Typography>
              <Typography variant="title" align="center" color="textSecondary" paragraph>
                Lorem Blah Blah Blah
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
                        Go to cart[{this.props.cart_items.length}]
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {photos.map(photo => (
                <Grid item key={photo.id} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={photo.photo}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="headline" component="h2">
                        {photo.heading }
                      </Typography>
                      <Typography>
                        {photo.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={() => this.onAddToCart(photo)}>
                      Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos.list,
    cart_items: state.photos.cart_items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPhotos,
    addToCart
  }, dispatch);
}

const homeWithStyle = withStyles(styles)(Album);
export default connect(mapStateToProps, mapDispatchToProps)(homeWithStyle);
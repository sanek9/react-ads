import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';
import burnIcon from '../icons/fire.svg'
import alertIcon from '../icons/alert.svg'



const styles = theme => ({
  root: {
    // overflow: 'hidden',
    // padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    '&:hover':{
      // backgroundColor: 'red',
    },
    // margin: theme.spacing.unit,
    // padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    // marginLeft: 'auto',
    // [theme.breakpoints.up('sm')]: {
    //   marginRight: -8,
    // },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  mt:{
    marginTop: theme.spacing.unit,
  },
  ml:{
    marginLeft: theme.spacing.unit,
  },
});

  function Item (props) {
    const {name, text} = props;
  return(
  <Grid container direction='column'>
    <Grid item >
    <Typography
      align='left'
      color='textSecondary'
      variant='caption' >
      {name}
    </Typography>
    </Grid>
    <Grid item>
    <Typography align='left' style={{marginLeft:4}}>
      {text}
    </Typography>
    </Grid>
  </Grid>);
};
class Order extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
            // <Paper  >
      <Paper className={classes.paper} >
        <Grid container spacing={8}
          direction='column'>
          <Grid item>
            <Grid container spacing={8}
              direction='row'
              justify='space-between'
              alignItems='center'>
              <Grid item>
                <Typography>
                  {"N2132"}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                  <img src={burnIcon} width='24px' ></img>
                </IconButton>
                <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                  <img src={alertIcon} width='24px' ></img>
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                  onClick={this.handleExpandClick}>
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={8} >
              <Grid item
              md={2}>
              <Item name='Дата' text='10.10.2018'/>
              <Item name='Время' text='10:30'/>
              </Grid>
              <Grid item container spacing={8}
                md={7}>
                <Grid item xs={12} md={6}>
                  <Item name='Потребитель' text='Иванов Иван Иванович'/>
                </Grid>
                <Grid item xs={12}  md={6}>
                  <Item name='Телефон' text='+375 xx xxx xx xx'/>
                </Grid>
                <Grid item xs={12}  md={6}>
                  <Item name='Адрес' text='text фывф фывф авм фвыфыв'/>
                </Grid>
                <Grid item xs={12}  md={12}>
                  <Item name='Характер извещения' text='text фывф фывф авм фвыфыв'/>
                </Grid>
              </Grid>
              <Grid item
              xs={12}
              md={3}>
                <Item name='Мастер' text='Иванов Иван Иванович'/>
                <Item name='Слесарь' text='Иванов Иван Иванович'/>
                <Item name='Водитель' text='Иванов Иван Иванович'/>
              </Grid>
              <Grid item md={12}>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>

                <Grid  container className={classes.mt} spacing={8}>
                <Grid item
                  md={2}>
                  <Item name='Время выезда' text='10.30'/>
                  <Item name='Время прибытия' text='10:30'/>
                  <Item name='Время выполнения' text='10:30'/>
                </Grid>
                <Grid item
                  md={10}>
                    <Item name='Обнаружено' text='text фывф фывф авм фвыфыв'/>
                    <Item name='Выполнено' text='text фывф фывф авм фвыфыв'/>
                    <Item name='Примечание' text='text фывф фывф авм фвыфыв'/>
                </Grid>
                </Grid>
                </Collapse>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(Order);
// export default Order;

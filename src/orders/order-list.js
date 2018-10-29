import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Order from './order.js'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  paper: {
    maxWidth: 600,
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 2,
  },
});

class OrderList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return(
      <Grid className={classes.wrapper}
       container
       spacing={16}
       direction='column' >
         {this.props.orders.map((order, i) =>
           <Grid key={i} item>
              <Order order={order} />
           </Grid>

        )}
      </Grid>
    )
  }
}
//export default OrderList;
export default withStyles(styles)(OrderList);

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
    this.state = {orders: props.orders};
  };
  edit = (id , o)=>{

    let orders = [...this.state.orders];
    orders[id]=o;
    console.log(orders);
    this.setState({orders:orders});
  }
  render() {
    const { classes } = this.props;
    let arr = this.state.orders.map((e,i) =>[i,e]).sort((a,b)=>a[1].number>b[1].number);
    return(
      <Grid className={classes.wrapper}
       container
       spacing={16}
       direction='column' >
         {arr.map((item) =>
           <Grid key={item[0]} item>
              <Order order={item[1]} edit={(o) => this.edit(item[0], o)} />
           </Grid>

        )}
      </Grid>
    )
  }
}
//export default OrderList;
export default withStyles(styles)(OrderList);

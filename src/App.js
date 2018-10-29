import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderList from './orders/order-list.js';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {


  render() {
    const orders = {
      "data": [
        {
          "abonent": "",
          "address_id": 3738415,
          "area": {
            "id": 6,
            "name": "\u041f\u043e\u043b\u043e\u0446\u043a\u0438\u0439",
            "original_id": 1,
            "region_id": 3
          },
          "area_id": 6,
          "contracts": [
            {
              "firstname": "\u0422",
              "ibn": "\u0410",
              "id_address": 3738415,
              "id_contract": 1115381,
              "id_type_gas": "pg",
              "lastname": "\u0411\u041e\u0413\u0414\u0410\u041d\u041e\u0412\u0421\u041a\u0410\u042f",
              "number_abonent": 20142,
              "pokaz": 0,
              "sad": 62.12
            }
          ],
          "corps": "2",
          "date": 1539172255,
          "day_part": null,
          "description": {
            "deleted": 0,
            "id": 11058,
            "name": "\u0417\u0430\u043f\u0430\u0445 \u0433\u0430\u0437\u0430 \u043d\u0430 \u043a\u0443\u0445\u043d\u0435",
            "region_id": 14,
            "type_id": 2568,
            "value": "\u0417\u0430\u043f\u0430\u0445 \u0433\u0430\u0437\u0430 \u043d\u0430 \u043a\u0443\u0445\u043d\u0435"
          },
          "description_id": 11058,
          "driver": {
            "deleted": 0,
            "employee_id": "4446677",
            "id": 1040,
            "name": "\u0411\u044b\u043a\u043e\u0432 \u041e.\u0410.",
            "post": {
              "id": 3,
              "name": "\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"
            },
            "post_id": 3,
            "region_id": 3,
            "value": "\u0411\u044b\u043a\u043e\u0432 \u041e.\u0410."
          },
          "driver_id": 1040,
          "equipments": [
            {
              "date_last_service": null,
              "id_contract": 1115381,
              "id_equipment": 1723500,
              "id_type_obj": "cooker",
              "juridical": "",
              "make": "Gefest",
              "model": "6500-03",
              "serial": "1607828754",
              "type_last_service": "",
              "type_obj": "\u043f\u043b\u0438\u0442\u0430",
              "year_release": 2016
            }
          ],
          "fio": "\u0411\u043e\u0433\u0434\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u0422.\u0410.",
          "fitter": {
            "deleted": 0,
            "employee_id": "4446761",
            "id": 488,
            "name": "\u0428\u0430\u0445\u043b\u0430\u043d\u0441\u043a\u0438\u0439 \u0421.\u041a.",
            "post": {
              "id": 2,
              "name": "\u0421\u043b\u0435\u0441\u0430\u0440\u044c"
            },
            "post_id": 2,
            "region_id": 3,
            "value": "\u0428\u0430\u0445\u043b\u0430\u043d\u0441\u043a\u0438\u0439 \u0421.\u041a."
          },
          "fitter_id": 488,
          "flat": "14",
          "floor": "4",
          "gas": {
            "id": 1,
            "name": "\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439"
          },
          "gas_id": 1,
          "house": "7",
          "id": 280063,
          "instructions": [],
          "kind": "A",
          "master": null,
          "master_id": null,
          "note": null,
          "np": {
            "id": "0_9393",
            "name": "\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a",
            "region": 3,
            "region_id": 3,
            "selsov_id": 0,
            "type": {
              "id": 112,
              "name": "\u0433."
            },
            "type_id": 112
          },
          "np_id": "0_9393",
          "number": 2453,
          "operator": {
            "deleted": 0,
            "employee_id": "6084265",
            "id": 1833,
            "name": "\u041e\u0431\u0443\u0445\u043e\u0432\u0438\u0447 \u041e.\u041b.",
            "post": {
              "id": 1,
              "name": "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"
            },
            "post_id": 1,
            "region_id": 3,
            "value": "\u041e\u0431\u0443\u0445\u043e\u0432\u0438\u0447 \u041e.\u041b."
          },
          "operator_id": 1833,
          "organization": "\u0416\u0438\u043b\u043e\u0439 \u0434\u043e\u043c",
          "phone": "58-20-50",
          "porch": "1",
          "preorder_id": null,
          "region": "\u041f\u043e\u043b\u043e\u0446\u043a\u0433\u0430\u0437",
          "region_id": 3,
          "status": 1,
          "street": {
            "deleted": 0,
            "id": "0_8187",
            "name": "\u041c\u043e\u043b\u043e\u0434\u0451\u0436\u043d\u0430\u044f",
            "np": {
              "id": "0_9393",
              "name": "\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a",
              "region": 3,
              "region_id": 3,
              "selsov_id": 0,
              "type": {
                "id": 112,
                "name": "\u0433."
              },
              "type_id": 112
            },
            "np_id": "0_9393",
            "type": {
              "id": 11,
              "name": "\u0423\u043b\u0438\u0446\u0430",
              "short": "\u0443\u043b."
            },
            "type_id": 11
          },
          "street_id": "0_8187",
          "time_ai": null,
          "time_ao": null,
          "time_bi": null,
          "time_bo": null,
          "to": null,
          "type": {
            "deleted": 0,
            "id": 2568,
            "name": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434",
            "region_id": null,
            "value": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434"
          },
          "type_id": 2568,
          "whatdo": null,
          "whatwas": null
        },
        {
      "abonent": "",
      "address_id": 2074863,
      "area": null,
      "area_id": null,
      "contracts": [
        {
          "firstname": "\u041e",
          "ibn": "\u041f",
          "id_address": 2074863,
          "id_contract": 3234058,
          "id_type_gas": "pg",
          "lastname": "\u0427\u0423\u0427\u041c\u0410\u041d",
          "number_abonent": 3876,
          "pokaz": 8662,
          "sad": 0.0
        }
      ],
      "corps": null,
      "date": 1539170965,
      "day_part": null,
      "description": {
        "deleted": 0,
        "id": 11039,
        "name": "\u0417\u0430\u043f\u0430\u0445 \u0433\u0430\u0437\u0430 \u0432 \u0436\u0438\u043b\u043e\u043c \u0434\u043e\u043c\u0435",
        "region_id": null,
        "type_id": 2568,
        "value": "\u0417\u0430\u043f\u0430\u0445 \u0433\u0430\u0437\u0430 \u0432 \u0436\u0438\u043b\u043e\u043c \u0434\u043e\u043c\u0435"
      },
      "description_id": 11039,
      "driver": {
        "deleted": 0,
        "employee_id": "4447683",
        "id": 1144,
        "name": "\u0413\u043c\u044b\u0440\u0430\u043a \u0418.\u041d",
        "post": {
          "id": 3,
          "name": "\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"
        },
        "post_id": 3,
        "region_id": 9,
        "value": "\u0413\u043c\u044b\u0440\u0430\u043a \u0418.\u041d"
      },
      "driver_id": 1144,
      "equipments": [
        {
          "date_last_service": 1502053200,
          "id_contract": 3234058,
          "id_equipment": 3234061,
          "id_type_obj": "boiler",
          "juridical": "\u0414\u043e\u043a\u0448\u0438\u0446\u043a\u0438\u0439 \u0420\u0413\u0421",
          "make": "\u0410\u043b\u044c\u0444\u0430-\u041a\u0430\u043b\u043e\u0440",
          "model": "\u0410\u041e\u0413\u0412-24-\u0417\u041f",
          "serial": "79351",
          "type_last_service": "\u0421\u0422\u041e",
          "type_obj": "\u041a\u043e\u0442\u0435\u043b",
          "year_release": 2013
        },
        {
          "date_last_service": null,
          "id_contract": 3234058,
          "id_equipment": 3234062,
          "id_type_obj": "cooker",
          "juridical": "\u0414\u043e\u043a\u0448\u0438\u0446\u043a\u0438\u0439 \u0420\u0413\u0421",
          "make": "Gefest",
          "model": "3200-06",
          "serial": "217351",
          "type_last_service": "",
          "type_obj": "\u043f\u043b\u0438\u0442\u0430",
          "year_release": 2014
        },
        {
          "date_last_service": null,
          "id_contract": 3234058,
          "id_equipment": 3234063,
          "id_type_obj": "meter",
          "juridical": "\u0414\u043e\u043a\u0448\u0438\u0446\u043a\u0438\u0439 \u0420\u0413\u0421",
          "make": "\u0411\u0435\u043b\u041e\u041c\u041e (\u0412\u0430\u0432\u0438\u043b\u043e\u0432\u0430)",
          "model": "\u0421\u0413\u0414-3\u0422 G-6",
          "serial": "4430636",
          "type_last_service": "",
          "type_obj": "\u0441\u0447\u0435\u0442\u0447\u0438\u043a",
          "year_release": 2014
        },
        {
          "date_last_service": null,
          "id_contract": 3234058,
          "id_equipment": 3756586,
          "id_type_obj": "pc",
          "juridical": "",
          "make": "\u0420\u0414\u0413\u0414",
          "model": "\u041c-2,0",
          "serial": "5620",
          "type_last_service": "",
          "type_obj": "\u0420\u0414",
          "year_release": 2014
        }
      ],
      "fio": "\u0427\u0443\u0447\u043c\u0430\u043d \u041e \u041f",
      "fitter": {
        "deleted": 0,
        "employee_id": "4447684",
        "id": 605,
        "name": "\u0416\u0430\u0432\u043d\u0435\u0440\u043a\u043e \u0410.\u0412.",
        "post": {
          "id": 2,
          "name": "\u0421\u043b\u0435\u0441\u0430\u0440\u044c"
        },
        "post_id": 2,
        "region_id": 9,
        "value": "\u0416\u0430\u0432\u043d\u0435\u0440\u043a\u043e \u0410.\u0412."
      },
      "fitter_id": 605,
      "flat": null,
      "floor": null,
      "gas": null,
      "gas_id": null,
      "house": "60",
      "id": 280062,
      "instructions": [
        {
          "date_instruction": 1526418000,
          "id_instruction": 349389,
          "id_obj": 2074863,
          "id_trainer": 126,
          "number_doc": "325",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 216,
            "id_trainer": 126,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1507928400,
          "id_instruction": 284750,
          "id_obj": 2074863,
          "id_trainer": 344,
          "number_doc": "1665",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 193,
            "id_trainer": 344,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1491166800,
          "id_instruction": 240911,
          "id_obj": 2074863,
          "id_trainer": 353,
          "number_doc": "522",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 295,
            "id_trainer": 353,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1467147600,
          "id_instruction": 181232,
          "id_obj": 2074863,
          "id_trainer": 353,
          "number_doc": "1582",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 295,
            "id_trainer": 353,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1463346000,
          "id_instruction": 175872,
          "id_obj": 2074863,
          "id_trainer": 539,
          "number_doc": "1117",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 1033,
            "id_trainer": 539,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1448398800,
          "id_instruction": 160965,
          "id_obj": 2074863,
          "id_trainer": 353,
          "number_doc": "2202",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 295,
            "id_trainer": 353,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1444597200,
          "id_instruction": 157829,
          "id_obj": 2074863,
          "id_trainer": 360,
          "number_doc": "1929",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 186,
            "id_trainer": 360,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1431205200,
          "id_instruction": 147266,
          "id_obj": 2074863,
          "id_trainer": 344,
          "number_doc": "752",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 193,
            "id_trainer": 344,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1428526800,
          "id_instruction": 144836,
          "id_obj": 2074863,
          "id_trainer": 353,
          "number_doc": "633",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 295,
            "id_trainer": 353,
            "n_profic": 11
          }
        },
        {
          "date_instruction": 1419541200,
          "id_instruction": 133916,
          "id_obj": 2074863,
          "id_trainer": 230,
          "number_doc": "\u0431/\u043d",
          "remark": "",
          "trainer": {
            "cod_sostav_s": 674,
            "id_trainer": 230,
            "n_profic": 11
          }
        }
      ],
      "kind": "A",
      "master": {
        "deleted": 0,
        "employee_id": "4449294",
        "id": 1528,
        "name": "\u042e\u0447\u043a\u043e\u0432\u0438\u0447 \u041d.\u0418.",
        "post": {
          "id": 4,
          "name": "\u041c\u0430\u0441\u0442\u0435\u0440"
        },
        "post_id": 4,
        "region_id": 9,
        "value": "\u042e\u0447\u043a\u043e\u0432\u0438\u0447 \u041d.\u0418."
      },
      "master_id": 1528,
      "note": null,
      "np": {
        "id": "0_4890",
        "name": "\u0414\u043e\u043a\u0448\u0438\u0446\u044b",
        "region": 9,
        "region_id": 9,
        "selsov_id": 0,
        "type": {
          "id": 112,
          "name": "\u0433."
        },
        "type_id": 112
      },
      "np_id": "0_4890",
      "number": 500,
      "operator": {
        "deleted": 0,
        "employee_id": "4447403",
        "id": 167,
        "name": "\u0428\u0438\u043d\u043a\u0435\u0432\u0438\u0447 \u041e.\u0412.",
        "post": {
          "id": 1,
          "name": "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"
        },
        "post_id": 1,
        "region_id": 9,
        "value": "\u0428\u0438\u043d\u043a\u0435\u0432\u0438\u0447 \u041e.\u0412."
      },
      "operator_id": 167,
      "organization": "\u0416\u0438\u043b\u043e\u0439 \u0434\u043e\u043c",
      "phone": "2-18-29",
      "porch": null,
      "preorder_id": null,
      "region": "\u0414\u043e\u043a\u0448\u0438\u0446\u043a\u0438\u0439 \u0420\u0413\u0421",
      "region_id": 9,
      "status": 1,
      "street": {
        "deleted": 0,
        "id": "0_2636",
        "name": "\u041c\u0438\u0446\u043a\u0435\u0432\u0438\u0447\u0430",
        "np": {
          "id": "0_4890",
          "name": "\u0414\u043e\u043a\u0448\u0438\u0446\u044b",
          "region": 9,
          "region_id": 9,
          "selsov_id": 0,
          "type": {
            "id": 112,
            "name": "\u0433."
          },
          "type_id": 112
        },
        "np_id": "0_4890",
        "type": {
          "id": 11,
          "name": "\u0423\u043b\u0438\u0446\u0430",
          "short": "\u0443\u043b."
        },
        "type_id": 11
      },
      "street_id": "0_2636",
      "time_ai": null,
      "time_ao": null,
      "time_bi": null,
      "time_bo": null,
      "to": {
        "date": 1502053200,
        "juridical": "\u0414\u043e\u043a\u0448\u0438\u0446\u043a\u0438\u0439 \u0420\u0413\u0421",
        "type": "\u0421\u0422\u041e"
      },
      "type": {
        "deleted": 0,
        "id": 2568,
        "name": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434",
        "region_id": null,
        "value": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434"
      },
      "type_id": 2568,
      "whatdo": null,
      "whatwas": null
    }, 
      ]};
    const { classes } = this.props;
    return (
      <div className="App">
      <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
        <OrderList orders={orders['data']} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
//export default App;

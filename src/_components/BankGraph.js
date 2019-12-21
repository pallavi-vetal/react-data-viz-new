import React, { PureComponent } from 'react';
import {
   XAxis, YAxis, CartesianGrid, Tooltip,Area,AreaChart
} from 'recharts';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBankDetails } from "../_actions/bankActions";

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

class BankGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  componentDidMount(){
      this.props.fetchBankDetails();
  }
  group_by_month(data) {
    var result = []
    for (var i=0; i<data.length; i++) {
       var obj = data[i];
       var date = new Date(obj.Date);
       var month = date.getMonth();
       if(obj["Deposit AMT"]){
         var depostAmt = parseInt(obj["Deposit AMT"])
         var newObj = [date,
          depostAmt
         ]
         result.push(newObj);
       }
    }
    return result;
 }
  render() {
      var result = this.group_by_month(this.props.details.details)
      console.log(result)
    return (
      <AreaChart width={900} height={250} data={this.props.details.details}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="Date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="Deposit AMT" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="Balance AMT" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    );
  }
}
BankGraph.propTypes = {
    details: PropTypes.object.isRequired,
    fetchBankDetails: PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    details: state.details
  });
  export default connect(mapStateToProps, { fetchBankDetails })((BankGraph));
  
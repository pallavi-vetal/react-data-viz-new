import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBankDetails } from "../_actions/bankActions";
import { withStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};
const styles = theme => ({});

class BankDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5
    };
  }
  componentDidMount() {
    this.props.fetchBankDetails();
  }
  componentWillMount() {
    this.props.fetchBankDetails();
  }

  render() {
    const columns = [
      {
        title: "Account No",
        field: "Account No",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Date",
        field: "Date",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Transaction Details",
        field: "Transaction Details",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Value Date",
        field: "Value Date",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Withdrawal AMT",
        field: "Withdrawal AMT",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Deposit AMT",
        field: "Deposit AMT",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      },
      {
        title: "Balance AMT",
        field: "Balance AMT",
        headerStyle: {
          backgroundColor: "#808080",
          color: "#ffffff"
        }
      }
    ];
    return (
      <div>
        <MaterialTable
          title="Bank Details"
          columns={columns}
          data={this.props.details.details}
          icons={tableIcons}
          options={{
            sorting: true,
            filtering: true
          }}
        />
      </div>
    );
  }
}
BankDetails.propTypes = {
  details: PropTypes.object.isRequired,
  fetchBankDetails: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  details: state.details
});
export default connect(mapStateToProps, { fetchBankDetails })(
  withStyles(styles)(BankDetails)
);

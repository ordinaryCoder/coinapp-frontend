import React from "react";
import ReactHighcharts from "react-highcharts/ReactHighcharts.src";
import priceData from "../assets/btcdata.json";
import moment from "moment";
import axios from "axios";

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoChartData: [],
      interval: "d1",
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(id) {
    axios
      .get(
        `https://api.coincap.io/v2/assets/${id}/history?interval=${this.state.interval}`
      )
      .then((res) => {
        console.log("Chart response", res);
        // this.setState({
        //   cryptoChartData: res.data.data,
        // });
      })
      .catch((err) => {
        console.log("chart err", err);
      });
  }

  componentDidMount() {
    this.fetchData(this.props.id);
  }

  componentDidUpdate() {
    this.fetchData(this.props.id);
  }

  render() {
    const options = { style: "currency", currency: "USD" };
    const numberFormat = new Intl.NumberFormat("en-US", options);

    const configPrice = {
      yAxis: [
        {
          offset: 20,

          labels: {
            formatter: function () {
              return numberFormat.format(this.value);
            },
            x: -15,
            style: {
              color: "#000",
              position: "absolute",
            },
            align: "left",      
          },
        },
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          return (
            numberFormat.format(this.y, 0) +
            "</b><br/>" +
            moment(this.x).format("MMMM Do YYYY, h:mm")
          );
        },
      },
      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,
        },
      },
      rangeSelector: {
        selected: 1,
      },
      title: {
        text: `Bitcoin stock price`,
      },
      chart: {
        height: 600,
      },

      credits: {
        enabled: false,
      },

      legend: {
        enabled: true,
      },
      xAxis: {
        type: "date",
      },
      rangeSelector: {
        buttons: [
          {
            type: "day",
            count: 1,
            text: "1d",
          },
          {
            type: "day",
            count: 7,
            text: "7d",
          },
          {
            type: "month",
            count: 1,
            text: "1m",
          },
          {
            type: "month",
            count: 3,
            text: "3m",
          },
          {
            type: "all",
            text: "All",
          },
        ],
        selected: 4,
      },
      series: [
        {
          name: "Price",
          type: "spline",

          data: priceData.price,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    };

    return (
      <div id="chart">
        <div className="toolbar pl-15">
          <button
            id="one_month"
            onClick={() => this.updateData("one_month")}
            className={this.state.selection === "one_month" ? "active" : ""}
          >
            1M
          </button>
          &nbsp;
          <button
            id="six_months"
            onClick={() => this.updateData("six_months")}
            className={this.state.selection === "six_months" ? "active" : ""}
          >
            6M
          </button>
          &nbsp;
          <button
            id="one_year"
            onClick={() => this.updateData("one_year")}
            className={this.state.selection === "one_year" ? "active" : ""}
          >
            1Y
          </button>
          &nbsp;
          <button
            id="ytd"
            onClick={() => this.updateData("ytd")}
            className={this.state.selection === "ytd" ? "active" : ""}
          >
            YTD
          </button>
          &nbsp;
          <button
            id="all"
            onClick={() => this.updateData("all")}
            className={this.state.selection === "all" ? "active" : ""}
          >
            ALL
          </button>
        </div>

        <div id="chart-timeline">
          <ReactHighcharts config={configPrice}></ReactHighcharts>
        </div>
      </div>
    );
  }
}
export default CryptoChart;

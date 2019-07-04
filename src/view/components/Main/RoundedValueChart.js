import React from 'react';

class RoundedValueChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            canvasId: "chartCard_" + this.props.id,
            minValueId: "minValChart_" + this.props.id,
            maxValueId: "maxValChart_" + this.props.id,
            valueId: "valChart_" + this.props.id,
            marginValueMM: 60,
            chart: undefined,
            lastChartData: []
        }

        this.calcReturnDataDatasets = this.calcReturnDataDatasets.bind(this);
        this.setDimensionsChart = this.setDimensionsChart.bind(this);
    }

    componentDidMount() {
        let that = this;
        let canvasId = this.state.canvasId;

        let data = {
            datasets: [
                {
                    data: that.calcReturnDataDatasets(),
                    backgroundColor: [
                        "rgb(251, 140, 0)"
                    ]
                }]
        };

        this.state.chart = new Chart(
            document.getElementById(canvasId),
            {
                type: 'doughnut',
                data: data,
                options: {
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI,
                    tooltips: {
                        enabled: false
                    },
                    animation: {
                        duration : 2000
                    }
                }
            }
        );

        this.setDimensionsChart();
    }

    componentDidUpdate() {
        let dataChart = this.calcReturnDataDatasets();
        let lastChartData = this.state.lastChartData;

        if (lastChartData[0] !== dataChart[0] || lastChartData[1] !== dataChart[1]) {
            this.setState({ lastChartData: dataChart });

            let chart = this.state.chart;

            chart.data.datasets[0].data = dataChart;
            chart.update(); // { duration: 0 }

            this.setDimensionsChart();
        }
    }

    calcReturnDataDatasets() {
        let value = this.props.value;
        let outValue = this.props.maxValue - value;
        if (value > this.props.maxValue) {
            value = this.props.maxValue;
            outValue = 0;
        }
        return [value, outValue];
    }

    setDimensionsChart() {
        let marginValueMM = this.state.marginValueMM;
        let chartW = $("#" + this.state.canvasId).width();
        let chartH = $("#" + this.state.canvasId).height();

        $("#" + this.state.valueId).css("top", parseInt(chartH * 0.8) + "px").css("left", function () {
            let w = (chartW / 2) - ($(this).width() / 2);
            return parseInt(w) + "px";
        });

        $("#" + this.state.minValueId).css("top", parseInt(chartH) + "px").css("left", function () {
            let w = $(this).width() / 2;
            return parseInt(marginValueMM - w) + "px";
        });

        $("#" + this.state.maxValueId).css("top", parseInt(chartH) + "px").css("left", function () {
            let w = $(this).width() / 2;
            return parseInt(chartW - marginValueMM - w) + "px";
        });
    }

    render() {
        return (
            <div>
                <div style={styles.divValue}>
                    <span id={this.state.valueId} style={{ position: "absolute" }}>{this.props.value}</span>
                    <span id={this.state.minValueId} style={{ position: "absolute" }}>0</span>
                    <span id={this.state.maxValueId} style={{ position: "absolute" }}>{this.props.maxValue}</span>
                </div>
                <div>
                    <canvas id={this.state.canvasId} width="200" height="80" />
                </div>
            </div>
        );
    }
}

const styles = {
    divValue: {
        position: "absolute"
    }
}

export default RoundedValueChart;
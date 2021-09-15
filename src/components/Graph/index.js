import React from "react";
import PropTypes from "prop-types";
import Chart from "react-google-charts";

const Graph = ({ data, title, subtitle }) => {
    return (
        <Chart
            className="mt-3"
            width={'800px'}
            height={'400px'}
            chartType="Bar"
            loader={<div>Carregando informações, aguarde...</div>}
            data={data}
            options={{
                chart: {
                title: title,
                subtitle: subtitle,
                },
                bar: { groupWidth: "90%" }
            }}
        />
    );
}

Graph.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default Graph;
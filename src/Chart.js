import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

const Chart: () => React$Node = () => {
  return (
    <VictoryChart width={350} theme={VictoryTheme.material}>
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
        animate={{
          onLoad: {duration: 2000},
        }}
      />
    </VictoryChart>
  );
};

export default Chart;

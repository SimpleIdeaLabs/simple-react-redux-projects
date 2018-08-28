import React from 'react';
import * as _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const computeAverage = (data) => {
  return _.round(_.sum(data) / data.length);
}

const Chart = (props) => {
  return (
    <React.Fragment>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{computeAverage(props.data)}{props.unit}</div>
    </React.Fragment>
  )
}

export default Chart;

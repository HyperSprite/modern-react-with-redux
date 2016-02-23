import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

// Sparklines: pass the following props
// data = an array of numbers
// color = the sparkline color
// height and width = of sparkline
// units = symbol to be displayed next to the average

export default (props) => {
  return (
    <div>
    <Sparklines height={props.height} width={props.width} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
    </div>
  );
};

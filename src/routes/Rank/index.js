import React, { Component } from 'react';
import { Chart } from "react-charts";


// class Rank extends Component {
//     render() {
//         return (
           let data= [
                [[1, 10], [2, 10], [3, 10]],
                [[1, 10], [2, 10], [3, 10]],
                [[1, 10], [2, 10], [3, 10]]
              ];
               
              <div
                style={{
                  width: "400px",
                  height: "300px"
                }}
              >
                <Chart
                  data={data}
                  axes={[
                    { primary: true, type: "linear", position: "bottom" },
                    { type: "linear", position: "left" }
                  ]}
                />
              </div>;
//         );
//    }
// }

export default Rank
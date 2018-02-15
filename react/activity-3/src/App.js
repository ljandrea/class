// "use strict";

import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            xVariable: 'Sport'
        }

    }

    updateXVar(d) {
        this.setState({
            xVariable: d
        })
    }

    componentDidMount() {
        // console.log('mounted successfully');
        d3.csv('data/medalists.csv', (err, data) => {
            this.setState({
                data: data
            })
        })
    }
    render() {
        // console.log(this.state);
        let numRows = this.state.data.length;
        let chartData = d3.nest()
            .key((d) => d[this.state.xVariable])
            .rollup((d) => d.length)
            .entries(this.state.data);
        console.log(chartData);
        return (
            <div>
                <BarChart width={600} height={300} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    <ButtonGroup>
                        {['Sport', 'Year', 'Country'].map((d) => {
                            return <Button key={'button-' + d}>{d}</Button>
                        })
                        }
                    </ButtonGroup>
                </BarChart>
            </div>
        );
    }
}

export default App;

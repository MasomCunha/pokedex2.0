import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Stats extends PureComponent {

    data = [
        {
            name: 'Hp', pv: this.props.mainData.stats[0].base_stat,
        },
        {
            name: 'Attack', pv: this.props.mainData.stats[1].base_stat,
        },
        {
            name: 'Defence', pv: this.props.mainData.stats[2].base_stat,
        },
        {
            name: 'Sp. Attack', pv: this.props.mainData.stats[3].base_stat,
        },
        {
            name: 'Sp. Defence', pv: this.props.mainData.stats[4].base_stat,
        },
        {
            name: 'Speed', pv: this.props.mainData.stats[5].base_stat,
        },
    ];


    render() {
        return (
            <div>
                <h1>Base Stats</h1>
                <BarChart
                    width={700}
                    height={300}
                    data={this.data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis domain = {[0, 200]} />
                    <Tooltip />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

export default Stats
import React, { PureComponent } from 'react';
import { Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';


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
            <div style={{ fontFamily: 'Lora, serif' }}>
                <h1>Base Stats</h1>

                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={this.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 200]} />
                    <Radar name="Pokemon" dataKey="pv" stroke="#1E3B9C" fill="#1E3B9C" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </div>
        );
    }
}

export default Stats
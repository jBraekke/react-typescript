import React, { Component } from 'react';

import Gateway from '../logic/gateway';

type Klasse = {
    id: number,
    klassekode: string,
    navn: string,
    status: string,
    endretDatoTid?: Date
}

class MeldOppContainer extends Component<{}, { klasser: Array<Klasse> }> {
    gateway: Gateway;

    constructor(props: Readonly<{}>) {
        super(props);

        this.gateway = new Gateway();

        this.state = {
            klasser: []
        }
    }

    async componentDidMount() {

        const klasser = await this.gateway.loadKlasser();

        this.setState({ klasser })
    }

    render() {
        return <>
            <p>Her kommer klassene:</p>
            <select className="klasser">
                {this.state.klasser.map((klasse: Klasse, index) => {
                    return <option key={index} value={klasse.id}>{klasse.navn}</option>
                })}
            </select>
        </>
    }
}


export default MeldOppContainer;
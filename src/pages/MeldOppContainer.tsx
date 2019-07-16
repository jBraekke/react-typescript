import React, { Component } from 'react';

import Gateway from '../logic/gateway';
import MeldOppCard from '../components/MeldOppCard';

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
            <MeldOppCard klasser={this.state.klasser}/>
        </>
    }
}


export default MeldOppContainer;
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import waitUntil from 'async-wait-until';

import apiMock from '../test/backendMock';

import MeldOppContainer from './MeldOppContainer';


describe(('render meldopp container'), () => {

    beforeAll(() => {
        apiMock;
    })

    it('renders without crashing', () => {
        const container = shallow(<MeldOppContainer />);
        expect(container.text()).to.contain('Her kommer klassene');
    });

    it('Component fetching klasser from API', async () => {
        const container = shallow(<MeldOppContainer />);
        
        await waitUntil(() => container.state('klasser') !== null);
        expect(container.state('klasser')).to.have.lengthOf(2);
    });
})

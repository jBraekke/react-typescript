import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import waitUntil from 'async-wait-until';

import apiMock from '../test/backendMock';

import MeldOppContainer from './MeldOppContainer';


describe(('render meldopp container'), () => {

    beforeAll(() => {
        apiMock;
    })

    it('renders without crashing', () => {
        const container = mount(<MeldOppContainer />);
        expect(container.exists()).to.eq(true);
    });

    it('Component fetching klasser from API', async (done) => {
        const container = mount(<MeldOppContainer />);
        
        await waitUntil(() => container.state('klasser') !== null);
        expect(container.state('klasser')).to.have.lengthOf(2);
        done();
    });
})

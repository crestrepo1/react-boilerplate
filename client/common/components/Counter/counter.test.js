import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index.js';

describe('User View Component', () => {
    it('should render correctly', () => {
        const component = shallow(<Counter />);
        expect(component).toMatchSnapshot();
    });
});

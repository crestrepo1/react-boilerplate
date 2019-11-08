import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index.js';

describe('MyComponent', () => {
    it('should render correctly', () => {
        const component = shallow(<Counter />);
        expect(component).toMatchSnapshot();
    });
});

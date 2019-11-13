import React from 'react';
import { shallow } from 'enzyme';
import UsersView from './index.js';

describe('UserView component', () => {
    it('should render correctly', () => {
        const component = shallow(<UsersView />);
        expect(component).toMatchSnapshot();
    });
});

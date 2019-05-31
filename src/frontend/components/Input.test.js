import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer'


let component;

beforeEach(()=>{
    component = shallow(<Input/>)
});

describe('<Input/> rendering', ()=>{
    it('renders correctly', ()=>{
        const component = renderer
        .create(<Input/>)
        .toJSON();
            expect(component).toMatchSnapshot();
    });
});

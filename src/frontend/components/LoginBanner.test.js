import React from 'react'
import renderer from 'react-test-renderer'
import LoginBanner from './LoginBanner'


describe('<LoginBanner/> rendering', ()=>{
    it('renders correctly', ()=>{
        const bannerComponent = renderer
        .create(<LoginBanner/>)
        .toJSON();
            expect(bannerComponent).toMatchSnapshot();
    });
});

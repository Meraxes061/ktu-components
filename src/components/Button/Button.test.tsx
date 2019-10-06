import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'

describe('Button', () => {
    it('renders correctly button which is unspecified any property', () => {
        const wrapper = shallow(<Button>No property variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--default c-button--medium')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly button which is size is small', () => {
        const wrapper = shallow(<Button size='small'>Small variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--default c-button--small')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly button which is size is medium', () => {
        const wrapper = shallow(<Button size='medium'>Medium variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--default c-button--medium')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly button which is size is large', () => {
        const wrapper = shallow(<Button size='large'>Large variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--default c-button--large')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly button which is theme is default', () => {
        const wrapper = shallow(<Button>Default variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--default c-button--medium')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly button which is theme is primary', () => {
        const wrapper = shallow(<Button theme='primary'>Primary variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--primary c-button--medium')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders correctly button which is theme is secondary', () => {
        const wrapper = shallow(<Button theme='secondary'>Secondary variation</Button>)
        expect(wrapper.find('button').hasClass('c-button c-button--secondary c-button--medium')).toEqual(true)
        expect(wrapper).toMatchSnapshot()
    })
    it('simulate click event correctly', () => {
        const mockFn = jest.fn()
        const wrapper = mount(<Button onClick={mockFn}>Simulating Click</Button>)
        wrapper.find('button').simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })

})
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { create } from 'react-test-renderer'
import Calendar from '../src/Calendar'

configure({ adapter: new Adapter() })

describe('Calendar component', () => {
    test('Match Snapshot', () => {
        const calendar = create(
            <Calendar
                reminderAreaIsOpen
            />
        )
        expect(calendar.toJSON()).toMatchSnapshot()
    })

    it('onAddReminder is called once', () => {
        const props = {
            reminderAreaIsOpen: true,
            onAddReminder: jest.fn(),
          };
        const calendar = mount(<Calendar {...props}/>)
        calendar.find('.reminder-area__add-button').simulate('click')
        expect(props.onAddReminder).toHaveBeenCalledTimes(1)
    })
})

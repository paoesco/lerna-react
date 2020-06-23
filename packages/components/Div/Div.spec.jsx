import React from 'react'
import {render} from '@testing-library/react'
import Div from './index'

describe("Div", () => {
  it('renders without crashing', () => {
    const wrapper = render(<Div>test</Div>)
    wrapper.getByText("test")
  })
})
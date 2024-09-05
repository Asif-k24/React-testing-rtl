/*
    * Greet should render the text hello and if a name is passed into the component
    * It should render hello followed by the name
*/

import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe("Greet", () => {

    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/)
        expect(textElement).toBeInTheDocument()
    })

})

describe("Nested", () => {

    test('renders a name', () => {
        render(<Greet name='Asif' />)
        const textElement = screen.getByText(/hello Asif/)
        expect(textElement).toBeInTheDocument()
    })

})
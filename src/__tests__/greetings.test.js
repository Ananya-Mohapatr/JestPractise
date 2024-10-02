import {render,screen,afterEach,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Greetings from  '../components/greetings' 
import App from '../App'



test('render greetings woth name',()=>{
    render(<Greetings name="Anu"/>)
    expect(screen.getByText("Hello from Anu !!")).toBeInTheDocument()
})
test('renders greetings for multiple names',()=>{
    render(<App/>)
    expect(screen.getByText("Hello from Ananya !!")).toBeInTheDocument()
    expect(screen.getByText("Hello from Anju !!")).toBeInTheDocument()
})
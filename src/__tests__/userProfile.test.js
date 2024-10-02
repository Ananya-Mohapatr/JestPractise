import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfile from '../components/userProfile'
test('should render components based on provided props',()=>{
    render(<UserProfile user={{"name":'Anu',"email":'anu@gm.com'}}/>)
    expect(screen.getByText('Anu')).toBeInTheDocument()
    expect(screen.getByText("anu@gm.com")).toBeInTheDocument()
})
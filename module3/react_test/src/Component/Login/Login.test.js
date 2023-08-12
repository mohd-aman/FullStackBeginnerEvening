import { fireEvent, render,screen } from "@testing-library/react"
import Login from "./Login"


test("Check for input username is there",()=>{
    render(<Login/>);
    const userNameElem = screen.getByPlaceholderText('UserName');
    expect(userNameElem).toBeInTheDocument();
})

test("Check for input password is there",()=>{
    render(<Login/>)
    const passElem = screen.getByPlaceholderText("Password");
    expect(passElem).toBeInTheDocument();
})

test("Check for button is there",()=>{
    render(<Login/>);
    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toBeInTheDocument();
})

test("check userName at the start should be empty",()=>{
    render(<Login/>);
    const userElem = screen.getByPlaceholderText("UserName");
    expect(userElem.value).toBe("");
})

test("check password to be empty at start",()=>{
    render(<Login/>);
    const passElem = screen.getByPlaceholderText("Password");
    expect(passElem.value).toBe("");
})

test("Button is disabled when there is no data",()=>{
    render(<Login/>);
    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toBeDisabled();
})


test("Check for correct data received for userName",()=>{
    render(<Login/>);
    const userNameInputElem = screen.getByPlaceholderText(/username/i);
    const testValue = "Aman";
    fireEvent.change(userNameInputElem,{target:{value:testValue}});
})
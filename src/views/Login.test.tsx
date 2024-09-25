import { render, screen } from "@testing-library/react";
import { Login } from "./Login";


test("If Child1 is rendered!", () => {
    render(<Login />)

    expect(screen.getByText('Email')).toBeDefined()
})
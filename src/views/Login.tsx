import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email)
        console.log(password)
    }

    return <>
        <form className="formSlate" onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor={'email'}>Email</label>
            <input name="email" placeholder="write your email" type="email" onChange={(ev) => {
                setEmail(ev.target.value)
                }} />
            <label htmlFor={'password'}>Password</label>
            <input name="password" placeholder="write your secret password" type="password"  onChange={(ev) => {
                setPassword(ev.target.value)
                }}/>
            <button className="submitSlate" onClick={handleSubmit}>Login</button>
        </form>    
    </>
}
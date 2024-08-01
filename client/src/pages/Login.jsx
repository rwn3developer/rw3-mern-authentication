import { useState } from "react";
import Header from "../components/Header";

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("hiii")
        console.log(email);
        console.log(password);

    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={ (e) => setEmail(e.target.value) } className="form-control"/>
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={ (e) => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" />
                            </div>
                          
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login;
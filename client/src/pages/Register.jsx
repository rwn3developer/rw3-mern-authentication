import { useState } from "react";
import Header from "../components/Header";

const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [city,setCity] = useState("")
    const [phone,setPhone] = useState("");
    const [image,setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("hiii")
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(city);
        console.log(phone);
        console.log(image);

    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" onChange={ (e) => setName(e.target.value) } className="form-control"/> 
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="text"  onChange={ (e) => setEmail(e.target.value) } className="form-control"/> 
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"  onChange={ (e) => setPassword(e.target.value) } className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                <input type="text"  onChange={ (e) => setCity(e.target.value) } className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="number"  onChange={ (e) => setPhone(e.target.value) } className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">File</label>
                                <input type="file"  onChange={ (e) => setImage(e.target.files[0]) } className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Register;
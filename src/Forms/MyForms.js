import { useState } from "react";

function MyForm() {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const[email,setEmail] = useState("");
    // console.log('Current State', name); 

    const [inputs, setInputs] = useState({});


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted!');
        console.log('Current State', inputs);
    }

    return <form onSubmit={handleSubmit}>
        <label> Enter Your Name:
            <input
                type="text"
                onChange={(e) => {
                    setInputs((previousState) => {
                        return { ...previousState, name: e.target.value };
                    });
                }}
            /> </label><br></br>
        <label> Enter Your Age:
            <input
                type="text"
                onChange={(e) => {
                    setInputs((prev) => ({ ...prev, age: e.target.value }));
                }}
            />
        </label>
        <br />

        <label> Enter Your Email:
            <input
                type="text"
                onChange={(e) => {
                    setInputs((prev) => ({ ...prev, email: e.target.value }));
                }}
            />
        </label>
        <br />

        <label> Enter Your Password:
            <input
                type="password"
                onChange={(e) => {
                    setInputs((prev) => ({ ...prev, password: e.target.value }));
                }}
            />
        </label>
        <br />

        <input type="submit" value="submit Form" />


    </form>
}

export default MyForm;
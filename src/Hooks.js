import React from "react";

const Hooks = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        Email: "",
        Mobile: "",
        Semester: "",
        Gender: "",
        Message: "",
        Password: "",
        Confirm: "",
        tc: "",
        a1 : '[A-Za-z]{3}',
        a2 : '[a-z0-9._%+-]+@[a-z0-9.-]+.\[a-z]{2,4}$',
    });

    const [errors, setErrors] = React.useState({});

    const onchange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formValidation = () => {
        const { username, Email, Mobile, Semester, Gender, Message, Password, Confirm,tc,a1,a2 } = formData;
        let isValid = true;
        const newErrors = {};

        if (!username) {
            newErrors.username = "Enter Name";
            isValid = false;
        } else if (username.length > 10) {
            newErrors.username = "Must be 10 characters or less";
            isValid = false;
        } else if (username.length < 2) {
            newErrors.username = "Must be 2 characters or more";
            isValid = false;
        }
        else if(!username.match(a1)){
            newErrors.username = "must be in characters...";
            isValid = false
          }

        if (!Email) {
            newErrors.Email = "Enter Email";
            isValid = false;
        }else if(!Email.match(a2)){
            newErrors.Email = "Enter your E-mail Correctly";
            isValid = false;
          }
        

        if (!Mobile) {
            newErrors.Mobile = "Enter Number";
            isValid = false;
        } else if (Mobile.length !== 10) {
            newErrors.Mobile = "Must be 10 characters";
            isValid = false;
        }

        if (!Semester || Semester === "Select") {
            newErrors.Semester = "Select your sem.";
            isValid = false;
        }

        if (!Gender) {
            newErrors.Gender = "Select Gender";
            isValid = false;
        }

        if (!Message) {
            newErrors.Message = "Type message please";
            isValid = false;
        }

        if (!Password) {
            newErrors.Password = "Enter password";
            isValid = false;
        }

        if (!Confirm) {
            newErrors.Confirm = "Re-Enter Password";
            isValid = false;
        }else if(Password !== Confirm){
            newErrors.Confirm = "Not sem...";
        }

        if(!tc){
            newErrors.tc = "Click t&c";
            isValid = false;
            
        }

        setErrors(newErrors);
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            console.log("submit", formData);
        }
    };

    return (
        <>
            <React.Fragment>
                <h2 style={{ backgroundColor: "yellow" }}>Register</h2>
                <form onSubmit={onSubmit}>
                    
                    Name : <input type="text" name="username" value={formData.username} onChange={onchange} placeholder="Enter Name" />
                    <span style={{ color: "red" }}>{errors.username}</span>
                    <br /><br />

                    Email : <input type="text" name="Email" value={formData.Email} onChange={onchange} placeholder="Enter Email" />
                    <span style={{ color: "red" }}>{errors.Email}</span>
                    <br /><br />

                    Mobile : <input type="number" name="Mobile" value={formData.Mobile} onChange={onchange} placeholder="Enter number" />
                    <span style={{ color: "red" }}>{errors.Mobile}</span>
                    <br /><br />

                    Semester : <select name="Semester" value={formData.Semester} onChange={onchange}>
                        <option>Select</option>
                        <option>Sem 1</option>
                        <option>Sem 2</option>
                        <option>Sem 3</option>
                        <option>Sem 4</option>
                    </select>
                    <span style={{ color: "red" }}>{errors.Semester}</span>
                    <br /><br />

                    Gender : <input type="radio" name="Gender" value="male" checked={formData.Gender === "male"} onChange={onchange} />male
                    <input type="radio" name="Gender" value="Female" checked={formData.Gender === "Female"} onChange={onchange} />Female
                    <span style={{ color: "red" }}>{errors.Gender}</span>
                    <br /><br />

                    Message : <textarea name="Message" value={formData.Message} onChange={onchange} placeholder="message...."></textarea>
                    <span style={{ color: "red" }}>{errors.Message}</span>
                    <br /><br />

                    Password : <input type="Password" name="Password" value={formData.Password} onChange={onchange} placeholder="Enter password" />
                    <span style={{ color: "red" }}>{errors.Password}</span>
                    <br /><br />

                    Confirm Password : <input type="Password" name="Confirm" value={formData.Confirm} onChange={onchange} placeholder="Confirm Password" />
                    <span style={{ color: "red" }}>{errors.Confirm}</span>
                    <br /><br />

                    I Agree Terms & Conditions<input type="checkbox" name="tc" value="tc" onChange={onchange}/> 
                    <span style={{color:"red"}}>{errors.tc}</span>
                    <br /><br />

                    <input type="submit" value="submit" />
                </form>
            </React.Fragment>
        </>
    )
}

export default Hooks;

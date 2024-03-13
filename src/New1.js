import React from "react";

class New1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  FormValidation = (input) => {
    const { username, Email, Mobile, Semester, Gender, Message, Password, Confirm,tc,a1,a2 } = this.state;
    let isValid = true;
    const errors = {};

    if (!username) {
      errors.username = <i>*Enter Name</i>;
      isValid = false;
    } else if (username.length > 10) {
      errors.username = "Must be 10 characters or less";
      isValid = false;
    } else if (username.length < 2) {
      errors.username = "Must be 2 characters or more";
      isValid = false;
    }else if(!username.match(a1)){
      errors.username = "must be in characters...";
      isValid = false
    }

    if (!Email) {
      errors.Email = "Enter Email";
      isValid = false;
    }else if(!Email.match(a2)){
      errors.Email = "Enter your E-mail Correctly";
      isValid = false;
    }
    

    if (!Mobile) {
      errors.Mobile = "Enter Number";
      isValid = false;
    } else if (Mobile.length !== 10) {
      errors.Mobile = "Must be 10 characters";
      isValid = false;
    }

    if (!Semester || Semester === "Select") {
      errors.Semester = "Select your sem.";
      isValid = false;
    }

    if (!Gender) {
      errors.Gender = "Select Gender";
      isValid = false;
    }

    if (!Message) {
      errors.Message = "Type mes...plz..";
      isValid = false;
    }

    if (!Password) {
      errors.Password = "Enter password";
      isValid = false;
    }

    if (!Confirm) {
      errors.Confirm = "Re-Enter Password";
      isValid = false;
    }else if(Password !== Confirm){
      errors.Confirm = "Not Sem...."
    }

    if(!tc){
      errors.tc = "Click t&c";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.FormValidation();
    if (isValid) {
      console.log("submit", this.state);
    }
  };

  render() {
    const { username, Email, Mobile, Semester, Gender, Password, Confirm, Message,tc, errors } = this.state;
      
   
    return (
      <React.Fragment>
        <h2 style={{ backgroundColor: "yellow", marginLeft: "10px",marginRight: "10px" }}>Register..</h2>
        <form onSubmit={this.onSubmit.bind(this)} style={{ marginLeft: "10px", marginRight: "10px"}}>
          Name : <input type="text" name="username" value={username} onChange={this.onChange.bind(this)} placeholder="Enter Name" />
          <span style={{ color: "red" }}>{errors.username}</span>
          <br /><br/>

          Email : <input type="text" name="Email" value={Email} onChange={this.onChange.bind(this)} placeholder="Enter Email" />
          <span style={{ color: "red" }}>{errors.Email}</span>
          <br /><br />

          Mobile : <input type="number" name="Mobile" value={Mobile} onChange={this.onChange.bind(this)} placeholder="Enter number" />
          <span style={{ color: "red" }}>{errors.Mobile}</span>
          <br /><br />

          Semester : <select name="Semester" value={Semester} onChange={this.onChange.bind(this)}>
            <option>Select</option>
            <option>Sem 1</option>
            <option>Sem 2</option>
            <option>Sem 3</option>
            <option>Sem 4</option>
          </select>
          <span style={{ color: "red" }}>{errors.Semester}</span>
          <br /><br />

          Gender :
          <input type="radio" name="Gender" value="male" onChange={this.onChange.bind(this)} />male
          <input type="radio" name="Gender" value="female" onChange={this.onChange.bind(this)} />female
          <span style={{ color: "red" }}>{errors.Gender}</span>
          <br /><br />

          Message : <textarea name="Message" value={Message} onChange={this.onChange.bind(this)} placeholder="message...."></textarea>
          <span style={{ color: "red" }}>{errors.Message}</span>
          <br /><br />

          Password : <input type="password" name="Password" value={Password} onChange={this.onChange.bind(this)} placeholder="Enter password" />
          <span style={{ color: "red" }}>{errors.Password}</span>
          <br /><br />

          Confirm Password : <input type="password" name="Confirm" value={Confirm} onChange={this.onChange.bind(this)} placeholder="Confirm Password" />
          <span style={{ color: "red" }}>{errors.Confirm}</span>
          <br /><br />

          I Agree Terms & Conditions<input type="checkbox" name="tc" value='tc' onChange={this.onChange.bind(this)}/>
               <span style={{color: 'red'}}>{errors.tc}</span><br/><br/>

          <input type="submit" value="submit" style={{ background : "#ff000033"}}/>
        </form>
      </React.Fragment>
    );
  }
}

export default New1;

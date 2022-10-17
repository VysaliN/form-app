import React, { useState } from "react";
import './Form.css';

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [upload, setUpload] = useState("");
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");

  function validate(e) {
    e.preventDefault();
    setUsername(e.target.username.value);
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    setContact(e.target.contact.value);
    setDate(e.target.date.value);
    setGender(e.target.gender.value);
    setUpload(e.target.upload.value);
    setCode(e.target.code.value);
    setAddress(e.target.address.value);
    setUrl(e.target.url.value);
  }

  console.log(
    username,
    email,
    password,
    contact,
    date,
    gender,
    upload,
    code,
    address,
    url
  );

  return (
    <div align="center">
      <h1>Form</h1>
      <form name="myForm" onSubmit={validate} autoComplete="off">
        <table id="table1">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input type="text" name="username" required/>
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input type="email" name="email" required/>
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
                <input type="password" name="password" required />
              </td>
            </tr>

            <tr>
              <td>Contact Number:</td>
              <td>
                <input type="tel" name="contact" required />
              </td>
            </tr>

            <tr>
              <td>Date of Birth:</td>
              <td>
                <input type="date" name="date" required/>
              </td>
            </tr>

            <tr>
              <td>Gender:</td>
              <td>
                <input type="radio" name="gender" value="Male" />
                Male
                <input type="radio" name="gender" value="Female"/>
                Female
                <input type="radio" name="gender" value="Other"/>
                Other
              </td>
            </tr>

            <tr>
              <td>Upload:</td>
              <td>
                <input type="file" name="upload" required/>
              </td>
            </tr>

            <tr>
              <td>EMP Code:</td>
              <td>
                <input type="number" name="code" required/>
              </td>
            </tr>

            <tr>
              <td>Address:</td>
              <td>
                <textarea name="address" cols="21" rows="3" required></textarea>
              </td>
            </tr>

            <tr>
              <td>Url:</td>
              <td>
                <input type="url" name="url" />
              </td>
            </tr>

            <tr>
              <td>
                <input type="submit" name="submit" value="submit" />
                <input type="reset" name="reset" value="reset" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
  );
}

export default Form;

 

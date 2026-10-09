import { useState } from "react";


function Home() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: ''
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  setFormData({
    fname: '',
    lname: '',
    age: ''
  });
  };
 const handlechange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <>

  <form onSubmit={handlesubmit}>
    <label for="fname">First name:</label><br/>
    <input type="text" id="fname" name="fname" value={formData.fname} onChange={handlechange}/><br/>
    <label for="lname">Last name:</label><br/>
    <input type="text" id="lname" name="lname" value={formData.lname} onChange={handlechange}/><br/>
    <label for="age">Age:</label><br/>
    <input type="number" id="age" name="age" min="1" max="100" value={formData.age} onChange={handlechange}/><br/>
    <input type="submit" value="Submit"/>
  </form>
  <div>
    <ul>
      <li>First Name: {formData.fname}</li>
      <li>Last Name: {formData.lname}</li>
      <li>Age: {formData.age}</li>
    </ul>
  </div>
    
    </>

  );
}



export default Home;
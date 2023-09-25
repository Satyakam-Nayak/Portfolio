import { useState } from "react"
import { Button } from "react-bootstrap"

var contactme={
    height: "85vh",
}

var headings = {
    fontSize: "60px",
    color: 'white',
    width: "50%",
    padding: "1%",
    marginLeft: "50%",
    backgroundColor: "#40513B",
    borderRadius: "10px",
}

var forms={
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#609966',
    width: "70%",
    marginLeft: "8%",
    marginTop: "5%",
    padding: "1%",
}

var ibox={
    outline: "none",
    border: "none",
    backgroundColor: "#609966",
    borderBottom: '3px solid #40513B',
    color: "white",
    padding: "1%",
    margin: "4%",
    width: "120%",
    fontSize: "23px"
}


export default function Contactme()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [enquiry,setEnquiry] = useState("");
    const [message,setMessage] = useState("");

    async function handleSubmit()
    {
        let item ={ name,email,enquiry,message}
        let result = await fetch("http://localhost:4000/posts",{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        result = await result.json()
    }

    return(
        <div id='contactme' style={contactme}>
            <h1 style={headings}>Contact Me</h1>
            <div style={forms}>
                <form>
                    <input style={ibox} placeholder="Enter name*" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                    <input style={ibox} placeholder="Enter email*" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <select id="enquiry" style={ibox} value={enquiry} onChange={(e)=>setEnquiry(e.target.value)}>
                        <option value="select">Type of Enquiry*</option>
                        <option value="projectcollection">Project Collection</option>
                        <option value="learnskill">Learn Skills</option>
                        <option value="discusswithme">Discuss with me</option>
                        <option value="others">Others</option>   
                    </select><br/>
                    <textarea rows="4" style={ibox} placeholder="Your Message*" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea><br/>
                    <Button variant="dark" onClick={handleSubmit}>Contact Us</Button>
                </form>
                <div style={{display: "inline-block",color: "white", marginTop: "13%"}}>
                    <h3>@Contact me</h3>
                    <h5>satyakamnayak2002@gmail.com</h5>
                    <h5>+91-8249327494</h5>
                </div>
            </div>
        </div>
    )
}
import profile from '../images/profilepic.png';
import {Button} from 'react-bootstrap';

var frontpage = {
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    
}

var img={
    marginTop: "90px",
    height: "250px",
    width: "250px",
    borderRadius: "40px",
    backgroundColor: "white",
    border: "4px solid ",
    
}

var bdiv={
    marginTop: "-258px",
    marginLeft: "260px",
    height: "255px",
    width: "255px",
    borderRadius: "40px",
    backgroundColor: "#40513B",
    border: "4px solid #40513B"
}

var imgdiv={
    width: "50%",
    height: "80vh",
    marginLeft: "-2%",
    backgroundColor: "#9DC08B",
}

var info={
    backgroundColor: "#40513B",
    zIndex: "1",
    padding: "15vh",
    marginRight: "-11%"

}

var h2div={
    margin: '16%',
    marginTop: '8%',
    backgroundColor: "#40513B",
    color: "white",
    padding: "3%",
    borderRadius: "20px"
}


export default function Frontpage() {
    return (
        <div style={frontpage}>
            <div style={info} className='abc'>
                <h1 style={{color: 'white',fontSize: "35px",textAlign:"center",margin: "15px"}}>Hello,</h1>
                <h1 style={{color: 'white',fontSize: "50px",textAlign:"center"}}>I am Satyakam Nayak</h1>
                <h1 style={{color: 'white',fontSize: "30px",textAlign:"center"}}>Full Stack Web Developer</h1>
                <br />
                <Button variant='danger'>Download Resume</Button>
            </div>
            <div style={imgdiv}>
                <img src={profile} alt="no img" style={img} />
                <p style={bdiv}/>
                <h2 style={h2div}><span style={{fontSize: "40px"}}>"</span> Learning to Code is <br/> learning to <span style={{backgroundColor: "white",color:"#2A4365",borderRadius: '10px',paddingLeft: "6px",paddingRight: "6px"}}>create and innovate</span><span style={{fontSize: "40px"}}> "</span></h2>
            </div>
        </div>
    )
}
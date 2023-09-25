import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip';

var certificates = {
    height: "100vh",
}

var headings = {
    fontSize: "60px",
    color: 'white',
    width: "50%",
    padding: "1%",
    backgroundColor: "#40513B",
    borderRadius: "10px",
}

const certificat = [
    {
        title: "META Front-End Developer",
        description:
            "Learned to develop websites using Html,CSS,Javascript,React",
    },
    {
        title: "META Back-End Developer",
        description:
            "Develop websites using nodejs and database like mongoDB ",

    },
    {
        title: "IBM DevOps and Software Engineering",
        description:
            "Learn cloud computing, dockers, kubernates",
    },
    {
        title: "UNIcompiler Web Development",
        description:
            "Did a internship associated with the oppurtunity given by UNIcompiler",

    }
];

var griditem = {
    backgroundColor: "#40513B",
    margin: "5%",
    color: 'white'
}

var divcont = {
    display: "grid",
    gridTemplateColumns: 'auto auto',
    marginTop: "5%",
}

export default function Certificates() {

    const [flip, setFlip] = useState(false)

    return (
        <div id='certificates' style={certificates}>
            <h1 style={headings}>Certificates</h1>
            <div style={divcont}>
                {
                    certificat.map((item, key) =>
                        <ReactCardFlip isFlipped={flip === key} flipDirection='horizontal'>
                            <Card style={griditem}>
                                <Card.Body>
                                    <Card.Title>{key + 1}<br/><br/>{item.title}</Card.Title><br/>
                                    <Button variant='dark' onClick={()=>setFlip(key)}>See more</Button>
                                </Card.Body>    
                            </Card>
                            <Card style={griditem}>
                                <Card.Body>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Button variant='dark' onClick={()=>setFlip(false)}>See less</Button>
                                </Card.Body>
                            </Card>
                        </ReactCardFlip>
                    )
                }
            </div>
        </div>
    )
}
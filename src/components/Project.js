import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';

var project = {
    height: "100vh",
    display: "grid",

}

var gridcont = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    margin: '2%',
    marginBottom: "3%",

}

var griditem = {
    border: "2px solid",
    fontSize: '30px',
    textAlign: 'center',
    margin: "15px",
    borderRadius: "20px",

}

var headings = {
    fontSize: "60px",
    color: 'white',
    width: "50%",
    paddingTop: "1%",
    backgroundColor: "#40513B",
    borderRadius: "10px",
    
}

const projects = [
    {
        title: "Ecommerce Website",
        description:
            "A product management website where you can add,delete and update product details using ReactJS",
        getImageSrc: () => require("../images/ecom.png"),
    },
    {
        title: "Portfolio",
        description:
            "A portfolio website which describe about myself and my achivements in my career",
        getImageSrc: () => require("../images/portfolio.jpg"),
    },
    {
        title: "Resturant Website",
        description:
            "Designed a website which give details about a restutant and its menu",
        getImageSrc: () => require("../images/restuarant.png"),
    }
];

export default function Project() {

    const [flip, setFlip] = useState(false);


    return (
        <div id='projects' style={project}>
            <h2 style={headings}>Featured Projects</h2>
            <div style={gridcont}>
                {
                    projects.map((item,key) =>
                        <ReactCardFlip isFlipped={flip === key} flipDirection='horizontal'>
                            <Card style={griditem}>
                                <Card.Img variant="top" src={item.getImageSrc()} style={{ borderRadius: "20px", }} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "30px", margin: "10px" }}>{key + 1}<br/>{item.title}</Card.Title>
                                    <Button variant="primary" onClick={()=>setFlip(key)}>See More</Button>
                                </Card.Body>
                            </Card>
                            <Card style={griditem}>
                                <Card.Body>
                                    <Card.Text style={{ fontSize: "25px" }}>{item.description}</Card.Text>
                                    <Button variant="primary" onClick={()=>setFlip(false)}>See Less</Button>
                                </Card.Body>
                            </Card>
                        </ReactCardFlip>
                    )
                }
            </div>
        </div>
    )
}


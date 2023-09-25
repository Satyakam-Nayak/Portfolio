import { Card } from "react-bootstrap"

var skill = {
    height: "100vh",
}

var divcont = {
    display: "grid",
    gridTemplateColumns: 'auto auto auto auto',
    marginTop: "3%",
}

var griditem = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: "#40513B",
    color: 'white'
}

const skills = [
    {
        title: "C",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
        title: "C++",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
        title: "Java",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        title: "HTML",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        title: "CSS",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        title: "Javascript",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        title: "ReactJS",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        title: "Node JS",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        title: "MySQL",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
        title: "MongoDB",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        title: "Redux",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    {
        title: "Linux",
        srcs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg"
    },
];

var headings = {
    fontSize: "60px",
    color: 'white',
    width: "50%",
    padding: "1%",
    marginLeft: "50%",
    backgroundColor: "#40513B",
    borderRadius: "10px",

}

export default function Skill() {
    return (
        <div id='skills' style={skill}>
            <h1 style={headings}>Skills</h1>
            <div style={divcont}>
                {
                    skills.map((item, key) =>
                        <Card style={griditem} className="griditem">
                            <Card.Img style={{margin: "13px"}} src={item.srcs} height='70px' width='70px' />
                            <Card.Title>Name:- {item.title}</Card.Title>
                        </Card>
                    )
                }
            </div>

        </div>
    )
}


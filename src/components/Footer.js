var footer={
    height: "15vh",
    backgroundColor: "#292929",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "left",
}

export default function Footer()
{
    return(
        <div style={footer}>
            <div>
                <h3>©Copyright. All rights reserved.</h3>
            </div>
        </div>
    )
}
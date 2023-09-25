import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

var icona={
   position: "fixed", 
   left: '96%',
   bottom: '40px',
   height: '30px',
   zIndex: '1',
   cursor: 'pointer',
   color: 'white',
   border: '2px solid black',
   backgroundColor: '#292929',
   borderRadius:"50%",
   padding: '6px',
}

export default function ScrollButton() {
    const [visible, setVisble] = useState(false)

    const visb = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 300) {
            setVisble(true);
        }
        else if (scroll <= 300) {
            setVisble(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    window.addEventListener('scroll', visb);
    
    return(
        <FontAwesomeIcon icon={faArrowRight} rotation={270} onClick={scrollToTop} style={icona}/>
    )
}

import { useRef, useEffect, useState } from "react";
import styles from "../styles/App.module.scss"


const Button = () => {
    const [ scrollYValue, setScrollYValue ] = useState(0);
    const facebook = useRef();
    const instagram = useRef();

    //function to handle fade in effect
    const handleFadeIn = () => {
      facebook.current.classList.remove(styles.fadeOutRight);
      instagram.current.classList.remove(styles.fadeOutLeft);
      facebook.current.classList.add(styles.fadeMoveRight);
      instagram.current.classList.add(styles.fadeMoveLeft);
    }
    
    // function to handle fade out effect
    const handleFadeOut = () => {
      facebook.current.classList.add(styles.fadeOutRight);
      instagram.current.classList.add(styles.fadeOutLeft);
    }
    
    useEffect(() => {
      // window on scroll event
      window.addEventListener('scroll', () => {
        setScrollYValue(window.scrollY);
      });
      
      // depending on the scroll Y position, call handleFadeIn or handleFadeOut function
      if((scrollYValue > window.innerHeight / 7) && scrollYValue < window.innerHeight / 0.7) {
        handleFadeIn();
      } else if ((scrollYValue >= window.innerHeight / 0.7) || (scrollYValue <= window.innerHeight / 7)) {
        handleFadeOut();
      }
    }, [scrollYValue]);  

    return (
        <>
            <button className={styles.facebook} ref={facebook}>Facebook <i className="fa-brands fa-facebook"></i></button>
            <button className={styles.instagram} ref={instagram}>Instagram <i className="fa-brands fa-instagram"></i></button> 
        </>
    )
}


export default Button;
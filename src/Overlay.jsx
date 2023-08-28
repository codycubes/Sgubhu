import React, { useEffect } from "react";
import { Scroll } from "@react-three/drei";
import {   motion, useAnimation } from "framer-motion";


export const Overlay = ({onClick}) => {

    return(
        <>
        <Scroll html>
          <Header />

            <motion.div className="HeroDescription"
              initial={{opacity: 0, y: 25,}}
              whileInView={{opacity: 1, y: 0,}}
              transition={{duration: 1, delay: 1.2,}}>

                <h1 className="HeroTitle">The pulse of Africa in the palm of your hand.</h1>

                <p className="HeroPara">Our portable speaker brings the rhythm of Africa to your fingertips. 
                    Feel the power of the bass and enjoy clear, high-quality audio that fills any room.    
                </p>
            </motion.div>
           
          <motion.div className="IconContainer" 
            initial={{opacity: 0, y: 25,}}
            whileInView={{opacity: 1, y: 0,}}
            transition={{duration: 1, delay: 1.2,}}>

            <img src="/Icons/bluetoothimg.png" />
            <img src="/Icons/full battery.png" />
            <img src="/Icons/Speaker.png" />
        </motion.div>


          <motion.div className="PowerDescription" 
            initial={{opacity: 0, y: 25,}}
            whileInView={{opacity: 1, y: 0,}}
            transition={{duration: 1, delay: 1.2,}}>
                <h1 className="power-slogan">Features </h1>

                <p className="PowerPara">Get ready to unleash your sound with our portable speaker! Boasting a 12 hour long-lasting battery life, 
                and a range of connectivity options including Bluetooth, Wi-Fi, and AUX, 
                you can seamlessly connect to any device and enjoy high-quality audio wherever you go.
                </p>  
         </motion.div>

            <motion.div className="CustomDescription"
              initial={{opacity: 0, y: 25,}}
              whileInView={{opacity: 1, y: 0,}}
              transition={{duration: 1, delay: 1.2,}}>
                <h1 className="CustomTitle">Customize Your Speaker</h1>
                <p className="CustomPara">Go ahead and add your own taste to the speaker. Try different colors for the case</p>
                <button className="createbutt" onClick={onClick}>Create</button>
                
            </motion.div>


        </Scroll>
        </>
    )
}



const Header = () => {
    return(
        <>     
        <header className="header">
            <div className="header__brand">
                <h1>iSgubhu</h1>
            </div>
    
            <nav className="header__menu">
                <ul>
                <li><a >Features</a></li>
                <li><a >Customize Speaker</a></li>
                <li><a >Purchase</a></li>
                </ul>
            </nav>
            </header>

            
        </>
    )
}
import React, { useEffect, useRef } from "react"
import { aboutusStyles } from "../../styles/aboutusStyles.css"
import { Container } from "@mantine/core"
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IndexContent } from "../../staticContent"

const Aboutus = () => {
  const { classes } = aboutusStyles()
  const aboutusImageRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(aboutusImageRef.current, {
      duration: 0.8,
      x: 70,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutusImageRef.current,
        start: "top 90%",
      },
    })

    gsap.to('#clients-count', {
      innerText: 40,
      duration: 3,
      snap: {
        innerText: 1
      },
      scrollTrigger: {
        trigger: '#clients-count',
        start: "top 90%",
      }
    })
    
    gsap.to('#country-count', {
      innerText: 10,
      duration: 3,
      snap: {
        innerText: 1
      },
      scrollTrigger: {
        trigger: '#country-count',
        start: "top 90%",
      }
    })
  }, [])
  return (
    <div className="panel" style={{overflowX: 'hidden', backgroundColor: '#FFF'}} id="about-us">
      <Container size={1200} className={classes.aboutusContainer}>
        <div className={classes.aboutusBackground} />
        <div className={classes.aboutusBackgroundHorizondal} />
        <div className={classes.aboutuscontent}>
          <div className={classes.aboutusTextContainer}>
            <h1 className={classes.aboutusTitle}>Arya Pulses</h1>
            <p className={classes.aboutusDescription}>
              {IndexContent.aboutusDescription}
            </p>
            <div className={classes.aboutusText}>
              <div>
                <h1 className={classes.numbers}><span id="clients-count">0</span>+</h1>
                <p>CLIENTS</p>
              </div>
              <div>
                <h1 className={classes.numbers} ><span id="country-count">0</span>+</h1>
                <p>COUNTRY EXPORTS</p>
              </div>
            </div>
          </div>
          <div className={classes.aboutusImage} ref={aboutusImageRef}>
            <StaticImage
              src="../../images/chickpeas-hero-horizondal.png"
              alt="Arya Pulses"
              placeholder="blurred"
              objectFit="contain"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Aboutus

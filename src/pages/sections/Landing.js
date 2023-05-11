import { Container, clsx } from "@mantine/core"
import React, { useEffect, useRef } from "react"
import { landingStyles } from "../../styles/landingStyles.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StaticImage } from "gatsby-plugin-image"
import { IndexContent } from "../../staticContent"

const Landing = () => {
  const { classes } = landingStyles()
  const heroImageRef = useRef()
  const heroImageRefRev = useRef()
  const heroImageRefInit = useRef()
  const titleTextRef = useRef(null);
  const landingDescriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(heroImageRefInit.current, {
      duration: 2,
      scale: 0,
      rotate: 90,
      opacity: 0,
    });

    gsap.to(heroImageRef.current, {
      rotation: 360,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    })
    
    gsap.to(heroImageRefRev.current, {
      rotation: -360,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    })

    gsap.from(titleTextRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2
    })
    gsap.to(landingDescriptionRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: landingDescriptionRef.current,
        start: "top 90%",
      },
    })

  }, [])
  return (
    <div className={clsx(classes.hero)} id="home">
      <Container
        size={1200}
        sx={{
          overflow: "hidden",
        }}
      >
        <div className={classes.heroContainer}>
          <div className={classes.heroTextContainer} style={{ flex: 1 }}>
            <h1 className={classes.heroTitle} id="title-text" ref={titleTextRef}>
              <span>Best </span> <span> Quality</span>
              <br />
              <span>Products</span>
            </h1>
            <p className={classes.landingDescription} ref={landingDescriptionRef}>
              {IndexContent.landingDescription}
            </p>
          </div>
          <div className={classes.heroImageContainer} ref={heroImageRefInit}>
            <div ref={heroImageRef}>
              <StaticImage
                src="../../images/indexImage-bg.png"
                alt="Arya Pulses Australia"
                placeholder="blurred"
                objectFit="contain"
              />
            </div>
            <div style={{position: 'absolute', left: 0, right: 0, margin: 140}} ref={heroImageRefRev}>
              <StaticImage 
                src="../../images/indexImage.png"
                alt="Arya Pulses Australia"
                placeholder="blurred"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={classes.heroImageContainer_mobile}>
            <StaticImage
              src="../../images/landingImage-half.png"
              alt="Arya Pulses Australia"
              placeholder="blurred"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Landing

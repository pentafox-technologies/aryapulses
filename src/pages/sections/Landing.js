import { Container } from "@mantine/core"
import React, { useEffect, useRef } from "react"
import { Hero, HeroContainer, HeroImageContainer, HeroImageContainerMobile, HeroTextContainer, HeroTitle, LandingDescription } from "../../styles/landingStyles.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StaticImage } from "gatsby-plugin-image"
import { IndexContent } from "../../staticContent"

const Landing = () => {
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
    <Hero id="home">
      <div
        style={{
          overflow: "hidden",
          maxWidth: '75rem',
          padding: '0px 1rem'
        }}
      >
        <HeroContainer>
          <HeroTextContainer style={{ flex: 1 }}>
            <HeroTitle id="title-text" ref={titleTextRef}>
              <span>Best </span> <span> Quality</span>
              <br />
              <span>Products</span>
            </HeroTitle>
            <LandingDescription ref={landingDescriptionRef}>
              {IndexContent.landingDescription}
            </LandingDescription>
          </HeroTextContainer>
          <HeroImageContainer ref={heroImageRefInit}>
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
          </HeroImageContainer>
          <HeroImageContainerMobile>
            <StaticImage
              src="../../images/landingImage-half.png"
              alt="Arya Pulses Australia"
              placeholder="blurred"
            />
          </HeroImageContainerMobile>
        </HeroContainer>
      </div>
    </Hero>
  )
}

export default Landing

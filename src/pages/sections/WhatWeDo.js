import { Container, createStyles } from '@mantine/core'
import React from 'react'
import { BREAKPOINT } from '../../constants/breakpoints'
import { COLORS, FONTS } from '../../constants/constants'
import { IndexContent } from '../../staticContent'
import JourneyIllustration from "../../images/illustration.svg"
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const useStyles = createStyles((theme) => ({
  pageTitle: {
    ...FONTS.TITLE,
    fontSize: 52,
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 32,
    },
  },
  pageDescription: {
    ...FONTS.BODY,
    marginTop: 10,
    lineHeight: 1.7,
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 16,
    },
  },
  whatwedoContainer: {
    display: "flex",
    minHeight: "100vh",
    alignItems: 'center',
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      flexDirection: "column",
      justifyContent: "center",
      padding: '20px 0px'
    },
  },
  whatwedoContentContainer: {
    flex: 1.7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      maxWidth: BREAKPOINT.sm,
      textAlign: "center",
    },
  },
  whatwedoContainerRoot: {
    minHeight: "100vh",
  },
}))

const WhatWeDo = () => {
  const { classes } = useStyles()

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
    gsap.to('#story-point', {
      duration: 1,
      motionPath: {
        path: '#story-path',
        align: '#story-path',
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      scrollTrigger: {
        trigger: '#what-we-do',
        start: 'top',
        scrub: true,
        pin: true,
      },
      ease: 'none'
    })

    const storyPoint = document.getElementById("story-point");

    gsap.timeline({ repeat: -1 })
    .to(storyPoint, { duration: 1, scale: 2, ease: "power2.out" })
    .to(storyPoint, { duration: 1, scale: 1, ease: "power2.inOut" });

  }, [])

  return (
    <div className="panel" 
      style={{ backgroundColor: COLORS.PRIMARY() }} 
      id="what-we-do">
        <Container size={1200} className={classes.whatwedoContainerRoot}>
          <div className={classes.whatwedoContainer}>
            <div className={classes.whatwedoContentContainer}>
              <h1 className={classes.pageTitle} style={{color: '#FFF'}}>What We Do</h1>
              <div id="paragraphs">
                <p id="para" className={classes.pageDescription} style={{color: '#FFF'}}>
                  {IndexContent.whatwedoDescription}
                </p>
              </div>
            </div>
            <div
              style={{
                flex: 2,
                width: '100%',
              }}
            >
              <JourneyIllustration />
            </div>
          </div>
        </Container>
      </div>
  )
}

export default WhatWeDo
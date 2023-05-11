import React, { useEffect } from "react"
import { plantProtein } from "../../styles/plantprotein.css"
import { Container, clsx } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { BREAKPOINT } from "../../constants/breakpoints";
import { plantProteinData } from "../../staticContent";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Plantprotein = () => {
  const { classes } = plantProtein();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    [1,2,3,4,5,6,7,8,9].forEach(i => {
      gsap.from(`.image${i}`, {
        duration: 0.6,
        x: i == 5 ? 0 : i<=4 ? -100 : 100,
        y: i == 5 ? 100 : 0,
        opacity: 0,
        scrollTrigger: {
          trigger: `.image${i}`,
          start: "top 100%",
          stagger: 0.4
        },
      })
    });
  }, []);

  const Slides = ({title, description, tags}) => {
    return(
      <Carousel.Slide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: BREAKPOINT.xs }}>
          <h1 className={classes.pageTitle}>{title}</h1>
          <p className={classes.pageDescription}>
            {description}
          </p>
        </div>
      </Carousel.Slide>
    )
  }

  return (
    <div id="plant-protein" className="panel" style={{backgroundColor: '#FFF'}}>
      <Container size={1200} className={classes.plantproteinContainer}>
        <div style={{display: 'flex', height: '100vh'}}>
          <div style={{ flex: 1, position: 'relative'}} className={classes.imgContainer1}>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute'}} className="image1">
              <StaticImage 
                src="../../images/bg1.png"
                placeholder="blurred"
                quality={100}
              />  
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', top: '25%', right: 0}} className="image2">
              <StaticImage 
                src="../../images/lentils.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', bottom: '25%'}} className="image3">
              <StaticImage
                src="../../images/red-sorghum.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', bottom: 0, right: 0}} className="image4">
              <StaticImage 
                src="../../images/bg2.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
          </div>
          <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <Carousel
              className={classes.plantproteinCarousel}
              initialSlide={0}
              mx="auto"
              maw={BREAKPOINT.xs}
              controlSize={40}
            >
              {
                plantProteinData.map((data, index) => (
                  <Slides title={data.title} description={data.description} />
                ))
              }
            </Carousel>
            <div className={clsx(classes.img5, 'image5')} style={{width: 200, objectFit: 'contain', position: 'absolute', bottom: 30}}>
              <StaticImage 
                src="../../images/bg3.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
          </div>
          <div style={{ flex: 1, position: 'relative'}} className={classes.imgContainer2}>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', right: 0}} className="image6">
              <StaticImage 
                src="../../images/bg4.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', top: '25%'}} className="image7">
              <StaticImage 
                src="../../images/faba-beans.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', bottom: '25%', right: 0}} className="image8">
              <StaticImage 
                src="../../images/yellow-splitpeas.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
            <div style={{width: 200, objectFit: 'contain', position: 'absolute', bottom: 0}} className="image9">
              <StaticImage 
                src="../../images/kaspa-peas.png"
                placeholder="blurred"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Plantprotein

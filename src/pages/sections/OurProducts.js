import { Container, clsx, createStyles } from "@mantine/core"
import React, { useEffect } from "react"
import { FONTS, SPACING } from "../../constants/constants"
import { BREAKPOINT } from "../../constants/breakpoints"
import { OurProductsData } from "../../staticContent"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

const useStyles = createStyles(theme => ({
  root: {
    backgroundImage: `url(https://i.imgur.com/8LK7dqJ.png)`,
    backgroundSize: "contain",
    backgroundColor: '#FFF',
  },
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
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 16,
    },
  },
  ourproductsContainer: {
    minHeight: "120vh",
    display: "flex",
    alignItems: "center",
    paddingTop: SPACING.MARGIN_XL * 4,
    paddingBottom: SPACING.MARGIN_XL * 4,
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 48,
    marginTop: SPACING.MARGIN_XL,
  }
}))

const OurProducts = () => {
  const { classes } = useStyles()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  
    const productCards = gsap.utils.toArray('.product-card')
    productCards.forEach((card, index) => {
      gsap.from(card, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.5,
        scrollTrigger: {
          trigger: () => card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, [])

  const ProductCard = ({productImage, productName, productDescription}) => {
    return(
      <div style={{maxWidth: 320, overflow: 'hidden'}} className="product-card">
      <div>
        {productImage}
      </div>
      <div style={{textAlign: 'center', padding: SPACING.MARGIN_SM}}>
        <h2 style={{...FONTS.TITLE, fontSize: 28}}>{productName}</h2>
        <p style={{...FONTS.BODY, fontSize: 16, marginTop: SPACING.MARGIN_SM}}>{productDescription}</p>
      </div>
    </div>
    )
  }

  return (
    <div className={clsx(classes.root, 'panel')} id="our-products">
      <Container size={1200} className={classes.ourproductsContainer}>
        <div className={classes.containerWrapper}>
          <div className={classes.titleContainer}>
            <h1 className={classes.pageTitle}>Our Specialities Products</h1>
            <p className={classes.pageDescription}>
              Our business prides on serving you spices, pulses, lentils, grains
              and canned products of the very best quality.
            </p>
          </div>
          <div className={classes.productContainer}>
            {OurProductsData.map((product, index) => (
              <ProductCard
                productImage={product.image}
                productName={product.name}
                productDescription={product.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurProducts

import { Container, createStyles } from "@mantine/core"
import React from "react"
import MarketMap from "../../images/map.svg"
import { COLORS, FONTS, SPACING } from "../../constants/constants"
import { BREAKPOINT } from "../../constants/breakpoints"
import { country } from "../../staticContent"

const useStyle = createStyles(theme => ({
  //common styles
  pageTitle: {
    ...FONTS.TITLE,
    fontSize: 49,
    maxWidth: '75rem',
    marginLeft: '1.2rem',
    marginRight: '1.2rem',
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 25,
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
  mapWrapper: {
    margin: SPACING.MARGIN_XL * 2,
    width: "100%",
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      margin: 0
    },
  },
  subText: {
    ...FONTS.BODY,
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 14
    }
  },
  map: {
    minHeight: '100vh',
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      minHeight: '80vh',
    }
  }
}))

const MarketPresence = () => {
  const { classes } = useStyle()

  return (
    <div id="map" className="panel" style={{ backgroundColor: "#FFF" }}>
      {/* <Container size={1200} style={{ height: "120vh" }}> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              position: 'absolute',
            }}
          >
            <h1 className={classes.pageTitle}>
              Arya Pulses exports containerised and bulk grain across key
              international markets.
            </h1>
          </div> */}
          <div
            className={classes.mapWrapper}
            style={{
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '60%',
                background: `linear-gradient(${COLORS.SECONDARY(1)}, rgba(0, 0, 0, 0))`,
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: 60,
                zIndex: 2,
                width: '100%',
              }}
            >
              <h1 className={classes.pageTitle}>
                Arya Pulses exports containerised and bulk grain across key international
                markets.
              </h1>
            </div>
            <MarketMap width="100%"
              className={classes.map}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: SPACING.MARGIN_XL,
            }}
          >
            {country.map((country, index) => (
              <p
              style={{
                borderRight: `1px solid ${COLORS.PRIMARY()}`,
                padding: `0px ${SPACING.MARGIN_LG}px`,
                marginBottom: 10,
                ...(index === country.length - 2
                  ? { borderRight: "none" }
                  : {}),
                }}
                className={classes.subText}
                >
                {country}
              </p>
            ))}
          </div>
        </div>
      {/* </Container> */}
    </div>
  )
}

export default MarketPresence

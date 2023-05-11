import { createStyles } from "@mantine/core";
import { BREAKPOINT } from "../constants/breakpoints";
import { COLORS, FONTS } from "../constants/constants";

export const landingStyles = createStyles(theme => ({
  hero: {
    backgroundColor: COLORS.SECONDARY(0.6),
    minHeight: "90vh",
    position: "relative",
    display: "flex",
    zIndex: 0,
    [theme.fn.largerThan(BREAKPOINT.md)]: {
      alignItems: "center",
    },
  },
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    // height: "100%",
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "10%",
    },
  },
  heroImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    position: 'relative',
    // border: '1px solid black',
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      display: "none",
    },
  },
  heroImage: {
    width: "100%",
    objectFit: "contain",
    position: 'absolute'
  },
  heroTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 1,
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      textAlign: "center",
      width: "60%",
    },
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      width: "100%",
    },
  },
  heroImageContainer_mobile: {
    flex: 1,
    bottom: 0,
    position: "absolute",
    [theme.fn.largerThan(BREAKPOINT.md)]: {
      display: "none",
    },
  },
  heroTitle: {
    ...FONTS.TITLE,
    // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    overflow: 'hidden',
    [theme.fn.largerThan(BREAKPOINT.md)]: {
      fontSize: 64,
    },
    [theme.fn.smallerThan(BREAKPOINT.xs)]: {
      fontSize: 45,
    },
  },
  landingDescription: {
    ...FONTS.BODY,
    lineHeight: 1.7,
    marginTop: 10,
    opacity: 0,
    transform: 'translateY(50px)',

    [theme.fn.largerThan(BREAKPOINT.md)]: {
      fontSize: 24,
    },
    [theme.fn.smallerThan(BREAKPOINT.xs)]: {
      fontSize: 18,
    },
  },
}))
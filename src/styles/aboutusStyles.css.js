import { createStyles } from "@mantine/core";
import { BREAKPOINT } from "../constants/breakpoints";
import { FONTS, SPACING } from "../constants/constants";

export const aboutusStyles = createStyles(theme => ({
  aboutusContainer: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  aboutusTextContainer: {
    flex: 1,
    maxWidth: BREAKPOINT.sm,
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: SPACING.MARGIN_XL * 2,
    },
  },
  aboutusTitle: {
    ...FONTS.TITLE,
    [theme.fn.largerThan(BREAKPOINT.md)]: {
      fontSize: 64,
    },
    [theme.fn.smallerThan(BREAKPOINT.xs)]: {
      fontSize: 45,
    },
  },
  aboutusDescription: {
    ...FONTS.BODY,
    lineHeight: 1.7,
    marginTop: 10,

    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 16,
    },
  },
  aboutusBackground: {
    height: "100%",
    width: "30%",
    position: "absolute",
    right: 0,
    backgroundColor: "#EEEED7",
    mixBlendMode: "normal",
    zIndex: 0,
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      display: "none",
    },
  },
  aboutusBackgroundHorizondal: {
    height: "20%",
    width: "100%",
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#EEEED7",
    mixBlendMode: "normal",
    zIndex: 0,
    [theme.fn.largerThan(BREAKPOINT.md)]: {
      display: "none",
    },
  },
  numbers: {
    ...FONTS.TITLE,
    fontSize: "3rem",
    fontWeight: 600,
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      fontSize: "2rem",
    },
  },
  aboutuscontent: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      flexDirection: "column",
    },
  },
  aboutusText: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  aboutusImage: {
    width: "100%",
    flex: 1,
  }
}))
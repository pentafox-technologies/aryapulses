import { createStyles } from "@mantine/core";
import { FONTS, SPACING } from "../constants/constants";
import { BREAKPOINT } from "../constants/breakpoints";

export const plantProtein = createStyles(theme => ({
  pageTitle: {
    ...FONTS.TITLE,
    fontSize: 52,
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 32,
    },
  },
  pageDescription: {
    ...FONTS.BODY,
    marginTop: SPACING.MARGIN_LG,
    lineHeight: 1.7,
    [theme.fn.smallerThan(BREAKPOINT.sm)]: {
      fontSize: 16,
    },
  },
  plantproteinContainer: {
    minHeight: "100vh",
    paddingTop: SPACING.MARGIN_XL,
    overflow: 'hidden'
  },
  plantproteinCarousel: {
    ".mantine-Carousel-controls": {
      top: "calc(100% - 0.625rem / 2)",
      display: "flex",
      justifyContent: "center",
      gap: 20,
      marginTop: 20,
    },
    ".mantine-Carousel-control": {
      border: "none",
      boxShadow: "none",
      "&[data-inactive]": {
        opacity: 0.3,
        cursor: "default",
      },
      svg: {
        width: "1.3rem",
        height: "1.3rem",
      },
    },
  },
  imgContainer1: {
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      display: 'none',
    }
  },
  imgContainer2: {
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      display: 'none',
    }
  },
  img5: {
    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      display: 'none',
    }
  }
}))
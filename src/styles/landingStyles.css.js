// import { createStyles } from "@mantine/core";
import { BREAKPOINT } from "../constants/breakpoints";
import { COLORS, FONTS } from "../constants/constants";
import styled from "styled-components";

// export const landingStyles = createStyles(theme => ({
//   hero: {
//     backgroundColor: COLORS.SECONDARY(0.6),
//     minHeight: "90vh",
//     position: "relative",
//     display: "flex",
//     zIndex: 0,
//     [theme.fn.largerThan(BREAKPOINT.md)]: {
//       alignItems: "center",
//     },
//   },
//   heroContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     [theme.fn.smallerThan(BREAKPOINT.md)]: {
//       flexDirection: "column",
//       alignItems: "center",
//       paddingTop: "10%",
//     },
//   },
//   heroImageContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     flex: 1,
//     position: 'relative',
//     [theme.fn.smallerThan(BREAKPOINT.md)]: {
//       display: "none",
//     },
//   },
//   heroImage: {
//     width: "100%",
//     objectFit: "contain",
//     position: 'absolute'
//   },
//   heroTextContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     zIndex: 1,
//     [theme.fn.smallerThan(BREAKPOINT.md)]: {
//       textAlign: "center",
//       width: "60%",
//     },
//     [theme.fn.smallerThan(BREAKPOINT.sm)]: {
//       width: "100%",
//     },
//   },
//   heroImageContainer_mobile: {
//     flex: 1,
//     bottom: 0,
//     position: "absolute",
//     [theme.fn.largerThan(BREAKPOINT.md)]: {
//       display: "none",
//     },
//   },
//   heroTitle: {
//     ...FONTS.TITLE,
//     overflow: 'hidden',
//     [theme.fn.largerThan(BREAKPOINT.md)]: {
//       fontSize: 64,
//     },
//     [theme.fn.smallerThan(BREAKPOINT.xs)]: {
//       fontSize: 45,
//     },
//   },
//   landingDescription: {
//     ...FONTS.BODY,
//     lineHeight: 1.7,
//     marginTop: 10,
//     opacity: 0,
//     transform: 'translateY(50px)',

//     [theme.fn.largerThan(BREAKPOINT.md)]: {
//       fontSize: 24,
//     },
//     [theme.fn.smallerThan(BREAKPOINT.xs)]: {
//       fontSize: 18,
//     },
//   },
// }))

export const Hero = styled.div`
  background-color: ${COLORS.SECONDARY(0.6)};
  min-height: 90vh;
  position: relative;
  display: flex;
  z-index: 0;
  justify-content: center;
  // align-items: center;

  @media (min-width: ${BREAKPOINT.md}px) {
    align-items: center;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINT.md}px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  position: relative;

  @media (max-width: ${BREAKPOINT.md}px) {
    display: none;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  object-fit: contain;
  position: absolute;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media (max-width: ${BREAKPOINT.md}px) {
    text-align: center;
    width: 60%;
  }

  @media (max-width: ${BREAKPOINT.sm}px) {
    width: 100%;
  }
`;

export const HeroImageContainerMobile = styled.div`
  flex: 1;
  bottom: 0;
  position: absolute;

  @media (min-width: ${BREAKPOINT.md}px) {
    display: none;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${FONTS.TITLE.fontFamily};
  font-size: ${FONTS.TITLE.fontSize};
  font-weight: ${FONTS.TITLE.fontWeight};
  line-height: ${FONTS.TITLE.lineHeight};
  letter-spacing: ${FONTS.TITLE.letterSpacing};
  color: ${COLORS.PRIMARY()};
  overflow: hidden;

  @media (min-width: ${BREAKPOINT.md}px) {
    font-size: 64px;
  }

  @media (max-width: ${BREAKPOINT.xs}px) {
    font-size: 45px;
  }
`;

export const LandingDescription = styled.p`
  font-family: ${FONTS.BODY.fontFamily};
  font-size: ${FONTS.BODY.fontSize};
  font-weight: ${FONTS.BODY.fontWeight};
  line-height: ${FONTS.BODY.lineHeight};
  letter-spacing: ${FONTS.BODY.letterSpacing};
  color: ${COLORS.PRIMARY_TEXT};
  line-height: 1.7;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(50px);

  @media (min-width: ${BREAKPOINT.md}px) {
    font-size: 24px;
  }

  @media (max-width: ${BREAKPOINT.xs}px) {
    font-size: 18px;
  }
`;
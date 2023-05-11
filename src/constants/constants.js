// constants.js

export const COLORS = {
  PRIMARY: (opacity = 1) => `rgba(82, 91, 55, ${opacity})`,
  PRIMARY_TEXT: '#424242',
  SECONDARY: (opacity = 1) => `rgba(238, 238, 215, ${opacity})`,
};

export const FONTS = {
  TITLE: {
    fontFamily: 'Libre Baskerville, serif',
    fontWeight: 400,
    fontSize: 52,
    color: COLORS.PRIMARY()
  },
  BODY: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 300,
    fontSize: 20,
    lineHeight: 1.7,
    color: COLORS.PRIMARY_TEXT
  },
};

export const SPACING = {
  MARGIN_XS: 4,
  MARGIN_SM: 8,
  MARGIN_MD: 16,
  MARGIN_LG: 24,
  MARGIN_XL: 32,
};
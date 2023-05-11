import { ActionIcon, Container, clsx, createStyles, rem } from '@mantine/core'
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { COLORS, SPACING } from '../../constants/constants';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: 'rgba(56, 61, 40, 1)',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    alignItems: 'center'
  },

  actionButton: {
    ':hover': {
      backgroundColor: COLORS.PRIMARY(0.3),
    }
  }
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={clsx(classes.footer, 'panel')}>
      <Container className={classes.inner} size={1200}>
        <div className={classes.logo}>
          <StaticImage placeholder='tracedSVG' src='../../images/arya-pulses-logo-white.png' alt='Arya Pulses Logo' />
        </div>
        <div style={{marginTop: SPACING.MARGIN_XL * 2, display: 'flex', gap: SPACING.MARGIN_SM}}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="#FFF"></path>
          </svg>
          <p style={{color: '#FFFFFF', fontSize: 16}}>8 Celia Road NorthKellyville NSW 2155, Australia.</p>
        </div>
        <div style={{marginTop: SPACING.MARGIN_LG, display: 'flex', gap: SPACING.MARGIN_SM}}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
          </svg>
          <p style={{color: '#FFFFFF', fontSize: 16}} size="xs" color="white">+61 420 828 321</p>
        </div>
        <div style={{marginTop: SPACING.MARGIN_LG, display: 'flex', gap: SPACING.MARGIN_SM}}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="#FFF"></path>
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="#FFF"></path>
          </svg>
          <p style={{color: '#FFFFFF', fontSize: 16}} >info@aryapulses.com.au</p>
        </div>

        <div style={{display: 'flex', marginTop: SPACING.MARGIN_LG, gap: SPACING.MARGIN_SM}}>
          <ActionIcon className={classes.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-meta" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"></path>
              <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"></path>
            </svg>
          </ActionIcon>
          <ActionIcon className={classes.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
          </ActionIcon>
          <ActionIcon className={classes.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </ActionIcon>
        </div>
      </Container>
      <div style={{ height: 67, backgroundColor: '#2D301F', color: '#FFFFFF', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: 14 }}>© All Rights Reserved 2023 | Aryapulses.com.au</p>
      </div>
    </footer>
  )
}

export default Footer
import * as React from "react"
import { Link } from "gatsby"
import { Burger, Button, CloseButton, Container, Group, Header, Modal, Paper, TextInput, Textarea, Transition, createStyles, rem } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import AryaLogo from "../images/arya-pulses-logo.svg";
import { COLORS, FONTS, SPACING } from "../constants/constants";
import { BREAKPOINT } from "../constants/breakpoints";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({

  logo: {
    width: 150,
    height: 90,

    [theme.fn.smallerThan(BREAKPOINT.md)] : {
      width: 100,
      height: 50,
    }
  },

  root: {
    position: 'relative',
    zIndex: 1,
  },
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: COLORS.PRIMARY(),
    position: 'absolute',
    top: rem(80),
    left: 0,
    right: 0,
    zIndex: 100,
    overflow: 'hidden',

    [theme.fn.largerThan(BREAKPOINT.sm + 110)]: {
      display: 'none',
    },
  },

  links: {
    [theme.fn.smallerThan(BREAKPOINT.sm + 110)]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan(BREAKPOINT.sm + 110)]: {
      display: 'none',
    },
  },

  link: {
    ...FONTS.BODY,
    fontSize: 18,
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    textDecoration: 'none',
    color: COLORS.PRIMARY(),
    transition: 'font-weight .2s ease-in-out',

    [theme.fn.smallerThan(BREAKPOINT.sm + 110)] : {
      color: '#FFF',
      paddingTop: SPACING.MARGIN_MD,
      paddingBottom: SPACING.MARGIN_MD,
      borderBottom: '1.5px solid rgba(255,255,255,0.2)',
    },

    '&:hover': {
      fontWeight: 900
    }
  },

  linkLabel: {
    marginRight: rem(5),
    fontFamily: 'Inter !important',
  },
  enquiryBtn: {
    backgroundColor: COLORS.PRIMARY(0.9),
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: COLORS.PRIMARY(1)
    }
  },
  modal: {
    '.mantine-Modal-inner': {
      paddingLeft: 0
    }
  },
  textInput: {
    '.mantine-TextInput-error': {
      fontSize: '12px',
    },
    '.mantine-Textarea-error': {
      fontSize: '12px',
    }
  }
}));

const links = [
  {
    label: 'About Us',
    link: '#about-us'
  },
  {
    label: 'What we do',
    link: '#what-we-do'
  },
  {
    label: 'Proteins',
    link: '#plant-protein'
  },
  {
    label: 'Our Products',
    link: '#our-products'
  },
  {
    label: 'Our Market',
    link: '#map'
  }
]

const Head = ({ siteTitle, headerStyle, showLinks=true }) => {
  const [opened, dropdownOptions] = useDisclosure(false);
  const [enquiryOpened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      message: ''
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      mobile: (value) => (/^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/.test(value) ? null : 'Invalid mobile number'),
      message: (value) => (value.length < 10 ? 'Message must have at least 10 letters' : null)
    }
  })

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          scrollTo(link.link)
          dropdownOptions.close()
          event.preventDefault()
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
  <Header py={15}
    sx={{
      border: 'none',
      backgroundColor: COLORS.SECONDARY(0.6),
      ...headerStyle
    }}
    className={classes.root}
  >
    <Container size={1200}>
      <div className={classes.inner}>
        <Link to="/">
          <AryaLogo className={classes.logo} />
        </Link>
        {
          showLinks && (
            <>
              <Group spacing={5} className={classes.links}>
                {items}
                <Button onClick={open} radius='xs' size='md' ml={SPACING.MARGIN_MD} className={classes.enquiryBtn}>Enquiry</Button>
              </Group>
              <Burger opened={opened} onClick={dropdownOptions.toggle} className={classes.burger} size="sm" />
              <Transition transition='scale-y' duration={200} mounted={opened}>
                {(styles) => (
                  <Paper className={classes.dropdown} style={styles} px={SPACING.MARGIN_LG} py={SPACING.MARGIN_SM}>
                    {items}
                    <div style={{marginTop: 20, marginBottom: 20}}>
                      <Button onClick={open} size='xs' radius="xl" style={{backgroundColor: COLORS.SECONDARY(), color: COLORS.PRIMARY()}}>Enquiry</Button>
                    </div>
                  </Paper>
                )}
              </Transition>
            </>
          )
        }
      </div>
    </Container>
    <Modal
      opened={enquiryOpened}
      onClose={close}
      centered
      size='lg'
      withCloseButton={false}
      className={classes.modal}
      overlayProps={{
        color: COLORS.PRIMARY(0.8),
        blur: 2,
        gradient: `url(https://i.imgur.com/JDPmcAv.png)`,
      }}
    >
      <div style={{padding: SPACING.MARGIN_LG,}}>
        {/* <Button compact size="xs" variant="subtle" color="dark">Close</Button> */}
        <CloseButton style={{position: 'absolute', top: SPACING.MARGIN_LG, right: SPACING.MARGIN_LG}} onClick={close} />
        <h1 style={{...FONTS.TITLE, fontSize: 32}}>Have a query?<br/>Send us a message</h1>
        <p style={{...FONTS.BODY, fontSize: 18, marginTop: SPACING.MARGIN_SM, maxWidth: '70%'}}>Send us a message and we'll get back to you at the earliest.</p>
        <form onSubmit={form.onSubmit(console.log)} style={{marginTop: SPACING.MARGIN_LG, display: 'flex', flexDirection: 'column', gap: SPACING.MARGIN_MD}}>
          <TextInput
            radius='xs'
            size='md'
            placeholder="Name"
            className={classes.textInput}
            {...form.getInputProps('name')}
          />
          <TextInput
            radius='xs'
            size='md'
            placeholder="Email Address"
            className={classes.textInput}
            {...form.getInputProps('email')}
          />
          <TextInput
            radius='xs'
            size='md'
            placeholder="Mobile No"
            className={classes.textInput}
            {...form.getInputProps('mobile')}
          />
          <Textarea
            radius='xs'
            size='md'
            placeholder="Whats in your mind?"
            className={classes.textInput}
            {...form.getInputProps('message')}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', gap: SPACING.MARGIN_SM}}>
            <Button type="submit" style={{backgroundColor: COLORS.PRIMARY()}} radius='xs' size='md'>Submit</Button>
          </div>
        </form>
      </div>
    </Modal>
  </Header>
)}

export default Head

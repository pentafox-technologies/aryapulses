import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Alert,
  Box,
  Burger,
  Button,
  CloseButton,
  Loader,
  LoadingOverlay,
  Modal,
  Paper,
  TextInput,
  Textarea,
  Transition,
  createStyles,
  rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import AryaLogo from "../images/arya-pulses-logo.svg"
import { COLORS, FONTS, SPACING } from "../constants/constants"
import { BREAKPOINT } from "../constants/breakpoints"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useForm } from "@mantine/form"
import styled from "styled-components"
import { submitEnquiry } from "../services/Enquiry"
import HCaptcha from "@hcaptcha/react-hcaptcha"

const useStyles = createStyles(theme => ({
  logo: {
    width: 170,
    height: 90,

    [theme.fn.smallerThan(BREAKPOINT.md)]: {
      width: 130,
      height: 50,
    },
  },
  dropdown: {
    backgroundColor: COLORS.PRIMARY(),
    position: "absolute",
    top: rem(80),
    left: 0,
    right: 0,
    zIndex: 100,
    overflow: "hidden",

    [theme.fn.largerThan(BREAKPOINT.sm + 110)]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan(BREAKPOINT.sm + 110)]: {
      display: "none",
    },
  },

  linkLabel: {
    marginRight: rem(5),
    fontFamily: "Inter !important",
  },
  modal: {
    ".mantine-Modal-inner": {
      paddingLeft: 0,
    },
  },
  textInput: {
    ".mantine-TextInput-error": {
      fontSize: "12px",
    },
    ".mantine-Textarea-error": {
      fontSize: "12px",
    },
  },
}))

const RootContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 15px 0px;
`

const HeaderContainer = styled.div`
  max-width: 75rem;
  padding: 0px 1rem;
  margin: 0 auto;
`

const Inner = styled.div`
  height: ${rem(56)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinksItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(BREAKPOINT.sm + 110) / 16}em) {
    display: none;
  }
`

const EnquiryBtn = styled(Button)`
  background-color: ${COLORS.PRIMARY(0.9)};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${COLORS.PRIMARY(1)};
  }
`

const LinkItem = styled.a`
  ${FONTS.BODY};
  font-size: 18px;
  display: block;
  line-height: 1;
  padding: ${rem(8)} ${rem(12)};
  text-decoration: none;
  color: ${COLORS.PRIMARY()};
  transition: font-weight 0.2s ease-in-out;

  &:hover {
    font-weight: 900;
  }

  @media screen and (max-width: ${BREAKPOINT.sm + 110}px) {
    color: #fff;
    padding: ${SPACING.MARGIN_MD}px 0px;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
  }
`

const links = [
  {
    label: "About Us",
    link: "#about-us",
  },
  {
    label: "What we do",
    link: "#what-we-do",
  },
  {
    label: "Proteins",
    link: "#plant-protein",
  },
  {
    label: "Our Products",
    link: "#our-products",
  },
  {
    label: "Our Market",
    link: "#map",
  },
]

const Head = ({ siteTitle, headerStyle, showLinks = true }) => {
  const [opened, dropdownOptions] = useDisclosure(false)
  const [enquiryOpened, { open, close }] = useDisclosure(false)
  const [visible, overlay] = useDisclosure(false)
  const [errorAlert, alertOptions] = useDisclosure(false)
  const [captchaToken, setCaptchaToken] = useState()
  const [alertMessage, setAlertMessage] = useState()
  const { classes } = useStyles()

  const handleSubmit = body => {
    if(captchaToken) {
      alertOptions.close()
      overlay.open()
      const bodyValues = {
        ...body,
        captchaToken
      }
      submitEnquiry(bodyValues)
        .then(() => {
          overlay.close()
          form.reset()
          close()
        })
        .catch(err => {
          overlay.close()
          console.error(err)
          alertOptions.open()
        })
    } else {
      setAlertMessage("Please check captcha to submit your request.")
      alertOptions.open()
    }
  }

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validate: {
      name: value =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: value => (value.length < 5 ? "Invalid mobile number" : null),
      message: value =>
        value.length < 10 ? "Message must have at least 10 letters" : null,
    },
  })

  const items = links.map(link => {
    return (
      <LinkItem
        key={link.label}
        href={link.link}
        onClick={event => {
          scrollTo(link.link)
          dropdownOptions.close()
          event.preventDefault()
        }}
      >
        {link.label}
      </LinkItem>
    )
  })

  return (
    <RootContainer
      style={{
        backgroundColor: COLORS.SECONDARY(0.6),
        ...headerStyle,
      }}
    >
      <HeaderContainer size={1200}>
        <Inner>
          <Link to="/">
            <AryaLogo className={classes.logo} />
          </Link>
          {showLinks && (
            <>
              <LinksItem spacing={5}>
                {items}
                <EnquiryBtn
                  onClick={open}
                  radius="xs"
                  size="md"
                  ml={SPACING.MARGIN_MD}
                  style={{ backgroundColor: COLORS.PRIMARY() }}
                >
                  Enquiry
                </EnquiryBtn>
              </LinksItem>
              <Burger
                opened={opened}
                onClick={dropdownOptions.toggle}
                className={classes.burger}
                size="sm"
              />
              <Transition transition="scale-y" duration={200} mounted={opened}>
                {styles => (
                  <Paper
                    className={classes.dropdown}
                    style={styles}
                    px={SPACING.MARGIN_LG}
                    py={SPACING.MARGIN_SM}
                  >
                    {items}
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                      <Button
                        onClick={open}
                        size="xs"
                        radius="xl"
                        style={{
                          backgroundColor: COLORS.SECONDARY(),
                          color: COLORS.PRIMARY(),
                        }}
                      >
                        Enquiry
                      </Button>
                    </div>
                  </Paper>
                )}
              </Transition>
            </>
          )}
        </Inner>
      </HeaderContainer>
      <Modal
        opened={enquiryOpened}
        onClose={() => {
          close()
          form.reset()
        }}
        centered
        size="lg"
        withCloseButton={false}
        className={classes.modal}
        overlayProps={{
          color: COLORS.PRIMARY(0.8),
          blur: 2,
          gradient: `url(https://i.imgur.com/JDPmcAv.png)`,
        }}
      >
        <Box style={{ padding: SPACING.MARGIN_LG }} pos="relative">
          <LoadingOverlay
            loader={<Loader color="teal" variant="dots" />}
            visible={visible}
            overlayBlur={1}
          />
          <CloseButton
            style={{
              position: "absolute",
              top: SPACING.MARGIN_LG,
              right: SPACING.MARGIN_LG,
            }}
            onClick={() => {
              close()
              form.reset()
            }}
          />
          <h1 style={{ ...FONTS.TITLE, fontSize: 32 }}>
            Have a query?
            <br />
            Send us a message
          </h1>
          <p
            style={{
              ...FONTS.BODY,
              fontSize: 18,
              marginTop: SPACING.MARGIN_SM,
              maxWidth: "70%",
            }}
          >
            Send us a message and we'll get back to you at the earliest.
          </p>
          {errorAlert && (
            <Alert
              mt={10}
              withCloseButton
              onClose={() => alertOptions.close()}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-alert-hexagon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              }
              title="Oops!"
              color="red"
            >
              {
                alertMessage ? alertMessage :
                `Something went wrong while submitting your inquiry. Please try
                again later or contact us directly through whatsapp. We apologize
                for the inconvenience.`
              }
            </Alert>
          )}
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            style={{
              marginTop: SPACING.MARGIN_LG,
              display: "flex",
              flexDirection: "column",
              gap: SPACING.MARGIN_MD,
            }}
          >
            <TextInput
              radius="xs"
              size="md"
              placeholder="Name"
              className={classes.textInput}
              {...form.getInputProps("name")}
            />
            <TextInput
              radius="xs"
              size="md"
              placeholder="Email Address"
              className={classes.textInput}
              {...form.getInputProps("email")}
            />
            <TextInput
              radius="xs"
              size="md"
              placeholder="Mobile No"
              className={classes.textInput}
              {...form.getInputProps("mobile")}
            />
            <Textarea
              radius="xs"
              size="md"
              placeholder="Whats in your mind?"
              className={classes.textInput}
              {...form.getInputProps("message")}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: SPACING.MARGIN_SM,
              }}
            >
              <HCaptcha
                sitekey={process.env.GATSBY_CAPTCHA_TOKEN}
                onVerify={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken()}
              />
              <Button
                type="submit"
                style={{ backgroundColor: COLORS.PRIMARY() }}
                radius="xs"
                size="md"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </RootContainer>
  )
}

export default Head

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Container, Group, Text, Title, createStyles, rem } from "@mantine/core"
import { COLORS, FONTS } from "../constants/constants";
import { navigate } from "gatsby";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: COLORS.SECONDARY(),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    ...FONTS.TITLE,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  button: {
    color: COLORS.PRIMARY(),
    ':hover': {
      backgroundColor: COLORS.SECONDARY()
    }
  }
}));

const NotFoundPage = () => {
  const { classes } = useStyles();

  return (
  <Layout headerStyle={{backgroundColor: '#FFF'}} showLinks={false}>
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group position="center">
        <Button variant="subtle" size="md" className={classes.button} onClick={() => navigate('/')}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  </Layout>
)}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

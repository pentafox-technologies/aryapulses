import { Affix, Button, Dialog } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import React from "react"
import { COLORS, SPACING } from "../constants/constants";

const ChatButton = () => {
  const [chatOpened, { toggle, close }] = useDisclosure(false);

  return (
    <>
    <Affix position={{ bottom: 30, right: 30 }}>
      <Button
        onClick={toggle}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          backgroundColor: "#25D366",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-whatsapp"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#FFF"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
        </svg>
      </Button>
    </Affix>
      <Dialog
        opened={chatOpened}
        withCloseButton
        onClose={close}
        shadow="xs"
        size="md"
        position={{
          bottom: 100,
          right: 30,
        }}
      >
        <p style={{ fontSize: 18, fontWeight: 600, color: COLORS.PRIMARY() }}>
          Need Assistance?
        </p>
        <p style={{ fontSize: 14, marginTop: SPACING.MARGIN_SM }}>
          Have a question or need help? Chat with us instantly on WhatsApp and
          get quick support from our team.
        </p>
        <div
          style={{
            marginTop: SPACING.MARGIN_MD,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button component="a" href="https://wa.me/+61420828321" target="_blank" size="xs" radius="xl" color="teal">
            START CHAT
          </Button>
        </div>
      </Dialog>
    </>
  )
}

export default ChatButton

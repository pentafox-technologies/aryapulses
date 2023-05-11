import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ChatButton from "../components/ChatButton"
import Plantprotein from "./sections/Plantprotein"
import OurProducts from "./sections/OurProducts"
import Landing from "./sections/Landing"
import Aboutus from "./sections/Aboutus"
import WhatWeDo from "./sections/WhatWeDo"
import MarketPresence from "./sections/MarketPresence"

const IndexPage = () => {

  return (
    <Layout>
      <ChatButton />
      {/* Hero Section */}
      <Landing />

      {/* About Us Section */}
      <Aboutus />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Plant Protein Section */}
      <Plantprotein />

      {/* Our Products Section */}
      <OurProducts />

      {/* Map Section */}
      <MarketPresence />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

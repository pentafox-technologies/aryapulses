/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { COLORS } from "../constants/constants"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleDesc
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const pageTitleFull = `${site.siteMetadata?.title} | ${site.siteMetadata?.titleDesc}`

  return (
    <>
      <html lang="en" />

      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <title>{pageTitleFull}</title>
      
      <meta content={title} name="apple-mobile-web-app-title" />
      <meta content={pageTitleFull} property="og:title" />
      <meta content={pageTitleFull} name="twitter:title" />
      
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />

      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
      <meta content={COLORS.PRIMARY()} name="theme-color" />
      <meta content={pageTitleFull} name="application-name" />

      <meta property="og:type" content="website" />
      <meta content={pageTitleFull} property="og:site_name" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={pageTitleFull} name="twitter:text:title" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:url" content={site.siteMetadata.siteUrl} />
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />

      <meta content={`${site.siteMetadata.siteUrl}/social.png`} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta content={`${site.siteMetadata.siteUrl}/social.png`} name="twitter:image" />
      <meta content="1024" name="twitter:image:width" />
      <meta content="512" name="twitter:image:height" />
      <meta content={`${site.siteMetadata.siteUrl}/social.png`} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />

      <meta content={COLORS.PRIMARY()} name="msapplication-TileColor" />
      <meta content="/icons/mstile-70x70.png" name="msapplication-square70x70" />

      <link href="/manifest.json" rel="manifest" />
      <link rel="icon" type="image/png" href={`${site.siteMetadata.siteUrl}/arya-pulses-icon.png`} sizes="any" />

      {children}
    </>
  )
}

export default Seo

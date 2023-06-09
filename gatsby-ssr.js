/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
// const React = require("react")
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@mantine/ssr';

const stylesServer = createStylesServer();

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents, setBodyAttributes, setHeadComponents, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setPreBodyComponents([
    <div id='preloader'>
      <img id="loader-img" src="/arya-pulses-logo-notext.png" alt="logo" style={{"width": 80}} />
    </div>
  ])
  setBodyAttributes({
    className: 'preloader_active'
  })
  setHeadComponents([
    <>
      <link as='script' rel='preload' href="/scripts/preloader.js" />
      <noscript>
        <link rel='stylesheet' href='/styles/noscript.css' defer />
      </noscript>
    </>
  ])
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
  replaceBodyHTMLString(html);
};
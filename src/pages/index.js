import * as React from "react"
import Layout from "../components/layout"
import { StaticImage  } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (  
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Leopard" src="https://petmagazine.rs/wp-content/uploads/2019/05/leopard-odmara.jpg" />
      <StaticImage alt="Leopard from local" src="../images/Leopard.jpg" />
    </Layout>
  )
}

export default IndexPage

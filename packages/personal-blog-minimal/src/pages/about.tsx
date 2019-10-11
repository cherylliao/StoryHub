import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Cheryl"
        description="Cheryl is a software engineer available for website design, mockup and development.  She is available for remote contract work."
      />

      <About />
    </Layout>
  )
}

export default AboutPage

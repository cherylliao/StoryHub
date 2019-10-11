import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/Contact"

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Contact Cheryl"
        description="Cheryl is a freelance developer with expertise in mobile web and artificial intelligence."
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage

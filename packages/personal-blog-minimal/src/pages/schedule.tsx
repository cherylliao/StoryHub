import React from "react";
import Schedule from "../containers/Schedule"
import Layout from "../components/layout"
import SEO from "../components/seo";


type SchedulePageProps = {}

const SchedulePage: React.FunctionComponent<SchedulePageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />
      <Schedule />
     
    </Layout>
  )
}

export default SchedulePage;

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import test1 from "./test1.jpg"
import test2 from "./test2.jpg"
import {
  AboutWrapper,
  TestImage,

  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In",
  },
]

interface AboutProps {}

const NotFound: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      
      <h5>0.4</h5>
        <h2 style={{color:'#e60000'}}>WHAT BUILDERS SAY</h2>
      <TestImage>
      <img src={test1} alt="test" />
      </TestImage>
      <TestImage>
      <img src={test2} alt="test" />
      </TestImage>
      {/* <AboutPageTitle>
        <h2>About StoryHub</h2>
        <p>
          StoryHub is a beautiful Gatsby Blog theme designed to showcase your
          work in style. Perfect for designers, artists, photographers and
          developers to use for their portfolio website.
        </p>
      </AboutPageTitle> */}

      <AboutDetails>
      
       
      

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default NotFound

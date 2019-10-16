import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/teammotobuild/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/team_moto_build/",
    tooltip: "Instagram",
  },
  // {
  //   icon: <IoLogoTwitter />,
  //   url: "https://twitter.com/redqinc",
  //   tooltip: "Twitter",
  // },
  // {
  //   icon: <IoLogoLinkedin />,
  //   url: "https://www.linkedin.com/company/redqinc/",
  //   tooltip: "Linked In",
  // },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
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
      

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>
      {/* <AboutPageTitle>
        <h2>About StoryHub</h2>
        <p>
          StoryHub is a beautiful Gatsby Blog theme designed to showcase your
          work in style. Perfect for designers, artists, photographers and
          developers to use for their portfolio website.
        </p>
      </AboutPageTitle> */}

      <AboutDetails>
      <h5>0.1</h5>
        <h2 style={{color:'#cd1b21'}}>LETS BUILD</h2>
        <p>
        Team Moto Build gives you and your colleagues a chance to build a 
        Honda CB350 from the ground up in a true rider’s playground. Gather your teams (up to four teams of six 
        builders), roll up your sleeves and amaze yourself at what you can make just from parts, hardware and 
        instructions. We provide the tools and the guidance. You bring the spirit of camaraderie. We’ll eat, 
        drink and build. Whether you’re a lifelong rider or have never touched a wrench, you’ll learn how easy 
        and fun it is to own the process and build a classic bike from the ground up.
        </p>
      

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
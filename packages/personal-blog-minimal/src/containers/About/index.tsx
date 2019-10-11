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
  // {
  //   icon: <IoLogoFacebook />,
  //   url: "https://www.facebook.com/redqinc/",
  //   tooltip: "Facebook",
  // },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/sixcheryl/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/CherylLiao8",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/cheryl-liao-2b431a97/",
    tooltip: "Linked In",
  },
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
      <AboutPageTitle>
        <h2>About StoryHub</h2>
        <p>
        AnarchySrc stands for the rebellious, revolutionary, nationless 
          nature of software source codes.  Software deconstructs all pre-made 
          millenia human conceptions of what is possible and what is not.  
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>From AI to distributed applicaions</h2>
        <p>
        The above image was made using a Goole designed neural network and a Dali painting via transfer learning.  
        There are so many new exciting technolgoy solutions at our fingertips today.
        </p>
        <p>
        How will you shout out your ideas so that it crosses oceans and reach global scale? 
          I seek to make beautiful, state of the art technology solutions using the latest tech stack to make it possible.
          My main concern is
          creating more value into the application so that can help you grow your business.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About

import * as React from "react"
import PersonalBlogWrapper from "./style"
import Posts from "./Posts"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
 
  SocialProfiles
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


type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
     
      <Posts />
      <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
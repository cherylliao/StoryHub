import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  ScheduleWrapper,
  ScheduleImage,
  ScheduleTitle,
  Desciption,
  ScheduleInfo,
} from "./style"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io"

type ScheduleProps = {}

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "#",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/sixcheryl/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "#",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/cherylliao",
    tooltip: "Github",
  },
]

const Schedule: React.FunctionComponent<ScheduleProps> = props => {
  
  return (
    <ScheduleWrapper>
      
      <ScheduleInfo>
        <ScheduleTitle>
          Schedule an Appointment
        </ScheduleTitle>
        <Desciption>
              <a href="#"></a>

        </Desciption>
        <SocialProfile items={SocialLinks} />
      </ScheduleInfo>
    </ScheduleWrapper>
  )
}

export default Schedule

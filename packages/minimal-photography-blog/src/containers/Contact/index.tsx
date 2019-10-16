import * as React from "react"
import { Formik, FormikActions, FormikProps, Form } from "formik"
import * as Yup from "yup"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from "./style"
import {
 
  SocialProfiles
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

interface MyFormValues {
  firstName: string
  email: string
  phone: String
  company:String
  message: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required"),
})

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", phone: "", company: "", message: "" }}
      onSubmit={(
        values: MyFormValues,
        actions: FormikActions<MyFormValues>
      ) => {
        setTimeout(() => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 700)
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
              <h5>0.3</h5>
                <h2>GET IN TOUCH</h2>
                <p>
                Interest sparked in Team Moto Build? Ready to rev? Give us your deets, ask us any questions and tell us your 
                team size and target dates for your build. We’ll be in touch in a flash.
                </p>
                <h3>
                Phone: 312.953.0869 Email: Fun@TeamMotoBuild.com
                </h3>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                    notification={`${
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ""
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    notification={`${
                      errors.email && touched.email ? errors.email : ""
                    }`}
                  />
                  
                </InputGroup>
                <InputGroup>
                <Input
                    type="tel"
                    name="phone"
                    value={`${values.phone}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Phone Number"
                    placeholder="123-4567-8901"
                    notification={`${
                      errors.phone && touched.phone
                        ? errors.phone
                        : ""
                    }`}
                  />
                  <Input
                    type="text"
                    name="company"
                    value={`${values.company}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Company"
                    notification={`${
                      errors.company && touched.company ? errors.company : ""
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Message"
                  notification={
                    errors.message && touched.message ? errors.message : ""
                  }
                />
                <Button
                  title="Submit"
                  type="submit"
                  isLoading={isSubmitting ? true : false}
                  loader="Submitting.."
                />
              </ContactFromWrapper>
              <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  )
}

export default Contact

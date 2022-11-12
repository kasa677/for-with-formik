import * as Yup from "yup"
export const signUpSchema=Yup.object({
  fname:Yup.string().min(3).max(25).required("please enter your name"),
  email:Yup.string().email().required("please enter your email"),
  password:Yup.string().min(6).required("please enter your password"),
  copassword:Yup.string().required().oneOf([Yup.ref("password"),null],"password must match")
})
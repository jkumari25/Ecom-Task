import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import Swal from "sweetalert2";
type FormType = {
  name: string;
  email: string;
  phoneNo: string;
  subject: string;
  message: string;
};


export default function Contactfrom() {
    let initialValues: FormType = {
        name: "",
        email: "",
        phoneNo: "",
        subject: "",
        message: "",
      };
      const formik = useFormik({
        initialValues,
    
        validationSchema: Yup.object({
          name: Yup.string()
            .required("* Name is required")
            .min(2, "* Enter a valid name"),
          email: Yup.string()
            .email("* Enter a valid E-mail")
            .required("* E-mail is required"),
            phoneNo: Yup.string().required("* phone no. is required"),

          subject: Yup.string().required("* subject is required"),
    
          message: Yup.string().required("* Write some Message"),
        }),
        onSubmit: (values: FormType, props: FormikHelpers<FormType>) => {
          console.log(values);
    
          props.resetForm();
          Swal.fire({
            title: "Message send Successfully",
            icon: "success",
          });
        },
      });
  return (
    <section  className="w-full  main-container flex flex-col items-center justify-center  my-24 ">
    <div className="w-full ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.827461365707!2d85.32161387580956!3d23.358264703716703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa6596407a6b69%3A0xb419e0b663805644!2sExogenous%20Technology!5e0!3m2!1sen!2sin!4v1686964581019!5m2!1sen!2sin" className="w-full h-[50vh]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="w-full h-auto  my-20">
          <span className="  w-full h-full p-6 flex flex-col items-start justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <p className="text-2xl font-bold text-[#071c1f]">
            Send Message
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-start justify-center gap-4"
            >
              <span className="center w-full gap-2">
                <span className="relative w-full ">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Enter name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <PersonIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8796c]"/>
                </span>
                <span  className="relative w-full ">
                <TextField
                  className="w-full"
                  name="email"
                  type={"email"}
                  placeholder="Enter Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <EmailIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8796c]"/>
                </span>
              </span>
              <span className="center w-full gap-2">
                <span className="relative w-full">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Enter Phone Number"
                  name="phoneNo"
                  value={formik.values.phoneNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.phoneNo && formik.errors.phoneNo)}
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                />
                <PhoneEnabledIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8796c]"/>
                </span>
                <span className="relative w-full">
                <TextField
                 className="w-full"
                 name="subject"
                 type={"text"}
                 placeholder="Enter Subject"
                 value={formik.values.subject}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={Boolean(formik.touched.subject && formik.errors.subject)}
                 helperText={formik.touched.subject && formik.errors.subject}
                />
                <DescriptionIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8796c]"/>
              </span>
              </span>
              <span className="relative w-full">
              <TextField
                className="w-full"
                rows={"3"}
                multiline
                name="message"
                type={"text"}
                placeholder="Enter message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.message && formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <EditIcon className="absolute right-4 top-4 text-[#f8796c]"/>
              </span>
              <p className=" text-black text-lg buttonfx slideleft px-8 py-2 overflow-hidden  font-bold capitalize hover:text-[#f8796c] border-2">Submit</p>
            </form>
          </span>
        </div>
    </section>
  )
}

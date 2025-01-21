import React, { useState } from "react";
import Header from "../Header/Header";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInout from "./MyTextInout";

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="The background"
        />
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          password: Yup.string()
            .required("No Password Provided")
            .min(8, "Password is too short - should be 8 char minimum")
            .matches(/[a-zA-Z]/, "Password can only contain Latin Letters."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
          }, 400);
        }}
      >
        <Form className="w-3/12 absolute text-white p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isLogin ? "Sign Up" : "Sign In"}
          </h1>
          {isLogin && (
            <MyTextInout name="name" type="text" placeholder="Full Name" />
          )}
          <MyTextInout
            name="email"
            type="text"
            placeholder="Enter Your Email"
          />
          <MyTextInout
            name="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            className="p-4 my-4 bg-red-700 w-full rounded-lg"
            type="submit"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="py-4 cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {!isLogin
              ? "New to NetFlix? Sign Up Now."
              : "Already Registered? Sign In Now."}
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

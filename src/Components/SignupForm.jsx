import { useFormik } from "formik";
import { signupSchema } from "../formFunctions/formconditions";
import { signup } from "../formFunctions/signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        setLoading(true);
        signup(values);
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
        await promise;
        navigate("/dashboard");
        localStorage.setItem("signedIn", true);
        setLoading(false);
      },
    });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-4 space-y-4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your first name"
        value={values.firstname}
        onBlur={handleBlur}
        id="firstname"
        className={`input ${errors.firstname} && ${touched.firstname} ? "border border-[#D62560] outline-0 error-animate" : ""`}
      />
      {errors.firstname && touched.firstname && (
        <p className="text-sm -mt-2 text-[#D62560] font-semibold">
          {errors.firstname}
        </p>
      )}
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your Last name"
        value={values.lastname}
        onBlur={handleBlur}
        id="lastname"
        className={`input ${errors.lastname} && ${touched.lastname} ? "border border-[#D62560] outline-0 error-animate" : ""`}
      />
      {errors.lastname && touched.lastname && (
        <p className="text-sm -mt-2 text-[#D62560] font-semibold">
          {errors.lastname}
        </p>
      )}
      <input
        type="email"
        onChange={handleChange}
        placeholder="Enter your email address"
        value={values.email}
        onBlur={handleBlur}
        id="email"
        className={`input ${errors.email} && ${touched.email} ? "border border-[#D62560] outline-0 error-animate" : ""`}
      />
      {errors.email && touched.email && (
        <p className="text-sm -mt-2 text-[#D62560] font-semibold">
          {errors.email}
        </p>
      )}
      <input
        type="password"
        onChange={handleChange}
        placeholder="Enter a password"
        value={values.password}
        onBlur={handleBlur}
        id="password"
        className={`input ${errors.email} && ${touched.email} ? "border border-[#D62560] outline-0 error-animate" : ""`}
      />
      {errors.password && touched.password && (
        <p className="text-sm -mt-2 text-[#D62560] font-semibold">
          {errors.password}
        </p>
      )}
      <input
        type="password"
        onChange={handleChange}
        placeholder="Renter your password"
        value={values.confirmPassword}
        onBlur={handleBlur}
        id="confirmPassword"
        className={`input ${errors.confirmPassword} && ${touched.confirmPassword} ? "border border-[#D62560] outline-0 error-animate" : ""`}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="text-sm -mt-2 text-[#D62560] font-semibold">
          {errors.confirmPassword}
        </p>
      )}
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <input
          type="submit"
          value="Sign In"
          className="bg-[#D62560] text-white font-semibold px-2 py-4 grid place-items-center rounded cursor-pointer"
        />
      )}
    </form>
  );
};

export default SignupForm;

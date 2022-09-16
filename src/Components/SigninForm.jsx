import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinSchema } from "../formFunctions/formconditions";
import { signin } from "../formFunctions/signin";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit: async (values) => {
        setLoading(true);
        signin(values);
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
        await promise;
        localStorage.setItem("signedIn", true);
        setLoading(false);
        navigate("/");
      },
    });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-4 space-y-4">
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

export default SigninForm;

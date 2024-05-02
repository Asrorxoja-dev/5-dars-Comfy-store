import { Form, Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";


function Register() {
 

  return (
    <div className="h-screen grid place-content-center my-4">
      <Form
        method="post"
        className="card w-96 p-8  bg-base-300 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="Display Name:"
          name="displayName"
          defaultValue=""
        />

        <FormInput
          type="url"
          label="Photo Url:"
          name="photoURL"
          defaultValue=""
        />

        <FormInput type="email" label="Email:" name="email" defaultValue="" />
        <FormInput
          type="password"
          label="Password:"
          name="password"
          defaultValue=""
        />
        <div className="mt-2">
          <SubmitBtn text="register" />
        </div>
        {/* <button
              onClick={signUpWithGoogle}
              className="btn mt-1 to-base-300 border-slate-500 w-full text-1xl"
            >
              {" "}
              <FcGoogle className="w-6 h-6" /> Google
            </button> */}
        <p className="text-center">
         have you already an accaunt ?{" "}
          <Link className="capitalize link-primary" to="/login">
            {" "}
            login{" "}
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;

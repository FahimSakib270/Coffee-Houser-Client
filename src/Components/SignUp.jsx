import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // create user
    createUser(email, password)
      .then((res) => {
        {
          console.log(res);
          const userProfile = {
            email,
            ...restFormData,
            creationTime: res?.user?.metadata?.creationTime,
            lastSignInTime: res?.user?.metadata?.lastSignInTime,
          };
          console.log(userProfile);

          //save profile info to the database
          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);

              if (data.insertedId) {
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Your profile has been created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                console.log("profile data", data);
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-3xl font-extrabold text-primary md:text-4xl">
            Create an Account
          </h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your full name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="your address"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="your phone number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter a photo Url"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button className="btn btn-primary w-full" type="submit">
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

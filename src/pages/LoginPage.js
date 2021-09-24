import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div className="container my-5 py-5 z-depth-1">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <form
              className="text-center"
              action="/signup"
              method="post"
            >
              <p className="h4 mb-4">Login</p>
              <input
                type="text"
                name="username"
                className="form-control mb-4"
                placeholder="onChange"
              />

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="onChange"
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline-dark waves-effect"
              >
                Form onSubmit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;

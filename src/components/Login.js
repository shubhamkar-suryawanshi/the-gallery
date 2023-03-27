import { Formik, Form, Field } from 'formik';
const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {() => (
          <Form className="w-1/4 m-auto mt-10">
            <h1 className="font-bold text-4xl text-center mb-5 font-serif">
              Login
            </h1>
            <label className="">Email</label>
            <br />
            <Field
              className="border w-full p-2 border-gray-600"
              name="email"
              type="email"
            />
            <br /> <br />
            <label>Password</label>
            <br />
            <Field
              className="border w-full p-2 border-gray-600"
              name="password"
              type="password"
            />
            <br /> <br />
            <button
              className="text-white p-2 bg-black w-full inline-block rounded-md"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

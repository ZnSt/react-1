import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

export const FormLogin = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  const initialsValues = {
    login: "",
    password: "",
  };
  return (
    <Formik initialValues={initialsValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

import { Formik, Form, Field } from "formik";

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: "", link: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => {
        return (
          <Form>
            <label></label>
            <Field name="title" type="text" placeholder="Описание" />
            <br />
            <label></label>
            <Field name="link" type="text" placeholder="Ссылка" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Добавить материал
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

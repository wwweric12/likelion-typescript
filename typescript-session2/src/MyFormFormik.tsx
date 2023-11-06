import { useFormik } from 'formik';

const MyFormFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormFormik;

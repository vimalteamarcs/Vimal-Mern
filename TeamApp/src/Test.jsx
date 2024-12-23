// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
// };
// const handlesubmit = (values) => {
//   // same shape as initial values
//   console.log(values);
// };
// export const Test = () => (
//   <div className="container  ">
//     <h1>Formik</h1>
//     <Formik
//       initialValues={initialValues}
//       validationSchema={SignupSchema}
//       onSubmit={handlesubmit}
//     >
//       <Form className="row d-flex justify-content-center">
//         <label htmlFor="firstName">First Name</label>
//         <Field
//           type="text"
//           name="firstName"
//           className="form-control col-md-6 col-sm-12 m-1"
//           placeholder="First Name"
//         />
//         <ErrorMessage name="firstName" className="text-danger text-left" />
//         <label htmlFor="lastName">Last Name</label>
//         <Field
//           type="text"
//           name="lastName"
//           className="form-control col-md-6 col-sm-12 m-1"
//           placeholder="Last Name"
//         />
//         <ErrorMessage name="lastName" className="text-danger" />
//         <label htmlFor="email">Email</label>
//         <Field
//           name="email"
//           type="email"
//           className="form-control col-md-6 col-sm-12 m-1"
//           placeholder="Email"
//         />
//         <ErrorMessage name="email" className="text-danger" />

//         <div className="  m-3 text-center">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </Form>
//     </Formik>
//   </div>
// );
// import React from "react";
// import ReactDOM from "react-dom";
// import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

// const initialValues = {
//   friends: [
//     {
//       name: "",
//       email: "",
//     },
//   ],
//   location: [
//     {
//       name: "",
//     },
//   ],
// };

// export const Test = () => (
//   <div>
//     <h1> friends</h1>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <FieldArray name="friends">
//             {({ insert, remove, push }) => (
//               <div>
//                 {values.friends.length > 0 &&
//                   values.friends.map((friend, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.name`}>Name</label>
//                         <Field
//                           name={`friends.${index}.name`}
//                           placeholder="Jane Doe"
//                           type="text"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.email`}>Email</label>
//                         <Field
//                           name={`friends.${index}.email`}
//                           placeholder="jane@acme.com"
//                           type="email"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           X
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ name: "", email: "" })}
//                 >
//                   Add Friend
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <FieldArray name="location">
//             {({ insert, remove, push }) => (
//               <div>
//                 {values.location.length > 0 &&
//                   values.location.map((friend, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">
//                         <label htmlFor={`location.${index}.name`}>Name</label>
//                         <Field
//                           name={`location.${index}.name`}
//                           placeholder="Jane Doe"
//                           type="text"
//                         />
//                         <ErrorMessage
//                           name={`location.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>

//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           X
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ name: "" })}
//                 >
//                   Add location
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <button type="submit">submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" component={TextError}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
export const Test = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

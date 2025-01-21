import { useField } from "formik";
import React from "react";

function MyTextInout({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className="p-4 my-4 w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
}

export default MyTextInout;

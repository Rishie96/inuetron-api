const yup = require("yup");
import { CustomError } from "../../models"

exports.userCreateValidation = (data: any) => {
  return yup
    .object()
    .shape({
      first_name: yup.string().required("First name is required"),
      last_name: yup.string().required("Last name is required"),
      email_id: yup.string().required("Email ID is required"),
    })
    .validate({ ...data }, { abortEarly: false })
    .then(() => null) // validate returns the formData if there are no errors, so returning null explicitly for sanity's sake
    .catch((errors: any) => {
      const error: CustomError = {
        name: '',
        message: '',
      };
      error.name = "ValidationError";
      error.message = errors.inner[0].message;
      throw error;
    });
};

exports.userUpdateValidation = (data: any) => {
  return yup
    .object()
    .shape({
      first_name: yup.string(),
      last_name: yup.string(),
      email_id: yup.string(),
    })
    .validate({ ...data }, { abortEarly: false })
    .then(() => null)
    .catch((errors: any) => {
      const error: CustomError = {
        name: '',
        message: '',
      };
      error.name = "ValidationError";
      error.message = errors.inner[0].message;
      throw error;
    });
};

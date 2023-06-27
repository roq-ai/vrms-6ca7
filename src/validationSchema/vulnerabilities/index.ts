import * as yup from 'yup';

export const vulnerabilityValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.string().required(),
  client_id: yup.string().nullable(),
  pentester_id: yup.string().nullable(),
});

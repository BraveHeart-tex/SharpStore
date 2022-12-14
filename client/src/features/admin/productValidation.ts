import * as yup from 'yup';

export const productValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  brand: yup.string().required('Brand is required'),
  type: yup.string().required(''),
  price: yup.number().required('').moreThan(100),
  quantityInStock: yup.number().required('').min(0),
  description: yup.string().required(''),
  file: yup.mixed().when('pictureUrl', {
    is: (value: string) => !value,
    then: yup.mixed().required('Please provide an image'),
  }),
});

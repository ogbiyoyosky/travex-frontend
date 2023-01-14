import * as Yup from 'yup';

const createListingSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Name is required')
    .min(2, 'Must have at least 2 characters'),
  address: Yup.string()
    .label('Address')
    .required('Address is required')
    .min(2, 'Must have at least 2 characters'),
  description: Yup.string()
    .label('Description')
    .required('Description is required')
    .min(20, 'Must have at least 20 characters'),
});

export default createListingSchema;

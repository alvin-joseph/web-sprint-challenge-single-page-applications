import * as yup from 'yup'

//setting up validation using yup
export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'Size is required'),
    sauce: yup
    .string()
    .oneOf(['red', 'bbq', 'ranch', 'nosauce'], 'Sauce is required'),
    special: yup
    .string()
    .max(20),
    //checkboxes
    pepperoni: yup
    .boolean(),
    sausage: yup
    .boolean(),
    bacon: yup
    .boolean(),
    extraCheese: yup
    .boolean(),
})
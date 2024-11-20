import { boolean, object, string } from 'yup'

export const patientPreregisterSchema = object({
  email: string()
    .email('Debe de ser un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  nationalId: string().required('La CI es requerida'),
  agreeToTerms: boolean().required('Debe aceptar la condiciones'),
})

import { Formik, Field, Form, ErrorMessage} from 'formik';
import s from './CustomFormik.module.scss'
import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Обязательное поле'),
    phoneNumber: Yup.string()
      .min(10, 'Слишком короткий номер')
      .required('Введите номер телефона'),
  });

 export default function CustomFormik(){
    return (
        <>
            <div >
                <Formik 
                initialValues={{
                    phoneNumber: '',
                    name: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={yupSchema}
                >

                <Form className={s.form}>
                    <Field className={s.form__field}
                     id="phoneNumber" 
                     name="phoneNumber" 
                     placeholder="+7 (777) 77 77" />
                    <ErrorMessage name="phoneNumber" component="span" className={s.error} />
                    <Field className={s.form__field} id="name" name="name" placeholder="Ваше имя" />
                    <ErrorMessage name="name" component="span" className={s.error} />
                    <button className={s.form__button} type="submit">Жду звонка !</button>
                </Form>
                </Formik>
            </div>  
        </>
    )
 }
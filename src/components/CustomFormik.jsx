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



async function getData(values, { resetForm, setSubmitting }, setComplete){
    try{
        const request = new Request('https://backend-service-ckgr.onrender.com/submit-data',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name':values.name,
                'phone_number':values.phoneNumber

            })
        })
        const response = await fetch(request)
        console.log(response.status)

        if(response.ok){
            resetForm()
            setComplete()
            
        }
    } catch (error){
        console.log(error);
    } finally {
        setSubmitting(false)
    }
}


 export default function CustomFormik({ setComplete }){

    return (
        <>
            <div >
                <Formik 
                initialValues={{
                    phoneNumber: '',
                    name: '',
                }}
                onSubmit={(values, actions) => getData(values, actions, setComplete)}
                validationSchema={yupSchema}
                >
                {({ isSubmitting}) =>(
                    <Form className={s.form}>
                        <Field className={s.form__field} id="name" name="name" placeholder="Ваше имя" />
                        <ErrorMessage name="name" component="span" className={s.error} />
                        <Field className={s.form__field}
                        id="phoneNumber" 
                        name="phoneNumber" 
                        placeholder="+7 (777) 77 77" />
                        <ErrorMessage name="phoneNumber" component="span" className={s.error} />
                        <button 
                        className={s.form__button} 
                        type="submit"
                        disabled={isSubmitting}>
                            {isSubmitting?
                            <p className={s.form__button__text}>Отправка...</p>:
                            <p className={s.form__button__text}>Жду звонка!</p>}
                        </button>
                    </Form>
                )}
                </Formik>
            </div>  
        </>
    )
 }
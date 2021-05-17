import { useEffect, useRef, useState, use } from 'react'
import styles from './styles.module.scss'
import { Form } from '@unform/web'
import Input from '../Input/index'
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export default function ContactForm() {
    const formRef = useRef(null)
    const [ isSubmited ,setSubmited ] = useState(null)


    const handleFormSubmmit = async data => {
        try { 
            //remove all previous erros
            formRef.current.setErrors({})

           const formSchema = Yup.object().shape({
            name: Yup.string().required('É necessário inserir um nome váilido'),
            email: Yup.string().email('É necessário inserir um email váilido').required('É necessário inserir um email váilido'),
            telefone: Yup.string().min(11, 'É necessário inserir um telefone válido')
                         .matches(phoneRegExp, "Número de telefone inválido")
                         .required().typeError('É necessário inserir um telefone váilido')
            
        })  
    
        await formSchema.validate(data, {
            abortEarly: false,
        })
        setSubmited(true)

        //validation passed
    } catch(err) {
        const validationErrors = {}
        if (err instanceof Yup.ValidationError) {
            err.inner.forEach(error => {
                validationErrors[error.path] = error.message
            
            })

            formRef.current.setErrors(validationErrors)

            //Validation failed 
        }
        
    }
        
    }

    return isSubmited ? (
        <div className={styles.formClass}> Formulário enviado com Sucesso <br />Entraremos em contato!</div>
    ) : (
        <Form className={styles.formClass}
        ref={formRef}
        onSubmit={handleFormSubmmit}
        >
            <div>Nome:</div>
             <Input className={styles.nameInput} name="name" placeholder="Nome completo" /> 
            <div>Email:</div>
             <Input className={styles.emailInput} name="email" type="text" placeholder="Email" />
            <div>Telefone com DDD:</div>
             <Input className={styles.telInput} name="telefone" type="text" placeholder="Telefone com DDD"/>
            <button className={styles.submitButton} type='submit' >Enviar</button>
       
        </Form>
    )
}
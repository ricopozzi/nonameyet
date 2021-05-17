import {useEffect, useRef} from 'react'
import {useField} from '@unform/core'
import styles from '../Input/styles.module.scss'

export default function Input({name, ...rest}) {
    const inputRef = useRef()
    const {fieldName, defaultValue, registerField, error} = useField(name)

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return(
    <>
        <input 
        type="text" 
        name={name}
        ref={inputRef}
        className={error ? 'has-error' : ''}
        {...rest}
        />
        {error && <span className={styles.error}>{error}</span>}
        
    </>
    )
    }
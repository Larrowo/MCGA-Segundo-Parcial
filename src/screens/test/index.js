import React from "react";
import SharedInput from "../../components/SharedInput/SharedInput";
import SharedButton from "../../components/SharedButton/SharedButton";
import { useForm } from "react-hook-form";
import styles from "./test.module.css";

const Test = () => {
    const { register, reset, setValue, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset()
    };
    
    return (
        <>
        <div>Test</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SharedInput
                    type="text"
                    name="name"
                    label="Nombre"
                    errors={errors}
                    register={register}
                    validationSchema={{ 
                        required: "El nombre es requerido",
                        minLength: {
                            value: 3,
                            message: "Por favor ingrese al menos 3 caracteres"
                        }
                    }}
                    required
                />      
                <SharedInput
                    type="number"
                    name="quantity"
                    label="Cantidad"
                    errors={errors}
                    register={register}
                    validationSchema={{ 
                        required: "Cantidad es requerido"
                    }}
                    required
                />

                <div>
                    <SharedButton className={styles.confirm} type="submit">
                        Confirm
                    </SharedButton>
                </div>
            </form>
        </>
    );
  };
  
  export default Test;
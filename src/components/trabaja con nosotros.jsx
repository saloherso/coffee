import React from "react";
import React from 'react';
import { useForm } from 'react-hook-form';

function FormularioHook() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nombre:
        <input
          {...register('nombre', { required: true })}
        />
        {errors.nombre && <span>Este campo es obligatorio</span>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioHook;

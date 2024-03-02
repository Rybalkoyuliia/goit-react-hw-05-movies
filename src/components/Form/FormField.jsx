import React from 'react';

import { useForm } from 'react-hook-form';

import s from './FormField.module.css';

const FormField = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    setSearchParams(data.query ? { query: data.query } : {});
    reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      <label>
        <input
          {...register('query')}
          type="text"
          className={s.input}
          placeholder="Movie title..."
        />
      </label>
      <button className={s.button}>Search</button>
    </form>
  );
};

export default FormField;

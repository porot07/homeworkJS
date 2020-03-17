import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = ({
  handleSubmit, reset, submitTaskForm, className,
}) => {
  const handleAddTask = (formValues) => {
    submitTaskForm(formValues);
    reset();
  };

  return (
    <form className={className} onSubmit={handleSubmit(handleAddTask)}>
      <Field type="text" component="input" name="title" placeholder="изначально какой-то текст..." />
      <Field type="text" component="input" name="body" placeholder="изначально какой-то текст..." />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(Form);

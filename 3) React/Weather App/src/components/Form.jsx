import React from 'react';
import {
  FormGroup, TextField, Button,
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../actions';

const TextFieldWrapper = ({
  input, ...rest
}) => (
  <TextField id="standard-required" label="Please, type here your city..." {...rest} {...input} />
);

const Form = (props) => {
  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const requestState = useSelector((state) => state.weatherUI.requestingState);

  const handleSubmitCity = (formValues) => {
    dispatch(getWeather(formValues.city));
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitCity)}>
      <FormGroup>
        <Field type="select" name="city" component={TextFieldWrapper} />
        <Button variant="contained" color="secondary" type="submit" disabled={requestState === 'request'}>
          {requestState === 'request' ? 'Please, don\'t worry - Be happy :)' : 'Get data weather'}
        </Button>
      </FormGroup>
    </form>
  );
};

export default reduxForm({
  form: 'city',
})(Form);

/**
 *
 * SetProxyForm
 *
 */

import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText="Public Key"
            id="publicKey"
            error={errors.publicKey}
            touched={touched.publicKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Search for this public key',
              value: values.publicKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            Search
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
export default FormObject;

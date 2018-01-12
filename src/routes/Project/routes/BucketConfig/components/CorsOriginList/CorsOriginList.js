import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui-next/IconButton'
import Button from 'material-ui-next/Button'
import { TextField } from 'redux-form-material-ui'
import Typography from 'material-ui-next/Typography'
import { Field } from 'redux-form'
import DeleteIcon from 'material-ui-icons/Delete'
import classes from './CorsOriginList.scss'

export const CorsOriginList = ({ fields, meta: { error, submitFailed } }) => (
  <div style={{ marginBottom: '1rem' }}>
    <Typography className={classes.originHeader} type="headline">
      Origins
    </Typography>
    <div className={classes.add}>
      <Button raised color="primary" onClick={() => fields.push()}>
        Add Origin
      </Button>
      {submitFailed && error && <span>{error}</span>}
    </div>
    {fields.map((member, index) => (
      <div className="flex-row" key={`Origin-${index}`}>
        <Field
          name={member}
          type="text"
          component={TextField}
          floatingLabelText="Origin"
        />
        {index !== 0 && (
          <IconButton
            onClick={() => fields.remove(index)}
            style={{ marginTop: '1.5rem' }}>
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    ))}
  </div>
)

CorsOriginList.propTypes = {
  fields: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default CorsOriginList
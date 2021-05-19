import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function App(props) {
  
  return (
    <div style={{margin:"5%", border:"none"}}>
      
      <FormGroup tag="fieldset">
        <legend>Notification Type:</legend>
        <FormGroup check>
          <Label check>
              <Input type="radio" name="radio1" />{' '}
              Title and Message
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Title, Start time and End time
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Title and Start time
          </Label>
        </FormGroup>
      </FormGroup>
      
       
    </div>
  )  
}

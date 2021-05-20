import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function App(props) {
  
  return (
    <div style={{margin:"5%", border:"none"}}>
      
      <FormGroup tag="fieldset">
        <legend>Notification Type:</legend>
        <FormGroup check>
          <Label check>
              <Input type="radio" name="radio1" onClick={function(){
                var rad1;
                rad1=prompt('Enter the Title and Message [Title,Message]:');
                console.log(rad1);
              }}/>{' '}
              Title and Message
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
              var rad2;
              rad2=prompt('Enter the Title, Start Time and End Time [Title,(HH:MM:SS),(HH:MM:SS)]:');
              console.log(rad2);
            }}/>{' '}
            Title, Start time and End time
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
              var rad3;
              rad3=prompt('Enter the Title and Start Time [Title,(HH:MM:SS)]:');
              console.log(rad3);
            }}/>{' '}
            Title and Start time
          </Label>
        </FormGroup>
      </FormGroup>
      
       
    </div>
  )  
}

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
                var rad1= new Array();
                rad1[0]=prompt('Enter the Title:');
                rad1[1]=prompt('Enter the Message:');
                console.log(rad1);
              }}/>{' '}
              Title and Message
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
              var rad2= new Array();
              rad2[0]=prompt('Enter the Title:');
              rad2[1]=prompt('Enter the Start Time (HH:MM:SS): ');
              rad2[2]=prompt('Enter the End Time (HH:MM:SS): ');
              console.log(rad2);
            }}/>{' '}
            Title, Start time and End time
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
              var rad3= new Array();
              rad3[0]=prompt('Enter the Title:');
              rad3[1]=prompt('Enter the Start Time (HH:MM:SS): ');
              console.log(rad3);
            }}/>{' '}
            Title and Start time
          </Label>
        </FormGroup>
      </FormGroup>
      
       
    </div>
  )  
}

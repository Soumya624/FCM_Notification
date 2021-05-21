import React , {useEffect,useState}from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 import axios from 'axios'

import firebase from './firebase'

export default function App(props) {
  const [disabled, setDisable] = useState(true)
  const [disabled1, setDisable1] = useState(true)
  const [disabled2, setDisable2] = useState(true)
  const [ title, setTitle ] = useState('')
  const [ time, setTime ] = useState('')
  const [ message, setMessage ] = useState('')

  const [ time1 , setTime1] = useState('')
  const [ time2 , setTime2] = useState('')


  useEffect(()=>{
    // axios.post('https://fcm-testing.herokuapp.com/api/send_message/',
    // {
    //   title: "sample_title (This is Required)",
    //   message: "sample_msg (This is Required)",
    // }
    // ).then(function (response) {
    //   console.log(response);
    // })
    const messaging= firebase.messaging()
    messaging.requestPermission().then((token)=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token: ', token);
    }).catch(()=>{
      console.log('Error!')
    })
    messaging.onMessage(function(payload){
            console.log('onMessage: ',payload);
    })
  },[])

  function submitMessage(e){
    e.preventDefault();
    axios.post('https://fcm-testing.herokuapp.com/api/send_message/',
    {
      title,
      message
    }
    ).then(function (response) {
      console.log(response);
    })
    alert(`Your Title: ${title}\nYour Message: ${message}`)

    setMessage("")
    setTitle("")
  }

  function submitTime(e){
    e.preventDefault();
    axios.post('https://fcm-testing.herokuapp.com/api/send_message/',
    {
      title,
      start_time : time
    }
    ).then(function (response) {
      console.log(response);
    })
    alert(`Your Title: ${title}\nStarting Time: ${time}`)

    setTime("")
    setTitle("")
  }
  function submitTimeTotal(e){
    e.preventDefault();
    axios.post('https://fcm-testing.herokuapp.com/api/send_message/',
    {
      title,
      start_time : time1,
      end_time : time2

    }
    ).then(function (response) {
      console.log(response);
    })
    alert(`Your Title: ${title}\nStarting Time: ${time1}\nEnding Time: ${time2}`)

    setTime1("")
    setTime2("")
    setTitle("")
  }


  return (
    <div style={{margin:"5%"}}>
      <FormGroup tag="fieldset">
        <legend>Notification:</legend>
        <FormGroup check>
          <Label check>
              <Input type="radio" name="radio1" onClick={function(){
                setDisable(!disabled)
              }} />{' '}
              Title and Message
          </Label>
        </FormGroup>
          <Form style={disabled ? {display:"none"} : {display:"block"}} onSubmit={submitMessage}>
            <br/>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="title" id="exampleEmail" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Message</Label>
              <Input type="title" id="exampleEmail" placeholder="Message" value={message} onChange={e=>{setMessage(e.target.value)}}/>
            </FormGroup>
            <Button style={{margin:"1% 0%"}}>Submit</Button>
          </Form>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
                setDisable1(!disabled1)
              }}/>{' '}
            Title and Start time
          </Label>
        </FormGroup>
          <Form style={disabled1 ? {display:"none"} : {display:"block"}} onSubmit={submitTime}>
            <br/>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="title" id="exampleEmail" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Write the Time in [yyyy-mm-ddThh:mm:ss]</Label>
              <Input type="title" id="exampleEmail" placeholder="yyyy-mm-ddThh:mm:ss" value={time} onChange={e=>{setTime(e.target.value)}}/>
            </FormGroup>
            <Button style={{margin:"1% 0%"}}>Submit</Button>
          </Form>

          <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={function(){
                setDisable2(!disabled2)
              }}/>{' '}
            Title , Start time and  End time
          </Label>
        </FormGroup>
          <Form style={disabled2 ? {display:"none"} : {display:"block"}} onSubmit={submitTimeTotal}>
            <br/>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="title" id="exampleEmail" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Write the Starting Time in [yyyy-mm-ddThh:mm:ss]</Label>
              <Input type="title" id="exampleEmail" placeholder="yyyy-mm-ddThh:mm:ss" value={time1} onChange={e=>{setTime1(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Write the Ending Time in [yyyy-mm-ddThh:mm:ss]</Label>
              <Input type="title" id="exampleEmail" placeholder="yyyy-mm-ddThh:mm:ss" value={time2} onChange={e=>{setTime2(e.target.value)}}/>
            </FormGroup>
            <Button style={{margin:"1% 0%"}}>Submit</Button>
          </Form>


        


        {/* <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onclick={function(){
              setDisable2(!disabled2)
            }}/>{' '}
            Title , Start time and  End time
          </Label>
          </FormGroup>
      <Form style={disabled2 ? {display:"none"} : {display:"block"}} onSubmit={submitTimeTotal}>
            <br/>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="title" id="exampleEmail" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Write the Start Time in [yyyy-mm-ddThh:mm:ss]</Label>
              <Input type="title" id="exampleEmail" placeholder="yyyy-mm-ddThh:mm:ss" value={time1} onChange={e=>{setTime1(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Write the End Time in [yyyy-mm-ddThh:mm:ss]</Label>
              <Input type="title" id="exampleEmail" placeholder="yyyy-mm-ddThh:mm:ss" value={time2} onChange={e=>{setTime2(e.target.value)}}/>
            </FormGroup>
            <Button style={{margin:"1% 0%"}}>Submit</Button>
          </Form>
       */}
       
      </FormGroup>
    </div>
  )  
}

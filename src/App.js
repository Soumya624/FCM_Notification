import React , {useEffect,useState}from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 import axios from 'axios'

import firebase from './firebase'

export default function App(props) {
  const [ token , setToken ] = useState('')

  const [disabled, setDisable] = useState(true)
  const [disabled1, setDisable1] = useState(true)
  const [disabled2, setDisable2] = useState(true)
  const [ title, setTitle ] = useState('')
  const [ time, setTime ] = useState('')
  const [ message, setMessage ] = useState('')

  const [ time1 , setTime1] = useState('')
  const [ time2 , setTime2] = useState('')

//   {
//     "id": 3,
//     "url": "https://fcm-testing.herokuapp.com/api/fcm_devices/3",
//     "name": "Subhojit Chrome",
//     "active": true,
//     "date_created": "2021-05-21T12:21:52.081418+05:30",
//     "device_id": "3",
//     "registration_id": "d1whUyK5bYxnYzNDSHitK3:APA91bFapWPuA-zhI_OiQcyAQxSCmBirQWfUhdM-Cbigq-za9k1SKz9nnxORy9gSxG9KGNzXWMFa3Pqkskf_bPm45wZn_2kOeGV6WDRX2GzZ_JqfYMpE-mSkPPX4HIjbbKfBVdglneu6",
//     "type": "web",
//     "user": 3
// }

  function setUserDevice(itoken){
    axios.post('https://fcm-testing.herokuapp.com/api/fcm_devices/',
    {
      "name":"Chrome",
      "registration_id": itoken,
      "type":"web"
    }
    ).then(res=>console.log(res))
    .catch(err=>console.log('Error',err))
    alert('User is registered')
  }

  useEffect(()=>{
    // const messaging= firebase.messaging()
    // messaging.onMessage(function(payload){
    //     console.log('onMessage: ',payload);
    // })
  },[])


  function gettingFirebaseToken(){
    if(firebase.messaging.isSupported()){
    const messaging= firebase.messaging()
    messaging.requestPermission().then((token)=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token: ', token);
      axios.get(`https://fcm-testing.herokuapp.com/api/check_registration?reg_id=${token}`)
      .then(res =>{
        res.data.is_registered === false ? setUserDevice(token) : alert("You are already registered")
        console.log('jhj')
        console.log(res.data.is_registered)
      })
    }).catch(()=>{
      console.log('Error!')
      alert('Error!')
    })
    // messaging.onMessage(function(payload){
    //     console.log('onMessage: ',payload);
    // })
  }
  else{
    alert('Your Browser does not support Firebase SDK')
  }
  }

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

  function handleRequestNotification(){
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    // var notification = new Notification("Hi there!");
    gettingFirebaseToken();
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // var notification = new Notification("Hi there!");
        gettingFirebaseToken();
      }
    });
  }

  }
  
  return (
    <div style={{margin:"5%"}}>
      <Button color="primary" onClick={handleRequestNotification}>Allow Notification</Button>
      <FormGroup tag="fieldset">
        <legend>Notification:</legend>
        <FormGroup check>
          <Label check>
              <Input type="checkbox" name="radio1" onClick={function(){
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
            <Input type="checkbox" name="radio1" onClick={function(){
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
            <Input type="checkbox" name="radio1" onClick={function(){
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

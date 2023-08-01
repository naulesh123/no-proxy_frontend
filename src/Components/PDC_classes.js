import React from 'react'
import { useState } from 'react';
import {MapContainer,Marker,TileLayer,Popup} from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import D_navbar from './D_navbar';
import Navbar from './Navbar';


export default function () {
///////////////////////////////// button class(color) ///////////////////////////////////////////
  const [button_text, setbutton_text] = useState('Give Attendance')
  const [button_class, setbutton_class] = useState("btn btn-primary")
    
///////////////////////////////////////// yha setinterval se lagatar coordinates check karenge///////////////////////    

const [repeated_lat, setrepeated_lat] = useState(0)
const [repeated_long, setrepeated_long] = useState(0)



const [count, setcount] = useState(0)
const [button_load, setbutton_load] = useState()




const coo=setInterval(()=>{



  if(navigator.geolocation) 
  {

    navigator.geolocation.getCurrentPosition(
      (position)=>{
      
          const user_latitude0=position.coords.latitude;
          const user_longitude0=position.coords.longitude;
          
          //const new_coords = { latitude: user_latitude0, longitude: user_longitude0 };
          
          //console.log(user_latitude0,user_longitude0);
          //distance_time_calculator(user_latitude,user_longitude);

    
            setrepeated_lat(position.coords.latitude);
            setrepeated_long(position.coords.longitude);
            //const str=
           //console.log(user_latitude);

          // console.log(repeated_lat,repeated_long)
          
           
           if((repeated_lat==22.251395365330623.toFixed(6))&&repeated_long==84.90473652789557.toFixed(6))
           {
           setbutton_text(<a href='./Faceapi'>Proceed for Face recognition</a>);
           setbutton_class('btn btn-success');
           }
        


        },
    (error)=>{
  console.log(error)
    }
    )
      
  }

  else{
alert("Your Browser don't support Geolocation");
  } 








},100)








///////////////////////////////////////////yaha user ka coordinates niklega///////////////////////////////
// const user_latitude=1;
// const user_longitude=1;
// const [button_text, setbutton_text] = useState('Give Attendance')
// const [button_class, setbutton_class] = useState("btn btn-primary")


const [userlatitude, setuserlatitude] = useState(1);
const [userlongitude, setuserlongitude] = useState(1);
const [Text, setText] = useState('');

    
  

    const getcoordinates=()=>{
    
    


      if(navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(
        (position)=>{
        
            const user_latitude=position.coords.latitude;
            const user_longitude=position.coords.longitude;
            
            const new_coords = { latitude: user_latitude, longitude: user_longitude };
            
            //console.log(user_latitude,user_longitude);
            distance_time_calculator(user_latitude,user_longitude);

      
              setuserlatitude(position.coords.latitude);
              setuserlongitude(position.coords.longitude);
              //const str=
             //console.log(user_latitude);

          },
      (error)=>{
    
      }
      )
        
    }

    else{
 alert("Your Browser don't support Geolocation");
    } 
   // console.log(user_latitude,user_longitude);  
   
 }




////////////////////////////////////////////yaha distance aur time calculate hoga//////////////////////////////////////////////////////////
  




async function distance_time_calculator(m,n)
{
//console.log(userlatitude);
//if(m==22.251395365330623)
//console.log(m);

//console.log(p)
const p=m;
const q=n;

if((m==22.251395365330623.toFixed(6))&&n==84.90473652789557.toFixed(6))
{
// setbutton_text('Attendance Registered');
// setbutton_class('btn btn-success');


}


else{

const url = `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${m}%2C${n}&destinations=22.251395365330623%2C%2084.90473652789557`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2e66c0017mshb40949c12e9dac6p1e060ajsn2fb021081bb5',
		'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log((result.distances[0]/1000+'Km'),(result.durations[0]/60).toFixed(2)+'min');
// setdistancess(result.distances[0]/1000);
// setdurationss((result.durations[0]/60).toFixed(2));
//console.log(distancess)
console.log("hio")

/////////////////(CALLING SPEECH)/////////////////////////////////////////////////////
speech(result.distances[0]/1000,(result.durations[0]/60).toFixed(2));
//////////////////////////////////////////////////////////////////////////////////////



} catch (error) {
    console.error(error);
}

//console.log(distance);

//map_generator(m,n);

}

}



////////////////////////////////////////////////////////////Yha speaker bolega///////////////////////////////////////////////////////////////////////////////

const speech=(distance,duration)=>{


if(distance>0)
{
const str=`Hurry Up! You are ${distance} kilometer away from your destination , it might take ${duration} minutes to reach there`
console.log(distance);
setText(str);
const speech1=new SpeechSynthesisUtterance(str);
window.speechSynthesis.speak(speech1);

setcount(count+1)

const data="PDC" 
const url=`/Faceapi2?data=${encodeURIComponent(data)}`


if(distance<=0.01)
{
setbutton_load(<button style={{marginLeft:'44%',marginTop:'5%' }}  type="button" class="btn btn-success"><a  style={{textDecoration:'none',color:'white'}}  href={url}>Click here for face recognition</a></button>)
}



}

else if(duration<=5)
{
const str='Hurry up!, you are almost there'
setText(str);
const speech1=new SpeechSynthesisUtterance(str);
window.speechSynthesis.speak(speech1);
}
else if(distance==0){
  const str='Congrats you have reached'
  setText(str);
  const speech1=new SpeechSynthesisUtterance(str);
  window.speechSynthesis.speak(speech1);
}
}













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

return (
    <>
    
    <Navbar></Navbar>
    
 <h4>PDC CLASS</h4>

 <div id="container">
 
<div id='give_attendance_button_container'>
<div>
<button  id='give_attendance_button' type="button" className={button_class} onClick={getcoordinates}>{button_text}</button>
</div>
</div>   



<div id="map_container">

<div id="map_div">
<MapContainer id="map" center={[22.251395365330623, 84.90473652789557]} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[22.251395365330623, 84.90473652789557]}>
      <Popup>
        Your Class Destination
      </Popup>
    </Marker>
    <Marker position={[userlatitude, userlongitude]}>
      <Popup>
        Your Current Location
      </Popup>
    </Marker>

  </MapContainer>
  </div>
</div>

<div id="text_container">
<div id="text_div">
<p id="text">{Text}</p>
</div>
</div>

</div>

<div>{button_load}</div>

</>

    
  )
}



//LA 1 COORDS: 22.251395365330623, 84.90473652789557
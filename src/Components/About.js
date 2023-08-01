import React from 'react'
import { useState ,useEffect} from 'react' 


export default function About() {
  
const [button_link, setbutton_link] = useState('google')    
  
let current_date_time=0;
const date_time=()=>{
    current_date_time=new Date();
    //console.log(current_date_time.getHours());
    }
    
    date_time();


    // var a=0
    // useEffect(() => {
      
    //   const currentDate = new Date();
    //   const sum = 100 * currentDate.getHours() + currentDate.getMinutes();
    
    //   if (sum >= 1043 && sum<1044) {
    //     setbutton_link(<a href='https://react.dev/reference/react/useEffect'>google</a>);
    //   }

    //   else {
    //    //console.log('breakthrough')
    //     setbutton_link('google')
    //   }
    //    console.log('firsy')
    //   a++
     
    // },[a]);


  
    const [p, setp] = useState('waiting for mouse')    


//////////////////////////////////// most imp//////////////////////////////////////
      
  useEffect(()=>{
  
  
  const setinterval=setInterval(()=>{
  
    const currentDate = new Date();
    const sum = 100 * currentDate.getHours() + currentDate.getMinutes();
  
  //console.log(sum)

    if (sum >= 2325 && sum<2326) {
      setbutton_link(<a href='https://react.dev/reference/react/useEffect'>google</a>);
    }
        

   else if(sum>=2020 && sum<2021)
   {
    setbutton_link(<a href='https://react.dev/reference/react/useEffect'>google</a>);


   }




    else {
     //console.log('breakthrough')
      setbutton_link('google')
    }
  

   
  },1000) 
  
  })


////////////////////////////////////most imp///////////////////////////////////////////////////
     




function mchange()
{
//if(p=='heres the link'){
setp('mouse entered')
//}
console.log('entered')
}

function mchange2()
{

setp('mouse left')
console.log('left')
}

  






  return (
  <>
  
  <div>
   
  <div>
   
   
    {button_link}
  </div>
   
  <div className='mouse_test'>

  <p onMouseEnter={mchange} onMouseOut={mchange2}>{p}</p>

  </div>

    </div>

</>

  )
}

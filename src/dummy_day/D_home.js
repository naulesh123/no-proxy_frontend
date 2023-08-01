import React, { useState ,useEffect} from 'react'
import D_navbar from './D_navbar'


export default function Home() 

{

//////////////////////////////MONDAY//////////////////////////////////////////
const [ped_lab_class_state, setped_lab_class_state] = useState(<a href='./D_ped_lab' style={{textDecoration:'none',color:'black'}} id="pedlab">PED LAB</a>);
const [TP_class_state, setTP_class_state] = useState(<a href='./D_tp' style={{textDecoration:'none',color:'black'}} id="tp">TP</a>
)
const [PDC_classes_state, setPDC_classes_state] = useState(<a href='./D_pdc_classes' style={{textDecoration:'none',color:'black'}} id="pdcclass">PDC</a>)
const [pi_classes_state, setpi_classes_state] = useState('PI')
const [brm_classes_state, setbrm_classes_state] = useState('BRM')

///////////////////////////TUESDAY////////////////////////////////////////////
const [MTO_LAB_tuesday, setMTO_LAB_tuesday] = useState('MTO LAB')
const [PDC_tuesday, setPDC_tuesday] = useState('PDC')
const [PI_tuesday, setPI_tuesday] = useState('PI')
const [BIO_tuesday, setBIO_tuesday] = useState('BIO')
const [BRM_tuesday, setBRM_tuesday] = useState('BRM')
///////////////////////////WEDNESDAY///////////////////////////////////////////////////
const [PDC_wed, setPDC_wed] = useState('PDC')
const [TP_wed, setTP_wed] = useState('TP')
///////////////////////////THURSDAY//////////////////////////////////////////////////////



const style1={

  color:'green',
  textDecoration:'none'
  
  }
  
  const style2={
  
  color:'blue',
  textDecoration:'none'
  }
  
  
  const [styles, setstyles] = useState(style1)
  
  
  







////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mchange(e)
{

if(e.target.classList.contains("PED_lab"))
{

//<div> <button type="button" class="btn btn-secondary"><a href='./D_ped_lab'>PED LAB</a></button></div>
const child=document.getElementById("pedlab")  
child.style.color='blue'




//setped_lab_class_state(<div> <button type="button" class="btn btn-secondary">PED LAB</button></div>) 

console.log('entered')
}
//console.log(e.target.id.toString())

else if(e.target.classList.contains("TP"))
{
  //setTP_class_state(<a href='./D_tp'>TP</a>)

  //setped_lab_class_state(<a href='./D_ped_lab'>PED LAB</a>) 

const child=document.getElementById("tp")  
child.style.color='blue'


//setstyles(style2)

  console.log('entered')
}

else if(e.target.classList.contains("PDC_classes"))
{
  
  
  //setPDC_classes_state(<a href='./D_pdc_classes'>PDC</a>)

  //setped_lab_class_state(<a href='./D_ped_lab'>PED LAB</a>) 
  
  const child=document.getElementById("pdcclass")  
  child.style.color='blue'
  

  console.log('entered')
}

//pi_classes_state,pi
else if(e.target.classList.contains("pi"))
{
  
  
  setpi_classes_state(<a href='./D_Pi'>PI</a>)

  //setped_lab_class_state(<a href='./D_ped_lab'>PED LAB</a>) 
  
  console.log('entered')
}

//brm_classes_state,brm
else if(e.target.classList.contains("brm"))
{
  
  
  setbrm_classes_state(<a href='./D_attendance'>BRM</a>)

  //setped_lab_class_state(<a href='./D_ped_lab'>PED LAB</a>) 
  
  console.log('entered')
}







}










function mchange2(e)
{
if(e.target.classList.contains("PED_lab"))
{
const tame=setTimeout(() => {
  const child=document.getElementById("pedlab")  
  child.style.color='black'
}, 300);
//console.log(object)
  console.log('left')
}

else if(e.target.classList.contains("TP"))
{
  

  const tame=setTimeout(() => {
    
    const child=document.getElementById("tp")  
    child.style.color='black'
  
  }, 300);
  //setstyles(style1) 
    console.log('left')
}  


else if(e.target.classList.contains("PDC_classes"))
{
  
  const tame=setTimeout(() => {
    const child=document.getElementById("pdcclass")  
    child.style.color='black'
  
  }, 300);
  
    console.log('left')
  

}

//pi_classes_state,pi

else if(e.target.classList.contains("pi"))
{
  
  const tame=setTimeout(() => {
    
    setpi_classes_state('PI')
  
  }, 300);
  
    console.log('left')
  

}

//brm_classes_state,brm
else if(e.target.classList.contains("brm"))
{
  
  const tame=setTimeout(() => {
    
    setbrm_classes_state('BRM')
  
  }, 300);
  
    console.log('left')
  

}













}
/////////////////////////////////////////////




console.log('yha dekho')





////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
  
<>  
<D_navbar></D_navbar>
  <div id="home_page_table_container">
  <div id="TIME_TABLE"><h3>TIME TABLE</h3></div>
    <div id="home_page_table_div"><table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">08:00-08:55</th>
        <th scope="col">09:00-09:55</th>
        <th scope="col">10:00-10:55</th>
        <th scope="col">11:00-11:55</th>
        <th scope="col">12:00-12:55</th>
        <th scope="col">13:15-14:10</th>
        <th scope="col">14:15-15:10</th>
        <th scope="col">15:15-16:10</th>
        <th scope="col">16:15-17:10</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">MON</th>
        <td colSpan="3">  <div className="mouse_test PED_lab" onMouseOver={mchange} onMouseOut={mchange2} > {ped_lab_class_state}</div></td>
        <td>MINOR</td>
        <td>L</td>
        <td><div className='mouse_test TP' onMouseOver={mchange} onMouseOut={mchange2} style={{styles}} > {TP_class_state}</div></td>
        <td><div className='mouse_test PDC_classes' onMouseOver={mchange} onMouseOut={mchange2}>{PDC_classes_state}</div></td>
        <td><div className='mouse_test pi' onMouseOver={mchange} onMouseOut={mchange2}>{pi_classes_state}</div></td>
        
        
        <td><div className='mouse_test brm' onMouseOver={mchange} onMouseOut={mchange2}>{brm_classes_state}</div></td>



      </tr>
      <tr>
        <th scope="row">TUE</th>
        <td colSpan="3">{MTO_LAB_tuesday} </td>
        <td>MINOR</td>
        <td>U</td>
        <td>{PDC_tuesday} </td>
        <td>{PI_tuesday} </td>
        <td>{BIO_tuesday} </td>
        <td>{BRM_tuesday} </td>
      </tr>
      <tr>
        <th scope="row">WED</th>
        <td colSpan="2"></td>
        <td>{PDC_wed}</td>
        <td>{TP_wed}</td>
        <td>N</td>
        <td></td>
        
        <td colSpan="3">MINOR LAB</td>
      </tr>
      <tr>
        <th scope="row">THU</th>
        <td colSpan="3">PDC LAB</td>
        <td></td>
        <td>C</td>
        <td>TP</td>
        <td>BIO</td>
        <td>PI</td>
        <td>BRM</td>
      </tr>

      <tr>
        <th scope="row">FRI</th>
       
        <td colSpan="3">PDC LAB</td>
        <td>MINOR</td>
        <td>H</td>
        <td>BIO</td>
        <td>PDC</td>
        <td>TP</td>
        <td></td>

      </tr>

      

    </tbody>
  </table>







   




    </div>
    </div>



{/* <div> <button type="button" class="btn btn-secondary">hello</button></div> */}
<p style={{textAlign:'center', marginTop:'10%'}}>Use Monday as your Demo day</p>
    </>
  )
}

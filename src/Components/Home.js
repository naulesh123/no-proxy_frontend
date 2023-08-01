import React, { useState ,useEffect} from 'react'
import minor from './Minor';
import Navbar from './Navbar'

export default function Home() 

{

//////////////////////////////MONDAY//////////////////////////////////////////
const [ped_lab_class_state, setped_lab_class_state] = useState('PED LAB');
const [TP_class_state, setTP_class_state] = useState('TP')
const [PDC_classes_state, setPDC_classes_state] = useState('PDC')
const [pi_classes_state, setpi_classes_state] = useState('PI')
const [brm_classes_state, setbrm_classes_state] = useState('BRM')

///////////////////////////TUESDAY//////////////////////////////////////////////////////
const [MTO_LAB_tuesday, setMTO_LAB_tuesday] = useState('MTO LAB')
const [PDC_tuesday, setPDC_tuesday] = useState('PDC')
const [PI_tuesday, setPI_tuesday] = useState('PI')
const [BIO_tuesday, setBIO_tuesday] = useState('BIO')
const [BRM_tuesday, setBRM_tuesday] = useState('BRM')
///////////////////////////WEDNESDAY/////////////////////////////////////////////////////
const [PDC_wed, setPDC_wed] = useState('PDC')
const [TP_wed, setTP_wed] = useState('TP')
///////////////////////////THURSDAY//////////////////////////////////////////////////////
const [PDC_LAB_THU, setPDC_LAB_THU] = useState('PDC LAB')
const [TP_THU, setTP_THU] = useState('TP')
const [BIO_THU, setBIO_THU] = useState('BIO')
const [PI_THU, setPI_THU] = useState('BIO')
const [BRM_THU, setBRM_THU] = useState('BIO')

/////////////////////////// FRIDAY ///////////////////////////////////////////////////////
const [PDC_LAB_FRI, setPDC_LAB_FRI] = useState('PDC LAB')
const [BIO_FRI, setBIO_FRI] = useState('BIO')
const [PDC_FRI, setPDC_FRI] = useState('PDC')
const [TP_FRI, setTP_FRI] = useState('TP')

//////////////////////////////////////////////////////////////////////////////////////////
useEffect(()=>{

const timeinterval=setInterval(()=>{

const current_date_time=new Date()

var sum=100*current_date_time.getHours()+current_date_time.getMinutes()

if(current_date_time.getDay()==1)
{




if(sum>=800 && sum<1055)
{
 setped_lab_class_state(<a href='./Ped_lab'>PED LAB</a>) 
}
else if(sum>=1055)
{
setped_lab_class_state('PED LAB')
}




if(sum>=1315 && sum<1410)
{
setTP_class_state(<a href='./Tp'>TP</a>)
}
else if(sum>=1410)
{
setTP_class_state('TP')
}



if(sum>=1415 && sum<1510)
{
setPDC_classes_state(<a href='./PDC_classes'>PDC</a>)  
}
else if(sum>=1510)
{
setPDC_classes_state('PDC')  
}


if(sum>=1515 && sum<1610)
{
setpi_classes_state(<a href='./Pi'>PI</a>)  
}
else if(sum>=1610)
{
setpi_classes_state('PI')
}


if(sum>=1615 && sum<1710)
{
setbrm_classes_state(<a href='./Attendance'>BRM</a>)
}
else if(sum>=1710)
{
setbrm_classes_state('BRM');  
}


}
/////////////////////TUE
else if(current_date_time.getDay()==2)
{

if(sum>=800 && sum<1055)
{
  setMTO_LAB_tuesday(<a href='./MTO_lab'>MTO LAB</a>)
}
else if(sum>=1055)
{
 setMTO_LAB_tuesday('MTO LAB')
}


if(sum>=1315 && sum<1410)
{
setPDC_tuesday(<a href='./PDC_classes'>PDC</a>)
}
else
{
setPDC_tuesday('PDC')
}


if(sum>=1415 && sum<1510)
{
setPI_tuesday(<a href='./Pi'>PI</a>)
}
else if(sum>=1510)
{
setPI_tuesday('PI')
}

if(sum>=1515 && sum<1610)
{
setBIO_tuesday(<a href='./Bio'>BIO</a>)  
}
else if(sum>=1610)
{
  setBIO_tuesday('BIO')
}


if(sum>=1615 && sum<1710)
{
  setBRM_tuesday(<a href='./Attendance'>BRM</a>)
}
else if(sum>=1710)
{
setBRM_tuesday('BRM')
}
}
/////////////////////



///////////////////////WED/////////////////////////

if(current_date_time.getDay()==3)
{
if(sum>=1000 && sum<1055)
{
setPDC_wed(<a href='./PDC_classes'>PDC</a>)
}
else if(sum>=1055)
{
setPDC_wed('PDC')
}



if(sum>1100 && sum<1155)
{
setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1155)
{
setTP_wed('TP')
}
}


////////////////// THU ///////////////////////////////

if(current_date_time.getDay()==4)
{
if(sum>=800 && sum<1055)
{
setPDC_LAB_THU(<a href='/PDC_lab'>PDC LAB</a>)
//setPDC_wed(<a href='./PDC_classes'>PDC</a>)
}
else
{
setPDC_wed('PDC LAB')
}


if(sum>1315 && sum<1410)
{
setTP_THU(<a href='./Tp'>TP</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1410)
{
setTP_THU('TP')
//setTP_wed('TP')
}


if(sum>1415 && sum<1510)
{
setBIO_THU(<a href='/Bio'>BIO</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1510)
{
setBIO_THU('BIO')
//setTP_wed('TP')
}



if(sum>1515 && sum<1610)
{
setPI_THU(<a href='/Pi'>PI</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1610)
{
setPI_THU('PI')
//setTP_wed('TP')
}


if(sum>1515 && sum<1610)
{
setPI_THU(<a href='/Pi'>PI</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1610)
{
setPI_THU('PI')
//setTP_wed('TP')
}

if(sum>1615 && sum<1710)
{
setBRM_THU(<a href='/Attendance'>BRM</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1710)
{
setBRM_THU('BRM')
//setTP_wed('TP')
}

}



if(current_date_time.getDay()==5)
{
if(sum>=800 && sum<1055)
{
setPDC_FRI(<a href='/PDC_lab'>PDC LAB</a>)
//setPDC_wed(<a href='./PDC_classes'>PDC</a>)
}
else if(sum>=1055)
{
setPDC_FRI('PDC LAB')
}


if(sum>1315 && sum<1410)
{
setBIO_FRI(<a href='./Bio'>BIO</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1410)
{
setBIO_FRI('BIO')
//setTP_wed('TP')
}


if(sum>1415 && sum<1510)
{
setPDC_FRI(<a href='/PDC_classes'>PDC</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1510)
{
setPDC_FRI('PDC')
//setTP_wed('TP')
}



if(sum>1515 && sum<1610)
{
setTP_FRI(<a href='/Tp'>TP</a>)
//setTP_wed(<a href='./Tp'>TP</a>)
}
else if(sum>=1610)
{
setTP_FRI('TP')
//setTP_wed('TP')
}







}













///////////////////////////////////////////////////////

},1000)


})


const [test, settest] = useState('mouse OUT');


function hover(e){

console.log('mouse')



}








////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
  
<>  
<Navbar></Navbar>
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
        <td colSpan="3">{ped_lab_class_state}</td>
        <td> MINOR  </td>
        <td>L</td>
        <td>{TP_class_state}</td>
        <td>{PDC_classes_state}</td>
        <td>{pi_classes_state}</td>
        <td>{brm_classes_state}</td>



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
        <td colSpan="3">{PDC_LAB_THU}</td>
        <td></td>
        <td>C</td>
        <td>{TP_THU}</td>
        <td>{BIO_THU}</td>
        <td>{PI_THU}</td>
        <td>{BRM_THU}</td>
      </tr>

      <tr>
        <th scope="row">FRI</th>
       
        <td colSpan="3">{PDC_FRI}</td>
        <td>MINOR</td>
        <td>H</td>
        <td>{BIO_FRI}</td>
        <td>{PDC_FRI}</td>
        <td>{TP_FRI}</td>
        <td></td>

      </tr>

      

    </tbody>
  </table>







   




    </div>
    </div>



  

    </>
  )
}

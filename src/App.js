import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [xcoord, setXCoord] = useState(20);
  const [ycoord, setYCoord] = useState(20);
  const [angle, setAngle] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prevAngle => (prevAngle + (Math.PI * 2 / 100)) % (Math.PI * 2));

      const newXCoord = Math.cos(angle) * 12; 
      const newYCoord = Math.sin(angle) * 12; 
      setXCoord(newXCoord);
      setYCoord(newYCoord);
    }, 20); // Update every 10ms
    return () => clearInterval(interval); 
  }, [angle]);
  
  return (
    <div style={{backgroundColor:'rgb(232, 234, 239)',width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{backgroundColor:'rgb(232, 234, 239)',width:'550px',height:'550px',borderRadius:'20px',borderStyle:'solid',borderWidth:'10px',borderColor:'rgb(242, 243, 244)',boxShadow:'-2px -2px rgb(235, 240, 241),3px 3px rgb(208, 210, 213)',display:'flex',justifyContent:'start',alignItems:'center',flexDirection:'column'}}>
       
        <h2><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ah!!, I never saw someone from your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Company.</strong></h2>
       
        <hr style={{borderColor:'black',borderWidth:'1px',width:'350px',height:'2px',backgroundColor:'black'}}></hr>
        <br></br>
        <div style={{paddinTop:'20px',backgroundColor:'rgb(109, 75, 155)',width:'200px',height:'200px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',borderWidth:'5px',borderStyle:'solid',borderColor:'rgb(233, 235, 238)'}}>
        <div style={{backgroundColor: 'black',width: '200px',height: '200px',marginTop: ycoord+'px',marginLeft:xcoord+'px',borderRadius: '50%',filter: 'blur(15px)',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)'}}>
          </div>
          <div style={{zIndex:'9999',backgroundColor:'rgb(232, 234, 239)',position:'absolute',width:'100px',height:'100px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',borderWidth:'6px',borderStyle:'solid',borderColor:'rgb(221, 221, 225)',boxShadow:'0 0 5px rgb(232, 234, 239)'}}>
            <p><strong>Welcome!!</strong></p>
          </div>
        </div>
        <br></br>
        <div  style={{width:'100%',height:'80px',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
          <div className='button' style={{width:'200px',height:'70px',borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p><strong>Browse Test Data</strong></p>
          </div>
          <div className='button' style={{width:'200px',height:'70px',borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'rgb(38, 38, 41)'}}>
              <div style={{width:'16px',height:'4px',marginTop:'13px',marginLeft:'7px',backgroundColor:'white'}}></div>
              <div style={{width:'4px',height:'16px',marginTop:'-10px',marginLeft:'13px',backgroundColor:'white'}}></div>
            </div>
            <p style={{paddingLeft:'8px'}}><strong>Connect Domain</strong></p>
          </div>
        </div>
        <h5 style={{color:'rgb(129, 129, 128)'}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Tenant connections are not allowed in free tier, however you can still explore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the website features.</strong></h5>
      
      </div>
      
    </div>
  );
}

export default App;

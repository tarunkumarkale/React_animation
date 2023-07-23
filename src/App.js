import React from 'react'
import './C.css'
const App = () => {

  const Cards=(props)=>{

    return(<> 
      <div className="card"  id='name'>
    <div className='wrap'>  <img src={props.image}   className='hello' alt="" />
    <h2>{props.title}</h2>
    <div>RATE {props.star}</div>
    <p>{props.para}</p>
    <a href={props.link}>Watch</a> </div>
   
    
  
  </div></>)
 

   }
  return (
    <>
<Cards   title='Justice League' 
  image='https://www.justwatch.com/images/backdrop/213656374/s1440/justice-league.webp'
               link='https://www.justwatch.com/in/tv-show/justice-league'
               star='  ⭐ ⭐⭐ ⭐   4/5  '
               para='It is based on the Justice League of America and associated comic book characters'
  />
<Cards   title='Justice League' 
  image='https://www.justwatch.com/images/backdrop/213656374/s1440/justice-league.webp'
               link='https://www.justwatch.com/in/tv-show/justice-league'
               star='  ⭐ ⭐⭐ ⭐   4/5  '
               para='It is based on the Justice League of America and associated comic book characters'
  />
<Cards   title='Justice League' 
  image='https://www.justwatch.com/images/backdrop/213656374/s1440/justice-league.webp'
               link='https://www.justwatch.com/in/tv-show/justice-league'
               star='  ⭐ ⭐⭐ ⭐   4/5  '
               para='It is based on the Justice League of America and associated comic book characters'
  />
<Cards   title='Justice League' 
  image='https://www.justwatch.com/images/backdrop/213656374/s1440/justice-league.webp'
               link='https://www.justwatch.com/in/tv-show/justice-league'
               star='  ⭐ ⭐⭐ ⭐   4/5  '
               para='It is based on the Justice League of America and associated comic book characters'
  />

    </>
  )
}

export default App

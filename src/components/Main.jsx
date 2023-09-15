import React from 'react'
import img1 from '../assets/Rectangle 6.png'
import img2 from '../assets/Rectangle 5.png'
import dashboard from '../assets/42_Dashboard 2 (1).png'
import Boxes from './Boxes'


const Main = () => {
  return (


    <>
    <div id='main'>
        <div id='page1'>
          <div id='imgs'>
        <img src={img1} alt="img1" id='img1' />
        <img src={img2} alt="img2" id='img2' />
        </div>
                <nav>

<h5 id='logo'>Ap</h5>
<div id='text'>
<h5>Home</h5>
<h5 id='lite'>Feature</h5>
</div>
<button id='btn1'>install for free</button>
                </nav>

            </div>    

            <div id='maintext'>
              <p>
                    effortless attendance management for every business</p>
                    <h1>Streamline attendance tracking <br /> simplyfy
                        workdays
                    </h1>
                    <button>Install</button>

                    </div>



        <div>

          
      </div>

    </div>
    <div id='dashb'>
                      <img src={dashboard} alt="" />
                    </div>
  
 <Boxes/>

 </>
  )
}

export default Main
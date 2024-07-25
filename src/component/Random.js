// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



// const Random = () => {

// const[gif,setGif]=useState('');
// const [loading, setLoading] = useState(false);


//    async function fetchData() {
//     setLoading(true)
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
//     const { data1 } = await axios.get(url);
//     const imageSource = data1.data.images.downsized_large.url;
//     setGif(imageSource);
//     console.log(imageSource);
//     setLoading(false);
// }

// useEffect(() => {
//     fetchData();
//   }, []);



// function clickHandler(){
//     fetchData();

// }
//   return (
//     <div className='bg-green-500 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5'>
//         <h1 className='text-2xl underline font-bold uppercase pt-1'>A Random Gifs</h1>

// {
//     loading?(<Spinner/>):(<img src={gif} width="450" alt='fd'/>)
// }
        


//         <button onClick={clickHandler}

//         className='bg-white w-10/12 rounded-sm text-lg py-2 '
//         >
//             Generate
//             </button>  
//               </div>
//   )
// }

import React from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-3/5 lg:w-2/5 bg-pink-400 relative text-center rounded-2xl'>
      <h1 className='text-bold text-[3.4vw] lg:text-[1.6vw] text-center mt-4 mb-6 font-bold'>A RANDOM GIF</h1>
      
      {
        loading
        ? (<Spinner />) 
        : (<img src={gif} alt='img' width="400" className='mx-auto'/>)
      }
      
      <button 
      onClick={() => {
        fetchData()
      }}
      className=' items-center w-10/12 bg-pink-300 mt-6 mb-4 py-2 font-bold rounded-lg text-[1.4vw]'
      >
        GENERATE
      </button>
    </div>
  )
}

export default Random
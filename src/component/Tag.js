// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 



// const Tag = () => {

//     const[tag,setTag]=useState('');
// const[gif,setGif]=useState('');
// const [loading, setLoading] = useState(false);


// async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//    const {data}=   await axios.get(url);
//    const imageSource=data.data.images.downsized_large.url;
//    console.log(imageSource);
//    setGif(imageSource); 
//    setLoading(false);
// }

// useEffect(()=>{
//     fetchData();
// },[])



// function clickHandler(){
//     fetchData();

// }

// function changeHandler(event){
//     setTag(event.target.value);

// }


//   return (
//     <div className='bg-blue-500 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5'>
//         <h1 className='text-2xl underline font-bold uppercase pt-1'> Random {tag} Gifs</h1>

// {
//     loading?(<Spinner/>):(<img src={gif} width="450" alt='fd'/>)
// }
        
// <input className='w-10/12 rounded-sm text-lg py-2
//  mb-[3px] text-center '
//  onChange={changeHandler}
//  value={tag}
//  />

//         <button onClick={clickHandler}

//         className='bg-white w-10/12 rounded-sm text-lg py-2 '
//         >
//             Generate
//             </button>  
//               </div>
//   )
// }
import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {

  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-3/5 lg:w-2/5 bg-purple-400 relative text-center rounded-2xl'>
      <h1 className='text-bold text-[3.4vw] lg:text-[1.6vw] text-center mt-4 mb-6 font-bold uppercase'>SEARCH RANDOM {tag} GIF</h1>
      
      {
        loading
        ? (<Spinner />) 
        : (<img src={gif} alt='img' width="400" className='mx-auto'/>)
      }
      
      <input
        className=' items-center w-10/12 bg-green-300 mt-6 mb-4 py-2 rounded-lg text-[1.4vw] text-center font-semibold'
        onChange={(event) => setTag(event.target.value)}
        type='text'
        placeholder='Search here'
        value={tag}
      />

      <button 
      onClick={() => {
        fetchData(tag)
      }}
      className='items-center w-10/12 bg-green-300 mb-4 py-2 font-bold rounded-lg text-[1.4vw]'
      >
        GENERATE
      </button>
    </div>
  )
}

export default Tag
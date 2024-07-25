import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = '08onfJ8YkcBSgfSJ48Mop0dcwZX0D33u'; 
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  
  async function fetchData(tag) {
    setLoading(true);
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [])

  return {gif, loading, fetchData};

}

export default useGif
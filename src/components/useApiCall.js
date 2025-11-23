import { useState } from 'react'
import axios from 'axios';

function useApiCall() {
  const [allData, setAllData] = useState(null);
  const [loader, setLoader] = useState(false);

  async function fetchData(path, params) {
    console.log('sumbitting');
    setLoader(true);

    try {
      let response = await axios.get(path, { params });
      let x = response?.data;
      setAllData(x);
    }
    catch (error) {
      setAllData({});
      console.log(error.message);
      console.log(error.response?.data);
    }
    finally {
      setLoader(false);
    }
  }

  return { loader, allData, fetchData };
}

export default useApiCall
import axios from 'axios';


const BASE = 'https://gorest.co.in/public-api/';
const KEY = 'e0dcd22de287c749b30f3ebe066f87751f2ede6f42e4148ff47a6be2411c392b';

async function getUsers(page) {
  const config = {
    method: 'GET',
    url: BASE + 'users',
    params: {
      page: page
    }
  };

  try {
    const res = await axios(config);
    return res.data.data;
  } catch {
    console.log('something went wrong');
  };
}


export default {
  getUsers
};

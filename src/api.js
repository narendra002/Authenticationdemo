// src/api.js

const API_KEY = 'NkYFFfqFYL';
const BASE_URL = 'https://api.nexaflow.xyz/api/auth/66587268c4843fadfbf9dcf9';

const generateOtp = async (email) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ email }),
  };

  try {
    const response = await fetch(`${BASE_URL}?type=otp`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const register = async (email, otp) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ email, otp }),
  };

  try {
    const response = await fetch(`${BASE_URL}?type=register`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const login = async (email, otp) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ email, otp }),
  };

  try {
    const response = await fetch(`${BASE_URL}?type=login`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getUserDetails = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: token,
      'x-api-key': API_KEY,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/user`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { generateOtp, register, login, getUserDetails };

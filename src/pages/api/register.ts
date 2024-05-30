import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', req.body);
      res.status(response.status).json(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      res.status(axiosError.response?.status || 500).json(axiosError.response?.data || { message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

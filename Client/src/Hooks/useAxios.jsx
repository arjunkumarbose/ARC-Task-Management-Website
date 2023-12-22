import axios from "axios";


const useAxios = () => {
    const instance = axios.create({
        baseURL: 'https://task-management-server-one-jade.vercel.app',
      });
    return instance
};

export default useAxios;
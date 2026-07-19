import axiosClient from "./axiosClient";

export const getUsers = async () => {
    const reponse = await axiosClient.get('/users');
    return reponse.data
};


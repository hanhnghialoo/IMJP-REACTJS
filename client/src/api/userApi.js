import axiosClient from "./axiosClient";

export const getUsers = async () => {
    try {
        const {data} = await axiosClient.get('users')
        return data
    } catch (error) {
        console.error(error);
        throw error;
    }
};

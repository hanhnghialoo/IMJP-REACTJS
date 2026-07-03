import { fakeUser } from "../mock/fakeUser";
export function useAuth(){
    return{
        user: fakeUser,
    };
};
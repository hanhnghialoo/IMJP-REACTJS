import { ROLES } from "../constants/role";
import { useAuth } from "./useAuth";

export default function usePermission(){
    const {user} = useAuth();
    const canEditCandidate = [
        ROLES.ADMIN,
        ROLES.MANAGER
    ].includes(user.role);

    const canDeleteCandidate = [
        ROLES.ADMIN,
        ROLES.MANAGER
    ].includes(user.role);

    const canCreateCandidate = [
        ROLES.ADMIN,
        ROLES.MANAGER
    ].includes(user.role);

    return {
        canEditCandidate,
        canDeleteCandidate,
        canCreateCandidate
    };
}
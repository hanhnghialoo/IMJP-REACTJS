import {useMemo} from 'react';

import { useAuth } from '../../../../../features/auth/hook/useAuth';
import { buildNavigation } from '../utils/buildNavigation';

export function useNavigation(){
    const {user} = useAuth();
    const navigaitionItem = useMemo(()=>{
        return buildNavigation(user);
    }, [user]);
    return navigaitionItem;
}
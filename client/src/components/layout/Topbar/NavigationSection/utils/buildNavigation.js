import {navigationConfig} from '../config/navigation.config.js';

export function buildNavigation(user){
    return navigationConfig.filter(
        item => item.roles.includes(user.role)
    );
}

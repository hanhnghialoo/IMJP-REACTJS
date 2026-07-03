export function getUserStatus(lastActivityAt){
    if (!lastActivityAt){
        return {
            status: 'neverActive',
            text: 'neverActive'
        };
    }

    const diffMs = Date.now() - new Date(lastActivityAt).getTime();
    const minutes = Math.floor(diffMs/60000);

    if (minutes < 5){
        return{
            status: 'online',
            text: 'online'
        };
    }
    if (minutes < 10){
        return{
            status: 'away',
            time: minutes,
            text: 'minago'
        };
    }
    if (minutes < 60) {
        return{
            status: 'away',
            time: minutes,
            text: 'minago'
        };
    }
    const hours = Math.floor(minutes/60);
    if(hours<24){
        return{
            status: 'offline',
            time: hours,
            text: 'hourago'
        };
    }
    const days = Math.floor(hours/24);
    return{
        status: 'offline',
        time: days,
        text: 'dayago'
    }
}
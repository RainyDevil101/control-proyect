
    
    
    const converTime = (time) => {

        const newTime = new Date(time).toLocaleDateString('es-cl', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return newTime;
    }

    const convertHour = (hour) => {
        const newHour = new Date(hour).toLocaleTimeString('es-cl');

        return newHour;
    };


module.exports = {
    converTime,
    convertHour
}
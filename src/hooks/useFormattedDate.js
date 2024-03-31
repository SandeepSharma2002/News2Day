import { useState, useEffect } from 'react';

function useFormattedDate(timestamp) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const formatDate = (timestamp) => {
            const date = new Date(timestamp);
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const year = date.getFullYear();
            const monthIndex = date.getMonth();
            const day = date.getDate();

            // Format the date
            return `${months[monthIndex]} ${day}, ${year}`;
        };

        if (timestamp) {
            setFormattedDate(formatDate(timestamp));
        }

    }, [timestamp]);

    return formattedDate;
}

export default useFormattedDate;
// useFormatDate.ts

export interface FormatDateType {
    month: string
    day: string
    time: string
    fullDate: string
  }
  
  export function useFormatDate() {
    const formatDate = (dateString: string | undefined): FormatDateType => {
      if (dateString) {
        const options = { month: 'short', day: '2-digit', hour: 'numeric', minute: '2-digit' };
        const [datePart, timePart] = dateString.split(' ');
        const [year, month, day] = datePart.split('-');
        const [hour, minute] = timePart.split(':');
        const period = parseInt(hour) >= 12 ? 'PM' : 'AM';
        const formattedTime = `${parseInt(hour) % 12 || 12}:${minute}${period}`;
        const months = [
          'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
        ];
        const formattedMonth = months[parseInt(month) - 1]; // Months array is 0-based index
  
        return { 
          month: formattedMonth,
          day: day.replace(',', ''),
          time: formattedTime,
          fullDate: `${formattedMonth} ${day}, ${formattedTime}`
        };
      }
      return { month: '', day: '', time: '', fullDate: '' }; // Handle undefined case
    };
  
    return {
      formatDate
    };
  }
  
  
months = ['January', 'February', 'March', 'April',
'May', 'June', 'July', 'August', 'September',
'October', 'November', 'December']

days = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday']

date_data = new Date()
// Get day
current_day = date_data.getDay()
document.getElementById('day').textContent = days[current_day]

// Get Month date year
current_month = date_data.getMonth()
current_date = date_data.getDate()
current_year = date_data.getFullYear()
document.getElementById('month_date_year').textContent = `${months[current_month]} ${current_date}, ${current_year}`

// Get time

current_hour = date_data.getHours()
current_minute = date_data.getMinutes()
am_pm = ''

if(current_hour >= 12){
  // It's pm
  am_pm = 'PM'
}else{
  // It's AM
  am_pm = 'AM'
}

document.getElementById('time').textContent = `${current_hour}:${current_minute} ${am_pm}`
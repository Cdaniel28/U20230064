const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
const today = new Date();
const dayOfWeek = days[today.getDay()];
console.log(dayOfWeek);

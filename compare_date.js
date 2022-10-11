//comparing times
const today = new Date();

const todayDifferent = new Date();

console.log(today.getTime() == todayDifferent.getTime());

//Reomove all the time information
todayDifferent.setHours(0,0,0,0);
today.setHours(0,0,0,0);

console.log(today.getTime() == todayDifferent.getTime());
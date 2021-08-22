export default function timeToUnix(time) {
 let array = []
 for (let i = 0; i < 5; i++) {
  const myCurrentDate = new Date();
  let myPastDate = new Date(myCurrentDate);
  myPastDate.setDate(myPastDate.getDate() - i);
  const unix = myPastDate.getTime()
  const date = Math.round((unix-2000) / 1000);
array.push(date)
 }
 
return array
}
let apple = 10 
//เป็น funtion scope ไม่ได้อยู๋ใน box scope เลยไม่ได้ 15 เพราะ ดึงค่ามาจากข้างบน
{
    console.log(apple+5) //
    // document.getElementById('app').innerHTML = apple;
}
console.log(apple + 10)//
document.getElementById('app').innerHTML = apple + 10;

//More control
const marks=[80,90,100];
for (let  i=0;i<marks.length;i++)
    {
        console.log("Index:","Mark:",marks[i]);
    }
//Readable and simple
for(let idx in marks)
    {
    console.log("Index:","Mark:",marks[idx]);
}
//Readable and cleaner
for(let mark in marks)
    {
    console.log("Mark:", mark);
}

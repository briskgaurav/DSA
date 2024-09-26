let data =[];
var max =5;
var size=data.length;


// push operation
function push(val){
   if(size<max){
    data[data.length] = val;
    size++;
   }
   else{
    console.log("Stack is full thats why cant push these elements " , val)
   }
}

//pop operation
function pop(){
    if(size>0){
        size = size-1;
        data.length=size;
    }
    else console.log("Stack is empty!")
}

push(10);
push(15);
push(11);
push(21);
push(49);
pop();
pop();
push(12);
console.log(data);
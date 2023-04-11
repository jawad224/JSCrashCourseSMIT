// Task-1
// function recursive(num) {
//     let number =num
//     if (number > 1)
//     {

//       return   number + recursive(number-1)
//     }
//     else{
//         return 1
//     }
// }

// let Sum =recursive(6)
//  console.log("Sum Recursion Function is ==>==>",Sum)


//Task-2
// function recursive(num, myarray) {
//     console.log("myarray ==>",myarray)
//     if (myarray.length === 0) {
//       return false;
//     } else if (myarray[0] === num) {
//       return true;
//     } else {
//       return recursive(num, myarray.slice(1));
//     }
//   }

//   let myarray = [2, 4, 5, 6];
//   let isFound = recursive(6, myarray);
//   console.log("Found:", isFound); //true
//   let notFound = recursive(10, myarray);
//   console.log("Found:", notFound); //false

//Task-3
//   function addParagraph(text) {
//     const paragraph = document.createElement('p');
//     paragraph.innerHTML = text; 
//     document.body.appendChild(paragraph); 
//   }
//   addParagraph('I am Jawad Ahmed Student of Sir Ishaq');

//Task-4
// function addListItem(text) {
//     const list = document.getElementById("myList");
//     console.log("Jawad",list)
//     const newItem = document.createElement("li");
//     newItem.innerHTML = text;
//     list.appendChild(newItem);
//   }
//   addListItem("Jawad Ahmed")

//Task-5
// function changeBackgroundColor(element, bgColor,color,padding, fontWeight) {
//     element.style.backgroundColor = bgColor;
//     element.style.color = color;
//     element.style.padding = padding;
//     element.style.fontWeight = fontWeight;
// }

// const myElement = document.getElementById("myElement");
// changeBackgroundColor(myElement, "blue","#fff","1rem", "bold");

//Task-6

// function StoreValueToLocalStorage (key,data){
//     let datastringify = JSON.stringify(data);
//     localStorage.setItem(key, datastringify);
// }

// let student1 ={
//     name:"Jawad Ahmed",
//     age:21
// }

// StoreValueToLocalStorage("studentDetail",student1)

//Task-7

// function retrievesValueToLocalStorage (userkey){
//    return  localstorageobject=JSON.parse(localStorage.getItem(userkey)) 
// }

// let retriveData=  retrievesValueToLocalStorage("studentDetail");
// console.log("studentDetail",retriveData);

//Task-8

// function LocalStorageObject(data) {
//     console.log("new studentDetail", data)
//     localStorage.setItem("studentDetail", JSON.stringify(data))
//     return JSON.parse(localStorage.getItem("studentDetail"))

// }

// let student = {
//     name: "Jawad Ahmed",
//     age: 21,
//     student: "student of Sir Ishaq"
// }

// let StudentDetail = LocalStorageObject(student)
// console.log("get STudentDetail from localStorage", StudentDetail)
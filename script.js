

let btn = document.getElementById('submit');

let fullname = document.getElementById('name');
let gender = document.getElementById('gender');

let nameWarning = document.getElementById('name-warning');
let genderWarning = document.getElementById('gender-warning');
let hobby = document.getElementById('hobby');

let swimming = document.getElementById('swimming');
let reading = document.getElementById('reading');
let dancing = document.getElementById('dancing');
let singing = document.getElementById('singing');


let counter = 0;
let checkCount = 0;


const onChangeName = ()=>{
    let isSpace = false;
    for(let i = 0; i<= fullname.value.length-1; i++){
        if(fullname.value[i] === " "){
            isSpace = true;
            break;
        }
    }
    if(fullname.value.length >= 5 && isSpace){
        nameWarning.style.display = 'block';
        nameWarning.style.color = 'green';
        nameWarning.innerText = 'Looks Good!'
        counter++;
    }else{
        nameWarning.style.display = 'block';
        nameWarning.style.color = 'red';
        nameWarning.innerText = 'Please enter a valid name';
    }
}
const onChangeGender = ()=>{
    if(gender.value != '1'){
        genderWarning.style.display = 'block';
        genderWarning.style.color = 'green';
        genderWarning.innerText = 'Looks Good!';
        counter++;
    }else{
        genderWarning.style.display = 'block';
        genderWarning.style.color = 'red';
        genderWarning.innerText = 'Please enter a valid gender';
        counter--;
    }
    console.log(counter)
}







const isChecked = (checkItem)=>{

    if(checkItem.value === 'false'){
        checkItem.value = 'true';
        checkCount++;
    }else{
        checkItem.value = 'false';
        checkCount--;
    }

    if(checkCount > 0){
        hobby.style.display = 'block';
        hobby.style.color = 'green';
        hobby.innerText = 'Looks Good!' 
        
    }else{
        hobby.style.display = 'block';
        hobby.style.color = 'red';
        hobby.innerText = 'Select at least one of your hobby' 
    }

}



btn.addEventListener('click', ()=>{

    let getSwimming = swimming.value === 'true' ? 'Swimming' : '';
    let getReading = reading.value === 'true' ? 'Reading Novels' : '';
    let getDancing = dancing.value === 'true' ? 'Dancing' : '';
    let getSinging = singing.value === 'true' ? 'Singing' : '';

    let getGender = undefined;
    switch(gender.value){
        case '2': 
            getGender = 'MALE';
            break;
        case '3':
            getGender = 'FEMALE'
            break;
        case '4':
            getGender = 'OTHERS'
            break;
    }

    if(counter >= 2){
        alert(`Hobbies of ${fullname.value}(${getGender}) are ${getSwimming}, ${getReading}, ${getDancing}, ${getSinging}`)
    }
})











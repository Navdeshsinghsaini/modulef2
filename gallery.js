let submit = document.querySelector('#submit');
let info = document.querySelector('#info');

let input_name = document.querySelector('#name');
let input_email = document.querySelector('#email');
let input_username = document.querySelector('#username');


let image_area = document.querySelector('.gallery_main')
let form_area = document.querySelector('.form_place')

let image1 = document.querySelector('#one');
let image2 = document.querySelector('#two');
let image3 = document.querySelector('#three');
let image4 = document.querySelector('#four');


image2.disabled = true;
image3.disabled = true;
image4.disabled = true;


// first image code ##########################################################
    image1.addEventListener('click' , formpage);
    function formpage() {
        image_area.classList.add("hide");
       form_area.classList.remove("hide"); 
    }

submit.addEventListener('click', PersonDetail);
let Arr = [];
function PersonDetail(e){
    e.preventDefault ();
    let name  = input_name.value;
    let email = input_email.value;
    let username = input_username.value;

    if( name != "" || email !="" || username != ""){
        info.innerHTML = "Click On second Image to see the details"
         let obj  = {name, email, username}
         Arr.push (obj);
        //  console.log(Arr);
         image_area.classList.remove("hide");
         form_area.classList.add("hide");
       image1.disabled = true;
       image2.disabled = false;

        // alert("please fill all details");
    }else {
        alert("plz fill details");
    }
}

// code for image 2 *******************************
     
image2.addEventListener('click' , addPersonName);

function addPersonName(){

    info.innerHTML = `Hii ${Arr[0].name},UserName: ${Arr[0].username}`
    image3.disabled = false;
    image2.disabled = true;

}

// code for image 3 ********************************
let score1 = document.querySelector(".score1")
let totalscore = document.querySelector(".totalscore")
let score2 = document.querySelector(".score2")
let score3 = document.querySelector(".score3")
let dice_area = document.querySelector(".dice")
let dice_image = document.querySelector(".Dice-Img")
image3.addEventListener('click', dice);

function dice() {
    dice_area.classList.remove ("hide")
    image_area.classList.add("hide");
}

dice_image.addEventListener('click' , Scores);
let totalclick = 2;

let ScoreArr = [];
let sum = 0;
function Scores (){
    if(totalclick == 2 || totalclick==1 || totalclick==0){
    let x = Math.floor((Math.random() * 6) + 1);
    totalclick--;
    ScoreArr.push(x);
    // console.log(ScoreArr);
    // console.log(x);
// }if(totalclick == 2){
//     let y = Math.floor((Math.random() * 6) + 1);
//     --totalclick;
//     console.log(y);
// }if(totalclick == 1){
//     let z = Math.floor((Math.random() * 6) + 1);
//     --totalclick;
//     console.log(z);
}if(totalclick == -1){
    alert ("you are done with three chances");
}
score1.innerHTML = `${ScoreArr[0]}`
score2.innerHTML = `${ScoreArr[1]}`
score3.innerHTML = `${ScoreArr[2]}`


for(let i =0; i< ScoreArr.length;i++){
    
    sum = sum+ScoreArr[i];

}
totalscore.innerHTML = `${sum}`
// dice_area.classList.add ("hide")
//     image_area.classList.remove ("hide");
//     info.innerHTML = `${sum}`
// let button = document.querySelector(".continue");

}
let button = document.querySelector(".continue")
button.addEventListener('click' , backpage);

let chococ = 1
function backpage(){
    dice_area.classList.add ("hide")
    image_area.classList.remove ("hide");
    // info.innerHTML = `total score ${sum}`
    if(sum < 10){
        alert("Score is less than , 10 plz try again")
        if (chococ == 1){
            totalclick = 3;
            chococ = 0;
        }
    }
    if (sum>= 10)
    {
        alert ("Score is more than 10 , plz click on last image now")
    }   
}

// fourth image1*****************
image4.addEventListener('click', token);

function token() {
    if(sum>= 10){
    let small = "abcdefghijklmnopqrstuvwxyz";
    let large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let special = "!@#$%&*_?";
    let chars = small + large + num + special;
    let couponStr = "";
    for (let i = 0; i < 12; i++) {
      let rand = Math.floor(Math.random() * chars.length);
      couponStr += chars[rand];
    }
    document.querySelector('.entercode').innerHTML = `${couponStr}`
    image_area.classList.add ("hide");
    let coupon = document.querySelector(".coupon")
    coupon.classList.remove("hide");
}if (sum<10){
    alert ("try after scoring more than 10")
}
}

let image_click1 = 0;
let image_click2 = 0;
let image_click3 = 0;
const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    { repeat:999,duration:3000,yoyo:true }
)
tween.start()

function fill(){
    console.log("in fill");
    var place= document.getElementById('place').value;
    console.log(place);
    var action1=document.getElementById('action1').value;
    console.log(action1);
    var color=document.getElementById('color').value;
    console.log(color);
    var feeling=document.getElementById('feeling').value;
    console.log(feeling);
    var action2=document.getElementById('action2').value;
    console.log(action2);
    var danger=document.getElementById('danger').value;
    console.log(danger);
    var Adjective1=document.getElementById('Adjective1').value;
    console.log(Adjective1);
    var Adjective2=document.getElementById('Adjective2').value;
    console.log(Adjective2);
    var Adjective3=document.getElementById('Adjective3').value;
    console.log(Adjective3);
    var action3=document.getElementById('action3').value;
    console.log(action3);
    if (place === '' || action1 === '' || color === ''|| feeling === ''|| action2 === ''|| danger === ''|| Adjective1 === ''|| Adjective2 === ''|| Adjective3 === ''|| action3 === '') {
        
        alert('Fill in the blank!!');
        
        return;
    }
    else{
    document.getElementById('change').innerHTML="<h2 class='display-1 text-center border-top'>Here is your story</h2>"
    document.getElementById('change').innerHTML += "<span class='h3'> When you finally fall asleep at midnight, you have a strange dream. You are at</span>" +
    "<span class='h3 text-decoration-underline'> " + place + " </span>" +
    "<span class='h3 '>, and everyone is</span>" +
    "<span class='h3 text-decoration-underline '> " + action1  + " </span>" +
    " <span class='h3'>you. Their faces are the color of</span>" +
    "<span class='h3 text-decoration-underline'> " + color + " </span>" +
    "<span class='h3'>and their eyes are full of eyeballs. But what is most</span> " +
    "<span class='h3 text-decoration-underline'> " + feeling + " </span>" +
    " <span class='h3'>is that you are exactly like them when you see your reflection in their eyes. So, you decide to pretend you are one of them. They are speaking in a language you've never heard before. Their faces are full of scrutinization. But surprisingly when you open your month, the strange language just smoothly comes out.</span>";
    document.getElementById('change').innerHTML += "<div style='text-align: center;'>" +
    "<img class='image-fluid my-5 rounded-circle' style='width: 400px; height: auto;' src='images/dream1.jpg'>" +
    "</div>";
    document.getElementById('change').innerHTML += "<span class='h3'>You learn about they are trying to find a precious plant named Xue. And they look at you like a traitor because they believe you want to keep it for yourself.They think you are the only one that</span > "
    + "<span class='h3 text-decoration-underline'> " + action2 + " </span>" +
    "<span class='h3'> the plant. Currently, even if you have no idea what the thing is and where it is. Facing their threat of </span>"
    + "<span class='h3 text-decoration-underline'> " + danger + " </span>" +
    "<span class='h3'>you decide to act confidently aware of where this thing is, a</span>"
    + "<span class='h3 text-decoration-underline'> " + Adjective1 + " </span>" +
    "<span class='h3'>tactic.</span>"
    document.getElementById('change').innerHTML += "<div style='text-align: center;'>" +
    "<img class='image-fluid my-5  rounded-circle' style='width: 400px; height: auto;' src='images/flower2.png'>" +
    "</div>";
    document.getElementById('change').innerHTML += "<span class='h3'> You tell them the plant only apears during a full moon on sheer cliffs. It is very</span>" 
    + "<span class='h3 text-decoration-underline'> " + Adjective2 + " </span>" +
    "<span class='h3'>to aproach it and everyone before tried to get it are all dead. However, you are going to prove your loyalty and innocence.</span > "
    document.getElementById('change').innerHTML += "<div style='text-align: center;'>" +
    "<img class='image-fluid my-5  rounded-circle' style='width: 400px; height: auto;' src='images/flower.png'>" +
    "</div>";
    document.getElementById('change').innerHTML +="<span class='h3'> Every step is like a torture to you. You seem like knowing it is a dream, but you can not wake up. The cliff is right there, and surprisingly there is a hint of white on the edge of cliff, the most</span>"
    + "<span class='h3 text-decoration-underline'> " + Adjective3 + " </span>" +
    "<span class='h3'>spot. They finally believe you, but because it's too dangerous, they force you to get it for them. In the blink of an eye, they pushed you off the cliff.</span>";
    document.getElementById('change').innerHTML += "<div style='text-align: center;'>" +
    "<img class='image-fluid my-5  rounded-circle' style='width: 400px; height: auto;' src='images/cliff.jpg'>" +
    "</div>";
    document.getElementById('change').innerHTML +="<span class='h3'>  You start</span>"
    + "<span class='h3 text-decoration-underline'> " + action3 + " </span>" +
     "<span class='h3'>and suddenly you come to reality.</span>"
     document.getElementById('change').innerHTML += "<div style='text-align: center;'>" +
     "<img class='image-fluid my-5 rounded-circle' style='width: 400px; height: auto;' src='images/bed.jpg'>" +
     "</div>";
    }
   
}

 document.getElementById('story').addEventListener('click',function(){
    var section =document.getElementById('seeStory');
    section.classList.toggle('d-none');
    var buttonText=section.classList.contains('d-none')?'Show Story':'Hide Story';
    this.innerText=buttonText;
    })

   var value= document.getElementById('other');
   value.addEventListener('change',function(){
    var otheroption=value.value;
    if (otheroption==='Clear')
    {
        document.getElementById('place').value = '';
        document.getElementById('action1').value = '';
        document.getElementById('color').value = '';
        document.getElementById('feeling').value = '';
        document.getElementById('action2').value = '';
        document.getElementById('danger').value = '';
        document.getElementById('Adjective1').value = '';
        document.getElementById('Adjective2').value = '';
        document.getElementById('Adjective3').value = '';
        document.getElementById('action3').value = '';
        console.log('Clear option selected');
    }
    else if (otheroption==="Fill in Atomatically")
    {
        document.getElementById('place').value = 'a village';
        document.getElementById('action1').value = 'staring at';
        document.getElementById('color').value = 'bule';
        document.getElementById('feeling').value = 'unsettling';
        document.getElementById('action2').value = 'knows';
        document.getElementById('danger').value = 'killing';
        document.getElementById('Adjective1').value = 'delaying';
        document.getElementById('Adjective2').value = 'dangerous';
        document.getElementById('Adjective3').value = 'risky';
        document.getElementById('action3').value = 'screaming';
    }
   })
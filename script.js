console.log("welcome to spotify");
// intialise the variables
let songindex=0;
let audioelement= new Audio('Acessories/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let Name_of_Song=document.getElementById('Nameofsong');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songItem'));





let songs=[
    {songName:"bgm song",filepath:"Acessories/songs/1.mp3",coverpath:"Acessories/covers/1.jpg"},
    {songName:"hhb",filepath:"Acessories/songs/2.mp3",coverpath:"Acessories/covers/2.jpg"},
    {songName:"snn",filepath:"Acessories/songs/3.mp3",coverpath:"Acessories/covers/3.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/4.mp3",coverpath:"Acessories/covers/4.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/5.mp3",coverpath:"Acessories/covers/5.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/6.mp3",coverpath:"Acessories/covers/6.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/7.mp3",coverpath:"Acessories/covers/7.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/8.mp3",coverpath:"Acessories/covers/8.jpg"},
    {songName:"salam-e-ishq",filepath:"Acessories/songs/9.mp3",coverpath:"Acessories/covers/9.jpg"},
    {songName:"Naacho Naacho",filepath:"Acessories/songs/12.mp3",coverpath:"Acessories/covers/10.jpg"}
];
songitems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
    // let audiosong=new Audio('');
    // audiosong.src=songs[i].filepath;
    // // console.log(audiosong);
    // console.log(Object(audiosong.dataset));
    // element.getElementsByClassName('timespan')[0]=audiosong;
    // element.getElementsByClassName('timespan')[0].innerText=audiosong;
  
    


}
)

//handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }

})
// listen to eventsm
audioelement.addEventListener('timeupdate',() =>{
    
    
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=((myprogressbar.value * audioelement.duration)/ 100);
});

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src='Acessories/songs/3.mp3';
        audioelement.currentTime=0;
        console.log(audioelement)
        // Name_of_Song.innerHTML=element.songName;
        audioelement.play();

    })

})
const note = document.querySelector('.nowplaying');
const keys = document.querySelectorAll('.key')
const allword = document.querySelectorAll('.hints')


window.addEventListener('keydown' , function(e) {

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio_ = document.querySelector(`audio[data-key="${e.keyCode}"]`)
 
    if(! key) return;

    const keyNote = key.getAttribute('data-note'); 
    key.classList.add('playing')
    note.innerHTML = keyNote;
    audio_.currentTime = 0;
    audio_.play()

});

function removeclass(){
    this.classList.remove('playing')
}

keys.forEach((item)=> item.addEventListener('transitionend',removeclass))

allword.forEach(function(elm , index){
    elm.setAttribute('style', `transition-delay : ${index*20}ms` )
})




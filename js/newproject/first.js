const button=document.querySelector(".search__bar button");
function logInputWalue(){
  const search=document.querySelector(".search__bar input");
  console.log(search.value);
}
button.addEventListener("click",logInputWalue); //навешиваем событие//
const cards = document.querySelectorAll(".cards__item");

for (let i = 0; i < cards.length; i++) {
    const ticket = cards[i].querySelector(".cards__ticket");
    ticket.addEventListener("click", function(){
      const name=(cards[i].querySelector(".cards__discription h3"))
        console.log(name);
    });
   
}
const name1=document.querySelectorAll(".header__links a" );
for(let i=0; i<name1.length; i++){
  const name2= name1[i];
  name2.addEventListener("click", function(){
    window.open(name2.href)
  })
}
console.log(name1)
const buttons=document.querySelectorAll(".select");//обращаемся ко всем селекторам
console.log(buttons);
for(let i=0; i <buttons.length; i++){
  buttons[i].addEventListener("click", function(){
  //console.log(buttons[i].id);
  const slide=document.querySelector(".slide__title");//создали переменную и обратились к конкретному селектору
  const image=document.querySelector(".slide__image");
  const circle=document.querySelector(".select--active");//кружки
  //slide.innerHTML="привет"
  if (buttons[i].id==="select__1"){
    slide.innerHTML="Мулан"
    image.src="./img/мулан.jpg"
    buttons[i].classList.add("select--active");
    circle.classList.remove("select--active");
  } else if (buttons[i].id==="select__2"){
    slide.innerHTML="Буратино"
    image.src="./img/буратино.jpg"
    buttons[i].classList.add("select--active");
    circle.classList.remove("select--active");
  } else if (buttons[i].id==="select__3"){
    slide.innerHTML="Гудбай, Америка"
    image.src="./img/america.png"
    buttons[i].classList.add("select--active");
    circle.classList.remove("select--active");
  } else if (buttons[i].id==="select__4"){
    slide.innerHTML="Стрельцов"
    image.src="./img/streltsov.png"
    buttons[i].classList.add("select--active");
    circle.classList.remove("select--active");
  } else if (buttons[i].id==="select__5"){
    slide.innerHTML="Наша Чуккокала"
    image.src="./img/чуккола.jpg"
    buttons[i].classList.add("select--active");
    circle.classList.remove("select--active");
  }
  })
}


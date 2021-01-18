const people = document.querySelector(".people");
const ceo = document.querySelector(".ceo img");
const aboutPeople = document.querySelector(".aboutpeople  p");
const peopleName = document.querySelector(".peoplenames h2");
const peopleRole = document.querySelector(".peoplenames h3");
var swapp ;
function switchProfile (e) {
  if (e.target.hasAttribute("src")){

   //e.target.setAttribute("src" ,ceo.getAttribute("src"));
  }

}



people.addEventListener("click", switchProfile ,false)

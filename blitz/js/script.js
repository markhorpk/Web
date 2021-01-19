const people = document.querySelector(".people");
const ceo = document.querySelector(".ceo img");
const aboutPeople = document.querySelector(".aboutpeople  p");
const peopleName = document.querySelector(".peoplenames h2");
const peopleRole = document.querySelector(".peoplenames h3");
//for sending emails;
const submitMail = document.querySelector("#submetoo");
var swapp ;

function switchProfile (e) {
  if (e.target.getAttribute("src") == "images/sana.jpg"){
    swapp = ceo.getAttribute("src");
   ceo.setAttribute("src", "images/sana.jpg");
   e.target.setAttribute("src", swapp);
   aboutPeople.innerHTML = "Proactive, brand savvy, and recently graduated from Greenwich University with a degree in Business Administration, Sana always has a solution for any problem the clients face in the digital realm. Offline, she loves travelling and making connections with new people. She previously worked in Bulls Eye DDB.";
   peopleName.innerHTML = "SANA IQBAL";
   peopleRole.innerHTML = "Community Executive - Digital";
  }

  else if (e.target.getAttribute("src") == "images/ceo.jpg") {
    swapp = ceo.getAttribute("src");
   ceo.setAttribute("src", "images/ceo.jpg");
   e.target.setAttribute("src", swapp);

   aboutPeople.innerHTML = "Ahsen has been able to steer the ship through hail and storm into calm waters with his leadership and managerial skills, but most of all with his ability to remain focused and unflustered while coping with complex situations. With his vast experience in advertising, Idris has also been instrumental in developing and sharpening the skills of his team members according to the stringent international standards.";
   peopleName.innerHTML = "AHSEN IDRIS";
   peopleRole.innerHTML = "Chief Executive Officer";
  }

  else if (e.target.getAttribute("src") == "images/accountmanager.jpg") {
    swapp = ceo.getAttribute("src");
   ceo.setAttribute("src", "images/accountmanager.jpg");
   e.target.setAttribute("src", swapp);
   aboutPeople.innerHTML = "Staying on top of agency’s star-revenue clients can be difficult. In the past few years, Sehrish Ali has experienced massive growth due to her excellent account management skills. Clients expect a prompt response, whether it’s a quick return phone call to answer a question or a lengthy opinion on a complex issue. Triaging requests appropriately means identifying the client’s deadline expectations and then meeting that turnaround timeframe. A good client servicing resource needs to be able to move at the pace of the business, not the other way around and that’s precisely how Sehrish rolls!";
   peopleName.innerHTML = "SEHRISH ROSHAN ALI";
   peopleRole.innerHTML = "Senior Account Manager";
  }
  else if (e.target.getAttribute("src") == "images/cmanager.jpg") {
    swapp = ceo.getAttribute("src");
   ceo.setAttribute("src", "images/cmanager.jpg");
   e.target.setAttribute("src", swapp);
   aboutPeople.innerHTML = "She believes, 'there are only two times, now or too late'. She is always racing against time and never lets it win. Ayusha is currently pursuing her MBA (Marketing & Social Sciences) from Lahore School of Economics. She was previously working at Spell Movies as Assistant Brand Manager - Marketing.";
   peopleName.innerHTML = "AYUSHA NIAZ SHEIKH";
   peopleRole.innerHTML = "Content Manager";
  }
  else if (e.target.getAttribute("src") == "images/assistentmanager.jpg") {
    swapp = ceo.getAttribute("src");
   ceo.setAttribute("src", "images/assistentmanager.jpg");
   e.target.setAttribute("src", swapp);
   aboutPeople.innerHTML = "A dynamic and motivated professional. She is skilled in demonstrating exceptional communication skills and making critical decisions during challenging situations. She enjoys every challenge and helps brands become visible and stand out from the clutter.";
   peopleName.innerHTML = "BENISH RAFIQUE";
   peopleRole.innerHTML = "Assistant Manager Print";
  }



}


function nored (e){
//  window.location.href="#";

}


submitMail.addEventListener("click", nored , false)
people.addEventListener("click", switchProfile ,false)

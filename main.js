function fnAceptar () {
   var valor = $('#txtInput').val();
    alert(valor);
 } 
 (function() {
   const charToVal = {};
   const name = document.querySelector(`[name="name"]`);
   const form = document.querySelector(".main-form");
   const date = document.querySelector("#datepicker");
   const save = document.querySelector("#save");
   const senderoVida = document.querySelector(".sendero-vida");
   const alma = document.querySelector(".alma");
   const destino = document.querySelector(".destino");
   const personalidad = document.querySelector(".personalidad");
 
   const nameError = document.querySelector(".name-error");
   const dateError = document.querySelector(".dob-error");
 
   const numberTypes = document.querySelectorAll(".numberTypes li");
   const numberTypesMap = { senderoVida, alma, destino, personalidad };
   const numberTypeCalculators = {
    senderoVida: calculateLifePath,
     alma: calculateSoulUrge,
     destino: calculateDestiny,
     personalidad: calculatePersonality
   };
 
   const numberTypeLinks = {
     lifePath: "http://astrology-numerology.com/num-lifepath.html",
     soulUrge: "http://astrology-numerology.com/num-birthname.html#soul_urge",
     destiny: "http://astrology-numerology.com/num-birthname.html#destiny",
     personality:"http://astrology-numerology.com/num-birthname.html#inner_dreams"
   };
 
   for (let i = 0; i < 26; i++) {
     charToVal[String.fromCharCode("a".charCodeAt(0) + i)] = i % 9 + 1;
   }
 
   if (localStorage.getItem("name")) {
     name.value = localStorage.getItem("name");
     save.checked = true;
   }
 
   if (localStorage.getItem("birthDate")) {
     date.value = localStorage.getItem("birthDate");
     save.checked = true;
   }
 
   function calculateDestiny(fullName) {
     const names = fullName.toLowerCase().split(" ");
 
     let result = names.reduce((total, name) => {
       let sum = 0;
       for (let i = 0; i < name.length; i++) {
         sum += charToVal[name.charAt(i)];
       }
       return reduceNumber(sum) + total;
     }, 0);
 
     return reduceNumber(result);
   }
 
   function calculateLifePath(birthdate) {
     const [day, month,year ] = birthdate.split("-");
     const sum = parseInt(year) + parseInt(month) + parseInt(day);
     return reduceNumber(sum);
   }
 
   function calculateSoulUrge(fullName) {
     const regexp = /[aeiou]/gi;
 
     if (!fullName.toLowerCase().match(regexp)) {
       return 0;
     }
 
     const result = fullName
       .toLowerCase()
       .match(regexp)
       .reduce((total, letter) => total + charToVal[letter], 0);
 
     return reduceNumber(result);
   }
 
   function calculatePersonality(fullName) {
     const regexp = /[^aeiou\s]/gi;
 
     if (!fullName.toLowerCase().match(regexp)) {
       return 0;
     }
 
     const result = fullName
       .toLowerCase()
       .match(regexp)
       .reduce((total, letter) => total + charToVal[letter], 0);
 
     return reduceNumber(result);
   }
 
   function reduceNumber(num) {
     if (num < 10 || num === 11 || num === 22 || num === 33) {
       return num;
     }
 
     let digit = num;
     num = 0;
     while (digit !== 0) {
       num += digit % 10;
       digit = Math.floor(digit / 10);
     }
 
     return reduceNumber(num);
   }
 
   function doCalculations(e) {
     e.preventDefault();
 
     const nameValue = name.value;
 
     if (!validateInput(nameValue)) return;
 
     if (save.checked) {
       localStorage.setItem("name", nameValue.trim());
       localStorage.setItem("birthDate", date.value);
     } else {
       localStorage.clear();
     }
 
     Object.keys(numberTypesMap).forEach(numberType => {
       numberTypesMap[numberType].innerHTML = "";
       numberTypesMap[numberType].classList.remove("show");
     });
 
     const delayDuration = 500;
 
     numberTypes.forEach((numberType, index) => {
       const numberTypeName = convertClassNameToCamelCase(numberType.className);
       const numberTypeFunc = numberTypeCalculators[numberTypeName];
       const funcArg =
         numberTypeName !== "senderoVida" ? nameValue.toLowerCase() : date.value;
       const resultText = numberType.className.split("-");
 
       setTimeout(() => {
         numberTypesMap[numberTypeName].classList.add("show");
         numberTypesMap[numberTypeName].innerHTML = `Tu numero de ${upperCaseFirstLetter(
           resultText
         )} es &nbsp;<a id=${index + 1} href="${
           numberTypeLinks[numberTypeName]
         }" target="_blank" >${numberTypeFunc(funcArg)}</a>`;
 
         setTimeout(() => {
           document.getElementById(index + 1).classList.add("highlight");
         }, delayDuration + 250);
       }, delayDuration * index);
     });
 
     scrollToResults();
   }
 
 
   function convertClassNameToCamelCase(str) {
     const words = str.split("-");
 
     return words.reduce((fullString, currentWord, index) => {
       if (index > 0) {
         return (
           fullString +
           currentWord.charAt(0).toUpperCase() +
           currentWord.slice(1)
         );
       }
       return currentWord;
     }, "");
   }
 
   function upperCaseFirstLetter(str) {
     let text = `${str[0].charAt(0).toUpperCase() + str[0].slice(1)}`;
 
     if (str[1]) {
       text += " " + str[1].charAt(0).toUpperCase() + str[1].slice(1);
     }
     return text;
   }
 
   function validateInput(fullname) {
     nameError.innerHTML = "";
     dateError.innerHTML = "";
     let isValid = true;
 
     const names = fullname.trim().split(/ +/g);
     const areNamesValid = names.every(name => {
       return name.match(/[a-zA-Z]+/, "gi");
     });
 
     if (!fullname) {
       nameError.innerHTML = "Please enter a name";
       nameError.classList.add("error-show");
       isValid = false;
     } else if (!areNamesValid) {
       nameError.innerHTML = "Please enter a valid name";
       nameError.classList.add("error-show");
       isValid = false;
     }
    
   
     return isValid;
   }
 
   function scrollToResults() {
     const numberTypesEl = document.querySelector(".numberTypes");
     numberTypesEl.style["display"] = "flex";
 
     window.scrollBy({
       top: window.innerHeight,
       behavior: "smooth"
     });
   }
 
   form.addEventListener("submit", doCalculations);
 })();
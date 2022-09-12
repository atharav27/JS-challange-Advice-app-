 const apiUrl = "https://api.adviceslip.com/advice";
 
 let randomAdvice = document.getElementById("rendom-advice");
 let randomAdviceButton = document.getElementById("new-advice");

 fetch(apiUrl)
 .then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    randomAdvice.innerHTML = data.slip.advice;
})

randomAdviceButton.addEventListener('click', gerNewAdvice);

function gerNewAdvice(){
    fetch(apiUrl)
 .then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    randomAdvice.innerHTML = data.slip.advice;
})
}
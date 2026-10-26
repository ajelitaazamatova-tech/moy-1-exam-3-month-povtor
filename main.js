//1 задание

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
};
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45")); 

//2 задание 

const secondInterval = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}
secondInterval();

//3 задание

const stopInterval = () => { 
    let i=0;
    const intervalId = setInterval(() => {
         if (i<10) {
            i++;
            console.log(i);
        }
        if (i === 10) {
            clearInterval(intervalId);
        }
    },1000);
};

stopInterval();

//4 задание

const block = document.querySelector(".block");
block.addEventListener('click', () => {
    block.classList.toggle('active');
});

//5 задание
const jsonValues = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
}
jsonValues();
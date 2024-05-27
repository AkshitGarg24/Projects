let a = "";
let b = "";
let number = document.getElementsByClassName("abc");
let text = document.querySelector("#text");
let equal = document.querySelector(".equal");
let clear = document.getElementsByClassName("clear");
let sqt = document.querySelector(".sqt");
equal.addEventListener("click",()=>{
    let ans = eval(b);
    text.textContent = ans;
    a = "";
    b = "";
})
for (const iterator of number) {
    iterator.addEventListener("click",()=>{
        a = a+iterator.innerText;
        b = b+iterator.innerText;
        text.textContent = a;
    })
}
for (const iterator of clear) {
    iterator.addEventListener("click",()=>{
        a = "";
        b = "";
        text.textContent = a;
    })
}
sqt.addEventListener("click",()=>{
    a = a+sqt.innerText;
    b = b+"**";
    text.textContent = a;
})
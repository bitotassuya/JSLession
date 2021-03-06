/* 

<h2>JavaScript Promise</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

*/

const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});
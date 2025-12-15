function onClickFun() {
    const name = document.getElementById("name").value;
    const navbar = document.getElementById("navbar");
    navbar.innerText = "Hello " + name;
}

function onClickFun1(){
    const box1 = document.getElementsByClassName("box1")[0];
    box1.style.backgroundColor = "red";
    box1.style.color="white"
}

function onClickFun2(){
    const box2 = document.getElementsByClassName("box2")[0];
    box2.style.backgroundColor = "blue";
    box2.style.color="white"
}

function onClickFun3(){
    const box3 = document.getElementsByClassName("box3")[0];
    box3.style.backgroundColor = "green";
    box3.style.color="white"
}

function onClickFun4(){
    const box4 = document.getElementsByClassName("box4")[0];
    box4.style.backgroundColor = "yellow";
}

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    start();
}


///////START///////////

function start() {

    console.log("start");

    document.querySelector("#baggrund").classList.add("show");
    document.querySelector("#skygge").classList.add("show");
    document.querySelector("#overskrift_navn").classList.add("show");
    document.querySelector("#text_start").classList.add("show");
    document.querySelector("#logo").classList.add("show");
    document.querySelector("#start_knap").classList.add("show");

    document.querySelector("#start_knap").addEventListener("click", hideFrame1);

}

function hideFrame1() {
    console.log("hideStart");

    document.querySelector("#overskrift_navn").classList.remove("show");
    document.querySelector("#text_start").classList.remove("show");
    document.querySelector("#logo").classList.remove("show");
    document.querySelector("#start_knap").classList.remove("show");

    frame1();

}

////FRAME 1///////

function frame1() {
    console.log("frame1");

    document.querySelector("#progres1").classList.add("show");
    document.querySelector("#sprg1").classList.add("show");
    document.querySelector("#svar1_1").classList.add("show");
    document.querySelector("#svar1_2").classList.add("show");
    document.querySelector("#svar1_3").classList.add("show");


    document.querySelector("#svar1_1").addEventListener("click", wrong);
    document.querySelector("#svar1_2").addEventListener("click", wrong);
    document.querySelector("#svar1_3").addEventListener("click", right);


}

function wrong() {

    console.log("wrong");

    document.querySelector("#sprg1").classList.remove("show");
    document.querySelector("#svar1_1").classList.remove("show");
    document.querySelector("#svar1_2").classList.remove("show");
    document.querySelector("#svar1_3").classList.remove("show");

    document.querySelector("#forkert").classList.add("show");
    document.querySelector("#text_sprg1").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar);


}

function right() {

    console.log("right");

    document.querySelector("#sprg1").classList.remove("show");
    document.querySelector("#svar1_1").classList.remove("show");
    document.querySelector("#svar1_2").classList.remove("show");
    document.querySelector("#svar1_3").classList.remove("show");

    document.querySelector("#rigtig").classList.add("show");
    document.querySelector("#text_sprg1").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar);


}

function hideSvar() {
    console.log("hideSvar");

    document.querySelector("#progres1").classList.remove("show");
    document.querySelector("#forkert").classList.remove("show");
    document.querySelector("#rigtig").classList.remove("show");
    document.querySelector("#text_sprg1").classList.remove("show");
    document.querySelector("#next").classList.remove("show");



    frame2();

}

////FRAME 2///////

function frame2() {
    console.log("frame2");

    document.querySelector("#progres2").classList.add("show");
    document.querySelector("#sprg2").classList.add("show");
    document.querySelector("#svar2_1").classList.add("show");
    document.querySelector("#svar2_2").classList.add("show");
    document.querySelector("#svar2_3").classList.add("show");


    document.querySelector("#svar2_1").addEventListener("click", right2);
    document.querySelector("#svar2_2").addEventListener("click", right2);
    document.querySelector("#svar2_3").addEventListener("click", wrong2);


}

function wrong2() {

    console.log("wrong2");

    document.querySelector("#sprg2").classList.remove("show");
    document.querySelector("#svar2_1").classList.remove("show");
    document.querySelector("#svar2_2").classList.remove("show");
    document.querySelector("#svar2_3").classList.remove("show");

    document.querySelector("#forkert").classList.add("show");
    document.querySelector("#text_sprg2").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar2);


}

function right2() {

    console.log("right2");

    document.querySelector("#sprg2").classList.remove("show");
    document.querySelector("#svar2_1").classList.remove("show");
    document.querySelector("#svar2_2").classList.remove("show");
    document.querySelector("#svar2_3").classList.remove("show");

    document.querySelector("#rigtig").classList.add("show");
    document.querySelector("#text_sprg2").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar2);


}

function hideSvar2() {
    console.log("hideSvar2");

    document.querySelector("#sprg2").classList.remove("show");
    document.querySelector("#svar2_1").classList.remove("show");
    document.querySelector("#svar2_2").classList.remove("show");
    document.querySelector("#svar2_3").classList.remove("show");


    document.querySelector("#progres2").classList.remove("show");
    document.querySelector("#forkert").classList.remove("show");
    document.querySelector("#rigtig").classList.remove("show");
    document.querySelector("#text_sprg2").classList.remove("show");
    document.querySelector("#next").classList.remove("show");



    frame3();

}



////FRAME 3///////

function frame3() {
    console.log("frame3");

    document.querySelector("#progres3").classList.add("show");
    document.querySelector("#sprg3").classList.add("show");
    document.querySelector("#svar3_1").classList.add("show");
    document.querySelector("#svar3_2").classList.add("show");
    document.querySelector("#svar3_3").classList.add("show");


    document.querySelector("#svar3_1").addEventListener("click", wrong3);
    document.querySelector("#svar3_2").addEventListener("click", wrong3);
    document.querySelector("#svar3_3").addEventListener("click", right3);


}

function wrong3() {

    console.log("wrong3");

    document.querySelector("#sprg3").classList.remove("show");
    document.querySelector("#svar3_1").classList.remove("show");
    document.querySelector("#svar3_2").classList.remove("show");
    document.querySelector("#svar3_3").classList.remove("show");

    document.querySelector("#forkert").classList.add("show");
    document.querySelector("#text_sprg3").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar3);


}

function right3() {

    console.log("right3");

    document.querySelector("#sprg3").classList.remove("show");
    document.querySelector("#svar3_1").classList.remove("show");
    document.querySelector("#svar3_2").classList.remove("show");
    document.querySelector("#svar3_3").classList.remove("show");

    document.querySelector("#rigtig").classList.add("show");
    document.querySelector("#text_sprg3").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar3);


}

function hideSvar3() {
    console.log("hideSvar3");

    document.querySelector("#progres3").classList.remove("show");
    document.querySelector("#forkert").classList.remove("show");
    document.querySelector("#rigtig").classList.remove("show");
    document.querySelector("#text_sprg3").classList.remove("show");
    document.querySelector("#next").classList.remove("show");

    frame4();
}

////FRAME 4///////

function frame4() {
    console.log("frame4");

    document.querySelector("#sprg3").classList.remove("show");
    document.querySelector("#svar3_1").classList.remove("show");
    document.querySelector("#svar3_2").classList.remove("show");
    document.querySelector("#svar3_3").classList.remove("show");

    document.querySelector("#progres4").classList.add("show");
    document.querySelector("#sprg4").classList.add("show");
    document.querySelector("#svar4_1").classList.add("show");
    document.querySelector("#svar4_2").classList.add("show");

    document.querySelector("#svar4_1").addEventListener("click", wrong4);
    document.querySelector("#svar4_2").addEventListener("click", right4);


}

function wrong4() {

    console.log("wrong4");

    document.querySelector("#sprg4").classList.remove("show");
    document.querySelector("#svar4_1").classList.remove("show");
    document.querySelector("#svar4_2").classList.remove("show");

    document.querySelector("#forkert").classList.add("show");
    document.querySelector("#text_sprg4").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar4);


}

function right4() {

    console.log("right4");

    document.querySelector("#sprg4").classList.remove("show");
    document.querySelector("#svar4_1").classList.remove("show");
    document.querySelector("#svar4_2").classList.remove("show");

    document.querySelector("#rigtig").classList.add("show");
    document.querySelector("#text_sprg4").classList.add("show");
    document.querySelector("#next").classList.add("show");


    document.querySelector("#next").addEventListener("click", hideSvar4);


}

function hideSvar4() {
    console.log("hideSvar4");

    document.querySelector("#sprg4").classList.remove("show");
    document.querySelector("#svar4_1").classList.remove("show");
    document.querySelector("#svar4_2").classList.remove("show");


    document.querySelector("#progres4").classList.remove("show");
    document.querySelector("#forkert").classList.remove("show");
    document.querySelector("#rigtig").classList.remove("show");
    document.querySelector("#text_sprg4").classList.remove("show");
    document.querySelector("#next").classList.remove("show");

    frame5();
}


////FRAME 5///////

function frame5() {
    console.log("frame5");

    document.querySelector("#progres5").classList.add("show");
    document.querySelector("#sprg5").classList.add("show");
    document.querySelector("#svar5_1").classList.add("show");
    document.querySelector("#svar5_2").classList.add("show");
    document.querySelector("#svar5_3").classList.add("show");

    document.querySelector("#svar5_1").addEventListener("click", wrong5);
    document.querySelector("#svar5_2").addEventListener("click", wrong5);
    document.querySelector("#svar5_3").addEventListener("click", right5);


}

function wrong5() {

    console.log("wrong5");

    document.querySelector("#sprg5").classList.remove("show");
    document.querySelector("#svar5_1").classList.remove("show");
    document.querySelector("#svar5_2").classList.remove("show");
    document.querySelector("#svar5_3").classList.remove("show");

    document.querySelector("#forkert").classList.add("show");
    document.querySelector("#text_sprg5").classList.add("show");
    document.querySelector("#afslut").classList.add("show");


    document.querySelector("#afslut").addEventListener("click", hideSvar5);


}

function right5() {

    console.log("right5");

    document.querySelector("#sprg5").classList.remove("show");
    document.querySelector("#svar5_1").classList.remove("show");
    document.querySelector("#svar5_2").classList.remove("show");
    document.querySelector("#svar5_3").classList.remove("show");

    document.querySelector("#rigtig").classList.add("show");
    document.querySelector("#text_sprg5").classList.add("show");
    document.querySelector("#afslut").classList.add("show");


    document.querySelector("#afslut").addEventListener("click", hideSvar5);


}

function hideSvar5() {
    console.log("hideSvar5");

    document.querySelector("#sprg5").classList.remove("show");
    document.querySelector("#svar5_1").classList.remove("show");
    document.querySelector("#svar5_2").classList.remove("show");
    document.querySelector("#svar5_3").classList.remove("show");

    document.querySelector("#progres5").classList.remove("show");
    document.querySelector("#forkert").classList.remove("show");
    document.querySelector("#rigtig").classList.remove("show");
    document.querySelector("#text_sprg5").classList.remove("show");
    document.querySelector("#afslut").classList.remove("show");

    frame6();
}

function frame6() {

    console.log("frame6");

    document.querySelector("#tak").classList.add("show");
    document.querySelector("#text_slut").classList.add("show");
    document.querySelector("#logo").classList.add("show");
    document.querySelector("#nyhed").classList.add("show");

}

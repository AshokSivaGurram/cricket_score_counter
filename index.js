let cskScore = document.getElementById("csk-score")
let rcbScore = document.getElementById("rcb-score")
let wicketCsk = document.getElementById("csk-wicket")
let wicketRcb = document.getElementById("rcb-wicket")
let cskOver = document.getElementById("csk-over")
let cskBall = document.getElementById("csk-ball")
let rcbOver = document.getElementById("rcb-over")
let rcbBall = document.getElementById("rcb-ball")


let csk = 0
let rcb = 0
let cskwicket = 0
let rcbwicket = 0
let overcsk = 0
let ballcsk = 0
let overrcb=0
let ballrcb=0

function csk1() {
    if ((cskwicket<10) && (overcsk<20)){
        if (ballcsk==5){
            overcsk += 1
            ballcsk = 0
        }
        else {
            ballcsk += 1
        }
        csk+=1
        cskScore.textContent = csk
        cskOver.textContent = overcsk
        cskBall.textContent = ballcsk
    }
    if ((cskwicket==10) || (overcsk==20)) {
        document.getElementById("innings-csk").textContent="Innings Finished"
    }
}
function csk2(){
    if ((cskwicket<10) && (overcsk<20)){
        if (ballcsk==5){
            overcsk += 1
            ballcsk = 0
        }
        else {
            ballcsk += 1
        }
        csk+=2
        cskScore.textContent = csk
        cskOver.textContent = overcsk
        cskBall.textContent = ballcsk
    }
    if ((cskwicket==10) || (overcsk==20)) {
        document.getElementById("innings-csk").textContent="Innings Finished"
    }
}
function csk4(){
    if ((cskwicket<10) && (overcsk<20)){
        if (ballcsk==5){
            overcsk += 1
            ballcsk = 0
        }
        else {
            ballcsk += 1
        }
        csk+=4
        cskScore.textContent = csk
        cskOver.textContent = overcsk
        cskBall.textContent = ballcsk
    }
    if ((cskwicket==10) || (overcsk==20)) {
        document.getElementById("innings-csk").textContent="Innings Finished"
    }
}
function csk6(){
    if ((cskwicket<10) && (overcsk<20)){
        if (ballcsk==5){
            overcsk += 1
            ballcsk = 0
        }
        else {
            ballcsk += 1
        }
        csk+=6
        cskScore.textContent = csk
        cskOver.textContent = overcsk
        cskBall.textContent = ballcsk
    }
    if ((cskwicket==10) || (overcsk==20)) {
        document.getElementById("innings-csk").textContent="Innings Finished"
    }
}
function rcb1(){
    if ((rcbwicket<10) && (overrcb<20)){
        if (ballrcb==5){
            overrcb += 1
            ballrcb=0
        }
        else {
            ballrcb += 1
        }
        rcb+=1
        rcbScore.textContent = rcb
        rcbOver.textContent = overrcb
        rcbBall.textContent = ballrcb
    }
    if ((rcbwicket==10) || (overrcb==20)) {
        document.getElementById("innings-rcb").textContent="Innings Finished"
    }
}
function rcb2(){
    if ((rcbwicket<10) && (overrcb<20)){
        if (ballrcb==5){
            overrcb += 1
            ballrcb=0
        }
        else {
            ballrcb += 1
        }
        rcb+=2
        rcbScore.textContent = rcb
        rcbOver.textContent = overrcb
        rcbBall.textContent = ballrcb
    }
    if ((rcbwicket==10) || (overrcb==20)) {
        document.getElementById("innings-rcb").textContent="Innings Finished"
    }
}
function rcb4(){
    if ((rcbwicket<10) && (overrcb<20)){
        if (ballrcb==5){
            overrcb += 1
            ballrcb=0
        }
        else {
            ballrcb += 1
        }
        rcb+=4
        rcbScore.textContent = rcb
        rcbOver.textContent = overrcb
        rcbBall.textContent = ballrcb
    }
    if ((rcbwicket==10) || (overrcb==20)) {
        document.getElementById("innings-rcb").textContent="Innings Finished"
    }
}
function rcb6(){
    if ((rcbwicket<10) && (overrcb<20)){
        if (ballrcb==5){
            overrcb += 1
            ballrcb=0
        }
        else {
            ballrcb += 1
        }
        rcb+=6
        rcbScore.textContent = rcb
        rcbOver.textContent = overrcb
        rcbBall.textContent = ballrcb
    }
    if ((rcbwicket==10) || (overrcb==20)) {
        document.getElementById("innings-rcb").textContent="Innings Finished"
    }
}
function cskWicket(){
    if ((cskwicket<10) && (overcsk<20)){
        if (ballcsk==5){
            overcsk += 1
            ballcsk=0
        }
        else {
            ballcsk += 1
            console.log(ballcsk)
        }
    cskwicket+=1
    wicketCsk.textContent = cskwicket}
    cskOver.textContent = overcsk
    cskBall.textContent = ballcsk
    if ((cskwicket==10) || (overcsk==20)) {
        document.getElementById("innings-csk").textContent="Innings Finished"
    }
}
function rcbWicket(){
    if ((rcbwicket<10) && (overrcb<20)){
        if (ballrcb==5){
            overrcb += 1
            ballrcb=0
        }
        else {
            ballrcb += 1
        }
    rcbwicket+=1
    wicketRcb.textContent = rcbwicket
    rcbOver.textContent = overrcb
    rcbBall.textContent = ballrcb
}
    if ((rcbwicket==10) || (overrcb==20)) {
        document.getElementById("innings-rcb").textContent="Innings Finished"
    }
}
function cskwide(){
    if ((cskwicket<10) && (overcsk<20)){
        csk+=1
        cskScore.textContent = csk
    }
}
function rcbwide(){
    if ((rcbwicket<10) && (overrcb<20)){
        rcb+=1
        rcbScore.textContent = rcb
    }
}
function results(){
    if (((rcbwicket==10) || (overrcb==20)) && ((cskwicket==10) || (overcsk==20))){
        if (csk>rcb){
            document.getElementById("results").textContent="CSK won the match"
        }
        else if (rcb>csk){
            document.getElementById("results").textContent="RCB won the match"
        }
        else{
            document.getElementById("results").textContent="The match is draw!"
        }
    }
    else{
        document.getElementById("results").textContent="Innings are not finished"
    }
}
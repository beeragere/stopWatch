let display = document.querySelector(".watch");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let errorMessage = document.querySelector(".errorMessage");


display.innerHTML = "hello";

function StopWatch(){
    this.timer = 0;
    this.checkStatus = false;

    this.start = function(){
        if(this.checkStatus === true){
            errorMessage.classList.remove("fadeAnimation");
            void errorMessage.offsetWidth;
            errorMessage.classList.add("fadeAnimation");
            errorMessage.innerHTML = "Press Stop First!!"
        }
        else{
            this.checkStatus = true;
            console.log("timer sarted");
            this.setTimer = setInterval(() => {
                this.timer++;
                this.show(this.timer);
            }, 1000);
        }
    }

    this.stop = function(){
        if(this.checkStatus === false){
            errorMessage.classList.remove("fadeAnimation");
            void errorMessage.offsetWidth;
            errorMessage.classList.add("fadeAnimation");
            errorMessage.innerHTML = "Press Start First!!";
        }
        else{
            this.checkStatus = false;
            clearInterval(this.setTimer);
        }
    }

    this.reset = function() {
       this.timer = 0; 
       this.show(this.timer);
    }

   this.show = function(value){
       display.innerHTML = value + "s"; 
   } 
}


watch = new StopWatch();


//add event listeners for
//start, stop and reset!!!
start.addEventListener('click', () => {
    watch.start();
})
stop.addEventListener('click', () => {
    watch.stop();
})
reset.addEventListener('click', () => {
    watch.reset();
})
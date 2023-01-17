
var sec;
var timer;
var ele = document.getElementById('timer');
ele.style.display = "none";
const typedwords = document.getElementById('typedwords');
typedwords.addEventListener('keydown',function (e){
    ele.style.display = "block";
    if(e.code==='Enter'){
        e.preventDefault()
    }
    if (sec === undefined) {
        (function () {
            sec=59;
            timer = setInterval(()=>{
             ele.innerHTML = "00:" + seconds(sec);
             sec --;
             if (sec < 0) {
                 clearInterval(timer);
             }
            }, 1000)
            function seconds(sec) {
                return sec >= 10 ? sec : "0" + sec
            } 
         })()
    }
    
    
}
)


const randomWords = ["base" , "come" , "night" , "less" , "what" , "wall" , "fly" , "think" , "job" , "soon" , "true" , "dark" , "last" , "trip" , "rose" , "crew" , "after" , "coach" , "poke" , "role" , "write" , "good" , "rain" , "honor" , "either" , "beat" , "clean" , "does" , "junk" , "flow"];

const typingText = document.querySelector('.typing-text')
const inpField = document.querySelector('.typing-area')
let charIndex;
function changWords() {
	let spanData=[];
	let randIndex = Math.floor(Math.random() * randomWords.length);
	randomWords.forEach(span => {
		let spanTag = `<span>${span}</span>`;
		typingText.innerHTML += " "+spanTag;
	})
	
}

function shuffle(randomWords) {
	let currentIndex = randomWords.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex != 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [randomWords[currentIndex], randomWords[randomIndex]] = [
		randomWords[randomIndex], randomWords[currentIndex]];
	}
  
	return randomWords;
  }

  function initTyping() {
	const characters = typingText.querySelectorAll("span");
	let typedChar = inpField.value.split("");
	console.log(typedChar);
}



shuffle(randomWords)
changWords()
inpField.addEventListener("input", initTyping)
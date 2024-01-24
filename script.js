let start = document.querySelector(".start"),
  end = document.querySelector(".end"),
  game = { start: false, outOfStart: true, finished: false },
	borders = document.querySelectorAll('.border');


let resetGame = ()=>{
	if(game.start){
		start.classList.remove('blue')
		game = { start: false, outOfStart: true, finished: false }
	}
}

let timerStart = (time) => {
	start.classList.add('blue')
  setTimeout(() => {
		if(!game.outOfStart){
			if (time <= 0 ) {
				for (const i of borders) {
					i.addEventListener('mouseenter', ()=>{
						if(!game.finished && game.start){
							game.start ? alert('u failed') :false
							resetGame()
					}
					})
				}
				return (game.start = true)
			} else {
				timerStart(time-=.01);
			}
		}
  }, 1);
};

start.addEventListener("mouseenter", ()=>{
	game.outOfStart = false
	timerStart(3)
});
start.addEventListener("mouseleave", ()=>{
	if (!game.start) {
    resetGame();
		start.classList.remove('blue')
  } 
	game.outOfStart = true
});

end.addEventListener('mouseenter', ()=>{
	game.finished = true
	resetGame()
})
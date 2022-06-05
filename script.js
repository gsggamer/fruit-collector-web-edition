let cnv = document.querySelector("canvas")
let ctx = cnv.getContext("2d")
let htmlBody = document.querySelector("body")

let person = {
	x: 60, y: (cnv.height / 2) - 15,
	w: 30, h: 30,
	color: "#55f",
	wLeft: false, wRight: false, wUp: false, wDown: false
}
let fruit = {
	x: Math.random() * cnv.width - 30, y: Math.random() * cnv.height - 30,
	w: 30, h: 30,
	color: "#f55",
	hiper: false, hiperSort: Math.floor(Math.random() * 13)
}
let pontuation = 0

function draw() {
	ctx.clearRect(0, 0, cnv.width, cnv.height)
	
	ctx.fillStyle = person.color
	ctx.fillRect(person.x, person.y, person.w, person.h)
	ctx.fillStyle = fruit.color
	ctx.fillRect(fruit.x, fruit.y, fruit.w, fruit.h)

	ctx.fillStyle = "#222"
	ctx.font = "30px sans-serif"
	ctx.fillText(`Pontuação: ${pontuation}`, 10, 40)
}
function update() {
	if(person.wUp && !person.wDown) { person.y -= 3 }
	else if(!person.wUp && person.wDown) { person.y += 3 }
	if(person.wLeft && !person.wRight) { person.x -= 3 }
	else if(!person.wLeft && person.wRight) { person.x += 3 }
	
	if((person.x+person.w>=fruit.x && person.x<=fruit.x+fruit.w)&&(person.y+person.h>=fruit.y && person.y<=fruit.y+fruit.h)) {
		if(!fruit.hiper) {
			fruit.hiperSort = Math.floor(Math.random() * 13)
			fruit.x = Math.random() * cnv.width - 30
			fruit.y = Math.random() * cnv.height - 30
			pontuation += 1
		} else {
			fruit.hiperSort = Math.floor(Math.random() * 13)
			fruit.x = Math.random() * cnv.width - 30
			fruit.y = Math.random() * cnv.height - 30
			pontuation += 5
		}
		console.log(fruit.hiperSort)
	}
	
	if(fruit.hiperSort == 7) {
		fruit.hiper = true
	}else{
		fruit.hiper = false
	}
	if(fruit.hiper) {
		fruit.color = "yellow"
	}else{
		fruit.color = "#f55"
	}
}

function loop() {
	draw()
	update()
	requestAnimationFrame(loop)
}

loop()

document.addEventListener("keydown", (e)=>{
	key = e.key
	
	switch(key) {
		case "ArrowUp":
			person.wUp = true
			person.wDown = false
			break
		case "ArrowDown":
			person.wUp = false
			person.wDown = true
			break
		case "ArrowLeft":
			person.wLeft = true
			person.wRight = false
			break
		case "ArrowRight":
			person.wLeft = false
			person.wRight = true
			break
	}
})

document.addEventListener("keyup", (e)=>{
	key = e.key
	
	switch(key) {
		case "ArrowUp":
			person.wUp = false
			person.wDown = false
			break
		case "ArrowDown":
			person.wUp = false
			person.wDown = false
			break
		case "ArrowLeft":
			person.wLeft = false
			person.wRight = false
			break
		case "ArrowRight":
			person.wLeft = false
			person.wRight = false
			break
	}
})

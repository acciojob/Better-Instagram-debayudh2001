//your code here
let divs = document.querySelectorAll("div[draggable=true]")
for(let v of divs){
	v.addEventListener("dragstart", (e) => {
		let div = e.target
		div.style.opacity = "0.3"
		e.dataTransfer.setData("div-id", div.id)
	})
	v.addEventListener("dragend", (e) => {
		let div = e.target
		div.style.opacity = "1"
	})
}
let dragEvents = ["dragover", "dragenter", "drop"]

for(let v of dragEvents){
	for(let w of divs){
		w.addEventListener(v, (e) => {
			e.preventDefault()
			if(v == "drop"){
				let id = e.dataTransfer.getData("div-id")
				let div1 = document.getElementById(id)
				//console.log(div1.innerText)
				let div2 = e.target
				//console.log(div2.innerText)
				let temp1 = div1.innerText
				div1.innerText = div2.innerText
				div2.innerText = temp1
				
                let url1 = window.getComputedStyle(div1).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1')
				let url2 = window.getComputedStyle(div2).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1')
				div1.style.backgroundImage = `url(${url2})`
				div2.style.backgroundImage = `url(${url1})`
			}
		})
	}
}
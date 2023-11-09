const row=document.querySelector(".row");

let person=()=>{
fetch('https://api.tvmaze.com/shows/1/cast')

.then((res)=>res.json())

.then((msg)=>{
	for(a of msg){
		create(a)
		console.log(a);
		
	}
})
.catch((err)=>{
	console.log("Error")
})

}
person()

const create=(a)=>{
	row.innerHTML+=`<div class="col">
					<div class="card">
						<div class="img-sec">
							<img src="${a.character.image.original}" alt="">
						</div>
						
						<div class="person-info">
						    <h1 class="title">${a.person.name}</h1>
							
							<div class="info-deatail">
							    <ul>
								    <li>country: <span>${a.person.country.name}</span></li>
									<li>birthday: <span>${a.person.birthday}</span></li>
									<li>character name: <span>${a.character.name}</span></li>
								</ul>
							</div>
						
						</div>
					</div>
				</div>`
}
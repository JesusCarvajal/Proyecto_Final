const btn = document.querySelector(".barra_btn");

btn.addEventListener("click", function(){
    document.getElementById("barra_lateral").classList.toggle('active');
    document.getElementById("info_receta").classList.toggle('active');
});

async function sendApiRequest(){
	let apiKey = "y2h4X0EeY6iArEma64Dx4kEHK2JuiS3GFTCUxwd4"
	let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
	console.log(response)
	let data = await response.json()
	console.log(data)
	useApiData(data)
}

function useApiData(data){
	document.querySelector("#Exp").innerHTML += data.explanation
	document.querySelector("#imagen_receta").innerHTML = data.url
}

sendApiRequest()

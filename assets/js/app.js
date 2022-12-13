cl=console.log;
cl(countries)
request=document.getElementById("CountryContainer");

result=" ";

countries.forEach(function(para,i){
	result+=` <div class="col-sm-3 mt-3">
	<h6 class="card-header text-center bg-info">COUNTRY N0: ${i+1}</h6>
			   <div class="card">
			       <div class="card-body">
				    <div class="flag">
					   <img src="${para.flag}" alt="${para.name}" title="${para.name}">
					</div>
					<h3 class="CNAME">
					 ${para.name}
					</h3>
					<div class="details">
					  <p>
					     <strong>
						     capital:
						 </strong>
						 "${para.capital}" 
					  </p>
					  <p>
					     <strong>
						     languages:
						 </strong>
						"${para.languages}" 
					  </p>
					  <p>
					     <strong>
						     population:
						 </strong>
						 "${para.population}" 
					  </p>
					</div>
				</div>
			   </div>
			 </div>`
})

request.innerHTML=result;	
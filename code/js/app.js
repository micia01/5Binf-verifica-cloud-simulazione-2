var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards,app.onSuccess)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		
	},

	onSuccess:function(jsonData){
        
		//   console.log(jsonData);
		   let list = jsonData.cardList;
		   list.forEach(element => {
			   let html = `<div class="col-lg-3 col-md-6 mb-4 net-all">
			   <div class="card h-100">
				 <img class="card-img-top" src="${element.imgUrl}" alt="${element.imgAlt}">
				 <div class="card-body">
				   <h4 class="card-title">${element.title}</h4>
				   <p class="card-text">${element.text}</p>
				 </div>
				 <div class="card-footer">
				   <a href="${element.linkButton}" class="btn btn-primary">Accedi</a>
				 </div>
			   </div>
			 </div>`;
		   $("#row").append(html);
		   });
	   },

	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);

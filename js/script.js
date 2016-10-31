"use strict";
class Product{
	constructor(cod,name,image,promo,price,desc){
		this.cod = cod;
		this.name = name;
		this.image = image;
		this.promo = promo;
		this.price = price;
		this.desc = desc;
	}
	list(products){
		var list = document.getElementById("list");
		for(var i=0; i < products.length; i++){
			let product = new Product(products[i].cod,products[i].name,products[i].image,products[i].promo,products[i].price,products[i].desc);
			var column, thumbnail, title, image, old_price, price, btn;
			column = document.createElement("div");
			thumbnail = document.createElement("div");
			title = document.createElement("h1");
			image = document.createElement("img");
			old_price = document.createElement("div");
			price = document.createElement("p");
			btn = document.createElement("a");

			column.classList.add("col-xs-12");
			column.classList.add("col-sm-6");
			column.classList.add("col-md-4");
			column.classList.add("col-lg-4");

			thumbnail.classList.add("thumbnail");
			title.classList.add("text-center");
			old_price.classList.add("old-price");
			price.classList.add("price");

			btn.classList.add("btn");
			btn.classList.add("btn-success");
			btn.classList.add("btn-lg");
			btn.classList.add("btn-block");
			btn.innerHTML = "Buy";

			title.innerHTML = product.name;
			image.setAttribute("src",product.image);

			if(product.promo == true){
				old_price.innerHTML = "R$ "+ product.price;
				price.innerHTML = "R$ "+ (product.price - product.desc);
			}else{
				price.innerHTML = "CAD$ "+ product.price;
			}
			thumbnail.appendChild(title);
			thumbnail.appendChild(image);
			thumbnail.appendChild(old_price);
			thumbnail.appendChild(price);
			thumbnail.appendChild(btn);

			column.appendChild(thumbnail);
			list.appendChild(column);
		}
	}
}

var products = [
	{
		cod: 1,
		name: "Textile Sneakers Black",
		image: "img/01.jpg",
		promo: true,
		price: 250.00,
		desc: 50.00
	},
	{
		cod: 2,
		name: "Textile Sneakers Red",
		image: "img/02.jpg",
		promo: false,
		price: 250.00,
		desc: null
	},
	{
		cod: 3,
		name: "Textile Sneakers White",
		image: "img/03.jpg",
		promo: false,
		price: 250.00,
		desc: null
	},
]
let product = new Product();
product.list(products);

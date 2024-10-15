function preload_image(im_url) {
	let img = new Image();
	img.src = im_url;
}

preload_image("images/newspaperBG.jpeg")
preload_image("images/linedPaper.jpeg")


var vm = new Vue({
	el: "#app",
	data: {},
	methods: {},
});

const options = {
	transformAssetUrls: {
		video: ["src", "poster"],
		source: "src",
		img: "src",
		image: "xlink:href",
		"b-avatar": "src",
		"b-img": "src",
		"b-img-lazy": ["src", "blank-src"],
		"b-card": "img-src",
		"b-card-img": "src",
		"b-card-img-lazy": ["src", "blank-src"],
		"b-carousel-slide": "img-src",
		"b-embed": "src",
	},
};

// var string = '<div> <h1> Mandy Luu </h1> <p> Portfolio site. ©2024 Mandy L. - All Rights Reserved </p>' +
// 					'<p> <a href="/indexMain.html"> Home </a> <a href="/about.html"> About </a> Art <a href="/games.html">' +
// 					'Games </a> <a href="/programming.html"> Programming </a> </p> </div> <div> <p> <br /> Get in touch!' +
// 					'Email manyisart@gmail.com and follow @man_yisart on Twitter for regular updates. </p> <div> ' +
// 					'<p class="h2"> <a href="https://www.linkedin.com/in/luumandy/" target="_blank"> <b-icon-linkedin ' +
// 					'variant="danger"></b-icon-controller> </a> <a href="https://github.com/mandyL2" target="_blank">' +
// 					'<b-icon-github variant="danger"></b-icon-github> </a> <a href="https://twitter.com/man_yisArt" ' +
// 					'target="_blank"> <b-icon-twitter variant="danger"></b-icon-twitter> </a> ' +
// 					'<a href="https://youtube.com/@manyi5427?si=n6xYA2t91CPLNcyw" target="_blank"> <b-icon-youtube ' +
// 					'variant="danger"></b-icon-youtube> </a> <a href="https://mandyl2.itch.io/" target="_blank">' +
// 					'<b-icon-controller variant="danger"></b-icon-controller> </a> </p> </div> </div>';
// 			document.getElementById('foot').innerHTML += string;
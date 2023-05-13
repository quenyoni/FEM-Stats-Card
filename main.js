import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import HeaderImg from "./images/image-header-desktop.jpg";
import HeaderMobi from "./images/image-header-mobile.jpg";

import { CountUp } from "countup.js";

const list = [
	{
		id: 1,
		name: "companies",
		total: 10,
	},
	{
		id: 2,
		name: "templates",
		total: 314,
	},
	{
		id: 3,
		name: "queries",
		total: 12,
	},
];

function globalCountUp() {
	return list.forEach((item) => {
		let countUp = new CountUp(
			item.name,
			item.total,
		);
		return countUp.start();
	});
}

window.addEventListener(
	"load",
	globalCountUp,
);



document.querySelector(
	"#app",
).innerHTML = `

<div class="container">

<div class="holder">
<div class="colors"></div>

<img class='desk' src=${HeaderImg} alt=""> 


</div>



<div  class='text'> 


  <div class='other' >

  <h1 class='main-header'> Get <span class='insight'>insights</span>  that help your business grow.</h1>

<p>
Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.</p>

  
<div class='stats'>

  <div class="stat">
  <h1><span id='companies'>10</span>k+ </h1>
  <div class="stat-item">companies </div>
  </div>


  <div class="stat">
  <h1><span id='templates'>314</span> </h1>
 
  <div class="stat-item"> templates</div>
  </div>

  <div class="stat">
  <h1><span id='queries'>12</span>M+ </h1>

  <div class="stat-item">queries </div>
  </div>


  </div>
   
  
  
  
  </div>


</div>

  <div>

    
    </div>
  </div>
`;

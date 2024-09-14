`<div class="col-md-6 col-lg-4 ftco-animate">
		    				<div class="project">
		    					<div class="img">
		    						<div class="vr"><span>Sale</span></div>
				    				<a href="hotel-single.html"><img src="images/hotel-1.jpg" class="img-fluid" alt="Colorlib Template"></a>
			    				</div>
			    				<div class="text">
			    					<h4 class="price"><span class="old-price mr-2">$500</span>$400</h4>
			    					<span>3 nights</span>
			    					<h3><a href="hotel-single.html">Luxury Hotel in Greece</a></h3>
			    					<div class="star d-flex clearfix">
			    						<div class="mr-auto float-left">
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
			    						</div>
			    						<div class="float-right">
			    							<span class="rate"><a href="#">(120)</a></span>
			    						</div>
			    					</div>
			    				</div>
			    				<a href="images/hotel-1.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
			    					<span class="icon-expand"></span>
			    				</a>
		    				</div>
		    			</div>
</div>`

let output =        `<div class="col-md-6 col-lg-4 ftco-animate">
	                        <div class="project">
		    					<div class="img">
				    				<a href="hotel-single.html"><img src="../images/hotel-2.jpg" class="img-fluid" alt="Colorlib Template"></a>
			    				</div>
			    				<div class="text">
			    					<h4 class="price">$400</h4>
			    					<span>3 nights</span>
			    					<h3><a href="hotel-single.html">Luxury Hotel in Greece</a></h3>
			    					<div class="star d-flex clearfix">
			    						<div class="mr-auto float-left">
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
				    						<span class="ion-ios-star"></span>
			    						</div>
			    						<div class="float-right">
			    							<span class="rate"><a href="#">(120)</a></span>
			    						</div>
			    					</div>
			    				</div>
			    				<a href="images/hotel-2.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
			    					<span class="icon-expand"></span>
			    				</a>
	                        </div>
                    </div>`

let output2 = ``;
displayHotels = document.getElementById('displayHotels');
displayHotels.innerHTML = output;

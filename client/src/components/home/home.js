import React, { Component } from 'react';
import './home.css';
import HttpServiceClass from '..//..//services/http-services';
import {Link} from 'react-router-dom';

let HttpService = new HttpServiceClass();

class Home extends Component {

	async componentWillMount() {
		const response = await fetch('https://api.ipify.org?format=json', {
			method: 'GET'
		});
		const responseJson = await response.json();
		const finalres = await HttpService.ifCart(responseJson.ip);
		console.log(finalres);
		if (finalres.length === 0) {
			var temp = { geoip: responseJson.ip };
			HttpService.newCart(temp);
		} else {
		}
	}


	render() {
		return (
			<div className="home">
				<div className="page-header header container-fluid" height="700px" name="top">
					<div className="overlay">
						<div className="row">
							<div className="col-3">
								
							</div>
							<div className="col-6" align="center">
			
								<h2 className="slogan"> Find fresh homemade food near you</h2>
								<div id="location-field" className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text location-icon">
											<svg
												width="1em"
												height="1em"
												viewBox="0 0 16 16"
												className="bi bi-geo-alt"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
												/>
											</svg>
										</span>
									</div>
									<input
										id="location-input"
										type="text"
										className="form-control"
										placeholder="Enter address"
										aria-label="Recipient's username"
										aria-describedby="basic-addon2"
									/>
									<div className="input-group-append">
									<Link to="/listings">
										<button id="location-btn" className="btn btn-outline-secondary" type="button">
											<svg
												width="1em"
												height="1em"
												viewBox="0 0 16 16"
												className="bi bi-caret-right-fill"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
											</svg>
										</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-3">
								
							</div>
						</div>
					</div>
				</div>


				<div id="carouselMissionIndicators" className="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators mission">
						
					</ol>

					<div class="carousel-inner">


						<div class="carousel-item active mission">
							<div className="row">

								<div className="col-6 mission-image-one" />

								<div className="col-6 carosuel-text mission" align="center">
									<h1>Did You Know?</h1>
									<p className="carosuel-desc">
									Last year, the American Journal of Agricultural Economics, found that the average U.S. household wasted almost one third of their food. {' '}
								</p>
								</div>

							</div>
						</div>

						<div class="carousel-item mission">
							<div className="row">

								<div className="col-6 mission-image-two" />

								<div className="col-6 carosuel-text" align="center">
									<h1>Our Mission</h1>
									<p className="carosuel-desc">
									Kichen, is a marketplace where people can sell or give away their homemade foods. It aims to reduce food-waste by households by allowing people to sell their excess meals to others.{' '}
									</p>
								</div>

							</div>
						</div>

					</div>


					<a class="carousel-control-next" href="#carouselMissionIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>

				</div>

				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="row">
								<div className="col-6 carosuel-text" align="center">
									<h1>Easy as Pie</h1>
									<p className="carosuel-desc">
										{' '}
										Place an order and in no time, you can be enjoying a hearty meal.{' '}
									</p>
								</div>

								<div className="col-6 carosuel-image one" />
							</div>
						</div>

						<div className="carousel-item">
							<div className="row">
								<div className="col-6 carosuel-text" align="center">
									<h1> Made with love</h1>
									<p className="carosuel-desc">
										Enjoy meals bursting with culture, each made with a special touch from the
										households of your neighbourhood.{' '}
									</p>
								</div>

								<div className="col-6 carosuel-image two" />
							</div>
						</div>
						<div className="carousel-item">
							<div className="row">
								<div className="col-6 carosuel-text" align="center">
									<h1> Community Driven</h1>
									<p className="carosuel-desc">
										Meals made by and for your community. Support and bond with your neighbours over
										some scrumptious food.{' '}
									</p>
								</div>
								<div className="col-6 carosuel-image three" />
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>


				<div className="block" align="center">
					<div className="row">
						<div className="col order-btn">
							<h2>Ready to order?</h2>

							<Link to="/#top">
							<button type="button" className="btn btn-primary btn-lg">
								GET STARTED
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="row footer-row">
						<div className="col-3" />
						<div className="col-3">
							<h2>About Us</h2>
							<h2>FAQ</h2>
						</div>
						<div className="col-3">
							<h2>
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-geo"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
									<path d="M7.5 4h1v9a.5.5 0 0 1-1 0V4z" />
									<path
										fillRule="evenodd"
										d="M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z"
									/>
								</svg>
								Toronto, Ontario
							</h2>
							<h2>
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-envelope-fill"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
									/>
								</svg>
								kichen@gmail.com
							</h2>
						</div>
						<div className="col">
							<i className="fa fa-facebook-square" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

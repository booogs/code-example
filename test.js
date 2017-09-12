import React from 'react';
import { Button, DropdownButton, MenuItem, Panel, Image, Table } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

class TeamDropdown extends React.Component {
	render () {
		return (
			<DropdownButton bsSize="medium" title="Sultans Of Swing">
				<MenuItem eventKey="2">Team 2</MenuItem>
				<MenuItem eventKey="3">Team 3</MenuItem>
				<MenuItem eventKey="4">Team 4</MenuItem>
			</DropdownButton>
		)
	}
}

class AccountDropdown extends React.Component {
	render () {
		return (
			<DropdownButton bsSize="medium" title="Welcome back, James">
				<MenuItem eventKey="2">Account Profile</MenuItem>
				<MenuItem eventKey="3">Settings</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey="4">Logout</MenuItem>
			</DropdownButton>
		)
	}
}

class Circle extends React.Component {
	render () {

		var circle = {
			padding: "15px",
			textAlign: "center",
			textAlignVertical: "center",
			border: "1px solid #999",
			borderRadius: "20px",
			width: "7px",
			height: "7px",
			color: "#999"
		}

		var circleActive = {
			color: "blue",
			border: "1px solid blue"
		}

		return (
			<div style={circle}>
				{this.props.rank}
			</div>
		)
	}
}

export default class Header extends React.Component {
	constructor(props) {
		super();
	}

	render() {

		var headerPadding = {
			padding: "20px 0 0 0"
		}

		var headerStyle = {
			width: "100%",
			padding: "5px 0 20px",
			background: "#fff"
		}

		var topMargin = {
			margin: "20px 0 0 0"
		}

		var buttonPadding = {
			padding: "10px 20px"
		}

		var bold = {
			fontWeight: "bold"
		}

		var alignRight = {
			textAlign: "right"
		}

		var noPaddingLeft = {
			padding: "0 15px 0 0"
		}

		var noPaddingRight = {
			padding: "0 0 0 15px"
		}

		return (
			<div>
				<header style={headerStyle}>
					<Grid>
						<Row style={headerPadding}>
							<Col lg={2} md={2} style={noPaddingLeft}><Image src="/images/logo.jpg" responsive /></Col>
							<Col lg={2} md={2}><TeamDropdown /></Col>
							<Col lg={6} md={6}></Col>
							<Col lg={2} md={2}><AccountDropdown /></Col>
						</Row>
					</Grid>
				</header>
				<section style={topMargin}>
					<Grid>
						<Row>
							<Panel>
								Another great season is coming to an end. Don't forget to get your team in for The Open and good luck!
							</Panel>

							<h1 style={bold}>Sultans of Swing</h1>
							<span>by Joe McFadden</span>
						</Row>
					</Grid>
				</section>
				<section style={topMargin}>
					<Grid>
						<Row>
							<Col lg={7} md={7} style={noPaddingLeft}>
								<p style={bold}>Next Event</p>
								<Panel>
									<Col lg={8} md={8}>
										<span style={bold}>Open Championship</span><br />
										July 24-27 &bull; Lineups lock Thu @ 7:30 am &bull; 14 teams entered
									</Col>
									<Col lg={4} md={4} style={alignRight}>
										<Button bsStyle="primary" style={buttonPadding}>ENTER YOUR TEAM</Button>
									</Col>
								</Panel>

								<p style={bold}>Last Event</p>
								<Panel>
									<Col lg={8} md={8}>
										<span style={bold}>U.S. Open</span><br />
										June 15-18 &bull; You finished in 4th place
									</Col>
									<Col lg={4} md={4} style={alignRight}>
										<Button bsStyle="primary" style={buttonPadding}>VIEW RESULTS</Button>
									</Col>

									<Col lg={12} md={12}>
										<Table responsive style={topMargin}>
											<thead>
												<tr>
													<th>RANK</th>
													<th>TEAM</th>
													<th>OWNER</th>
													<th>TO PAR</th>
													<th>POINTS</th>
												</tr>
												<tr>
													<th><Circle rank="1" /></th>
													<th>Grip It and Sip It</th>
													<th>Tyler Haldane</th>
													<th>18</th>
													<th>438 &#9660;</th>
												</tr>
												<tr>
													<th><Circle rank="2" /></th>
													<th>Back 9 Bandits</th>
													<th>Joe Medina</th>
													<th>20</th>
													<th>219 &#9660;</th>
												</tr>
												<tr>
													<th><Circle rank="3" /></th>
													<th>The Mulligans</th>
													<th>Thomas Gordon</th>
													<th>20</th>
													<th>106 &#9660;</th>
												</tr>
												<tr>
													<th><Circle rank="4" active="true" /></th>
													<th>Chicken Dinner</th>
													<th>Terry Turner</th>
													<th>23</th>
													<th>55 &#9660;</th>
												</tr>
											</thead>
										</Table>
									</Col>
								</Panel>
							</Col>

							<Col lg={5} md={5} style={noPaddingRight}>
								<p style={bold}>Cup Standings</p>
								<Table responsive>
									<thead>
										<tr>
											<th>OWNER</th>
											<th>TEAM NAME</th>
											<th>TO PAR</th>
										</tr>
										<tr>
											<th>Tyler Haldane</th>
											<th>Grip It and Sip It</th>
											<th>156</th>
										</tr>
										<tr>
											<th>Thomas Gordon</th>
											<th>Back 9 Bandits</th>
											<th>185</th>
										</tr>
										<tr>
											<th>Terry Turner</th>
											<th>The Mulligans</th>
											<th>194</th>
										</tr>
										<tr>
											<th>Raymond Campbell</th>
											<th>Chicken Dinner</th>
											<th>209</th>
										</tr>
										<tr>
											<th>Douglas Mason</th>
											<th>Put From The Rough</th>
											<th>213</th>
										</tr>
										<tr>
											<th>Jesse Black</th>
											<th>Happy Hackers</th>
											<th>228</th>
										</tr>
										<tr>
											<th>Bobby Burke</th>
											<th>Going Pro</th>
											<th>231</th>
										</tr>
										<tr>
											<th>David Parker</th>
											<th>The Caddies</th>
											<th>256</th>
										</tr>
										<tr>
											<th>Nicholas Kelley</th>
											<th>Where's The Beer Girl?</th>
											<th>259</th>
										</tr>
										<tr>
											<th>Dylan Wallace</th>
											<th>Stroke of Luck</th>
											<th>267</th>
										</tr>
									</thead>
								</Table>
							</Col>
						</Row>
					</Grid>
				</section>
			</div>
		)
	}
}

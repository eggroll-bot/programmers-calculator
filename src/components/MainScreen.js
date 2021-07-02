import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import Display from "./Display";
import SecondaryDisplay from "./SecondaryDisplay";
import { Grid } from "@material-ui/core";
import ButtonPad from "./ButtonPad";
import displayOperation from "../util/display-operation";

// TO-DO: For +/-, 1SC, and 2SC, if the display contains operators, make an error show up saying that the display cannot contain operators.

class MainScreen extends React.Component {
	constructor( ) {
		super( );
		this.state = { displayText: "0", setDisplayText: this.setDisplayText.bind( this ) };
	}

	setDisplayText( text ) {
		this.setState( { displayText: text } );
	}

	render( ) {
		return (
			<DisplayTextContext.Provider value={ this.state }>
				<Display />
				<SecondaryDisplay />

				<div style={ { padding: 15 } }>
					<Grid container justify="center" spacing={ 3 }>
						<Grid item>
							<ButtonPad
								fontSize="24px"
								height="275px"
								operations={ [
									{
										text: "SLL",
										onClick: displayOperation.appendOperation
									},
									{
										text: "SRL",
										onClick: displayOperation.appendOperation
									},
									{
										text: "SRA",
										onClick: displayOperation.appendOperation
									},
									{
										text: "+/-",
										onClick: ( ) => { }
									},
									{
										text: "ROL",
										onClick: displayOperation.appendOperation
									},
									{
										text: "ROR",
										onClick: displayOperation.appendOperation
									},
									{
										text: "NOT",
										onClick: displayOperation.appendOperation
									},
									{
										text: "AND",
										onClick: displayOperation.appendOperation
									},
									{
										text: "1SC",
										onClick: ( ) => { }
									},
									{
										text: "2SC",
										onClick: ( ) => { }
									},
									{
										text: "OR",
										onClick: displayOperation.appendOperation
									},
									{
										text: "XOR",
										onClick: displayOperation.appendOperation
									},
									{
										text: "(",
										onClick: displayOperation.appendParentheses
									},
									{
										text: ")",
										onClick: displayOperation.appendParentheses
									}
								] }
								width="300px"
								xs={ 3 } />
						</Grid>

						<Grid item>
							<ButtonPad
								fontSize="24px"
								height="275px"
								operations={ [
									{
										text: "POW",
										onClick: ( ) => { }
									},
									{
										text: "C",
										onClick: displayOperation.clear
									},
									{
										text: "⌫",
										onClick: displayOperation.backspace
									},
									{
										text: "7",
										onClick: ( ) => { }
									},
									{
										text: "8",
										onClick: ( ) => { }
									},
									{
										text: "9",
										onClick: ( ) => { }
									},
									{
										text: "4",
										onClick: ( ) => { }
									},
									{
										text: "5",
										onClick: ( ) => { }
									},
									{
										text: "6",
										onClick: ( ) => { }
									},
									{
										text: "1",
										onClick: ( ) => { }
									},
									{
										text: "2",
										onClick: ( ) => { }
									},
									{
										text: "3",
										onClick: ( ) => { }
									},
									{
										text: "0",
										onClick: ( ) => { }
									}
								] }
								width="250px"
								xs={ 4 } />
						</Grid>

						<Grid item>
							<ButtonPad
								fontSize="24px"
								height="275px"
								operations={ [
									{
										text: "/",
										onClick: ( ) => { }
									},
									{
										text: "*",
										onClick: ( ) => { }
									},
									{
										text: "-",
										onClick: ( ) => { }
									},
									{
										text: "+",
										onClick: ( ) => { }
									},
									{
										text: "=",
										onClick: ( ) => { }
									}
								] }
								width="75px"
								xs={ 12 } />
						</Grid>
					</Grid>
				</div>
			</DisplayTextContext.Provider>
		);
	}
}

export default MainScreen;

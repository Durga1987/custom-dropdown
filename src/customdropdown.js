import React from "react";
import faker from 'faker'
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './dropdown.css';

export function CustomDropdown(props) {
	const handleChange = (e) =>{
		console.log(e.target.innerText)
	}
	const handleAddition = (e) =>{
		console.log(e.target.innerText);
		props.countryOptions.push(
			{ key: e.target.innerText.slice(0,2), value: e.target.innerText.slice(0,2), flag: e.target.innerText.slice(0,2), text: e.target.innerText }
		)
		console.log(props.countryOptions);
	}
	return (
		<div>
			<Dropdown
				placeholder='Select Country'
				clearable multiple
				fluid
				search
				selection
				options={props.countryOptions}
				allowAdditions
				onAddItem={handleAddition}
				onChange={handleChange}

			/>
		</div>
	);
}

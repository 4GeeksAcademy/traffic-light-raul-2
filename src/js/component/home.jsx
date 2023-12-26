import React from "react";
import { useState } from "react";

const lights = [
	{ id: "1", lightOff: "red-light", lightOn: "red-light red-active" },
	{
		id: "2",
		lightOff: "yellow-light",
		lightOn: "yellow-light yellow-active",
	},
	{
		id: "3",
		lightOff: "green-light",
		lightOn: "green-light green-active",
	},
];

function Home() {
	const [selectedLight, setSelectedLight] = useState(null);

	function handleClick(id) {
		setSelectedLight(id !== selectedLight ? id : null);
	}

	return (
		<div className="container">
			{lights.map((light) => (
				<div
					key={light.id}
					onClick={() => {
						handleClick(light.id);
						console.log(light.id);
					}}
					className={
						light.id === selectedLight
							? light.lightOn
							: light.lightOff
					}></div>
			))}
		</div>
	);
}

export default Home;

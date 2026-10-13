import { useState } from "react";
import Controls from "./Controls";
import PlanCard from "./PlanCard";
import Summary from "./Summary";

function PlanPicker() {
	const [seats, setSeats] = useState(1);
	const [months, setMonths] = useState(1);

	function handleAddSeat() {
		setSeats((currentSeats) => currentSeats + 1);
	}

	function handleAddMonth() {
		setMonths((currentMonths) => currentMonths + 1);
	}

	function handleReset() {
		setSeats(1);
		setMonths(1);
	}

	return (
		<>
			<div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
				<Summary seats={seats} months={months} customer="James Bryan T. Zafra" />

				<Controls
					onAddSeat={handleAddSeat}
					onAddMonth={handleAddMonth}
					onReset={handleReset}
				/>
			</div>

			<main className="grid grid-cols-3 gap-8 px-20 pt-10">
				<PlanCard
					name="Starter"
					price={199}
					storage="10 GB storage"
					support="Email support"
					seats={seats}
					months={months}
				/>
				<PlanCard
					name="Team"
					price={499}
					storage="100 GB storage"
					support="Chat support"
					seats={seats}
					months={months}
				/>
				<PlanCard
					name="Business"
					price={999}
					storage="1000 GB storage"
					support="Phone support"
					seats={seats}
					months={months}
				/>
			</main>
		</>
	);
}

export default PlanPicker;

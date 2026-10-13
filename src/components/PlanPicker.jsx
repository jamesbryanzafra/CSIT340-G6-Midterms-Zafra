import { useState } from "react";

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
				<header>
					<h2 className="text-6xl font-bold">Build your plan</h2>
					<p className="mt-4 text-3xl text-[#CB2957]">
						Seats: {seats} | Months: {months}
					</p>
					<p className="mt-2 text-xl">Quote for James Bryan T. Zafra</p>
				</header>

				<div className="flex gap-4">
					<button
						className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
						onClick={handleAddSeat}
					>
						Add seat
					</button>
					<button
						className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
						onClick={handleAddMonth}
					>
						Add month
					</button>
					<button
						className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</div>

			<main className="grid grid-cols-3 gap-8 px-20 pt-10">
				<div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
					<div className="p-8">
						<h3 className="text-3xl font-bold">Starter</h3>
						<p className="mt-2 text-xl">PHP 199 per seat each month</p>
						<ul className="mt-6 text-xl">
							<li className="border-t border-[#DDDDDD] py-2">10 GB storage</li>
							<li className="border-t border-[#DDDDDD] py-2">Email support</li>
						</ul>
					</div>
					<p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
						Total: PHP {199 * seats * months}
					</p>
				</div>
				<div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
					<div className="p-8">
						<h3 className="text-3xl font-bold">Team</h3>
						<p className="mt-2 text-xl">PHP 499 per seat each month</p>
						<ul className="mt-6 text-xl">
							<li className="border-t border-[#DDDDDD] py-2">100 GB storage</li>
							<li className="border-t border-[#DDDDDD] py-2">Chat support</li>
						</ul>
					</div>
					<p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
						Total: PHP {499 * seats * months}
					</p>
				</div>
				<div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
					<div className="p-8">
						<h3 className="text-3xl font-bold">Business</h3>
						<p className="mt-2 text-xl">PHP 999 per seat each month</p>
						<ul className="mt-6 text-xl">
							<li className="border-t border-[#DDDDDD] py-2">1000 GB storage</li>
							<li className="border-t border-[#DDDDDD] py-2">Phone support</li>
						</ul>
					</div>
					<p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
						Total: PHP {999 * seats * months}
					</p>
				</div>
			</main>
		</>
	);
}

export default PlanPicker;

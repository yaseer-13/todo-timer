import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
const TodoFunction = ({
	todos,
	index,
	removingTodo,
	markDoneTodo,
	billableTodo,
	time,
}) => {
	const [editTableText, setEditTableText] = useState(todos.text);

	const removeTodoButton = () => {
		removingTodo(index);
	};

	const markDoneTodoButton = () => {
		markDoneTodo(index);
	};

	const billableTodoButton = () => {
		billableTodo(index);
	};

	const inputHandler = (e) => {
		setEditTableText(e.target.value);
	};
	return (
		<>
			<div className=' mx-10 p-4'>
				<div className='flex px-8 py-4 justify-between bg-[#1d3557] text-[#f1faee] items-center rounded-lg '>
					<input
						value={editTableText}
						onChange={inputHandler}
						className={`bg-[#1d3557] text-[#f1faee] ${
							todos.isCompleted ? ' text-green-500 line-through' : null
						}`}
					/>
					<div className='mx-3 gap-4  flex '>
						<Stopwatch index={index} />
						<button
							className={`   ${todos.isBillable ? ' text-blue-200 ' : null}`}
							onClick={billableTodoButton}>
							$
						</button>
						<button className=' ' onClick={markDoneTodoButton}>
							<i className='fa-solid fa-check'></i>
						</button>
						<button className=' ' onClick={removeTodoButton}>
							<i className='fa-solid fa-trash-can text-red-600 hover:text-red-400'></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoFunction;

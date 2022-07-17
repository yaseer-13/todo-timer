import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
const TodoFunction = ({
	todos,
	index,
	removingTodo,
	markDoneTodo,
	billableTodo,
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
			<div className=' mx-14 p-3'>
				<div className='flex justify-between bg-red-500 items-center '>
					<input
						value={editTableText}
						onChange={inputHandler}
						className={` pl-5 bg-red-500 ${
							todos.isCompleted ? ' text-slate-200 line-through' : null
						}`}
					/>
					<div className='mx-3  p-2 flex'>
						<Stopwatch />
						<button
							className={` pl-5 bg-red-500 mx-3 ${
								todos.isBillable ? ' text-blue-200 ' : null
							}`}
							onClick={billableTodoButton}>
							$
						</button>
						<button className='mr-3 ' onClick={markDoneTodoButton}>
							<i className='fa-solid fa-check'></i>
						</button>
						<button className=' self-end' onClick={removeTodoButton}>
							<i className='fa-solid fa-trash-can'></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoFunction;

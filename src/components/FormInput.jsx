import React, { useState } from 'react';
const FormInput = ({ addingTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (!inputValue) return;

		addingTodo(inputValue);
		setInputValue('');
	};

	const inputHandler = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<form onSubmit={formSubmitHandler}>
				<div className='flex justify-around items-center mx-14'>
					<input
						className=' form-control block
              w-2/3
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            '
						type='text'
						value={inputValue}
						onChange={inputHandler}
						placeholder='Add New Task'
					/>
					<div className='flex items-center gap-10 text-2xl'>
						<span className=' font-bold text-blue-500'>$</span>
						<h1 className='font-semibold'>00:00:00</h1>
					</div>
				</div>
			</form>
		</>
	);
};

export default FormInput;

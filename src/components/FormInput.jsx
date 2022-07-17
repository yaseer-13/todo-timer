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
				<div className='flex justify-around items-center mx-10'>
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
					<span className='inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
						$
					</span>
					<h1 className='font-bold'>00:00:00</h1>
				</div>
			</form>
		</>
	);
};

export default FormInput;

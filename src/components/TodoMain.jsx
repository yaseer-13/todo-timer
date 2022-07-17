import React, { useState } from 'react';
import TodoFunction from './TodoFunction';
import FormInput from './FormInput';

const TodoMain = () => {
	const [todos, setTodos] = useState([
		{
			text: 'This a sample task',
			isCompleted: false,
			isBillable: false,
		},
	]);

	const addingTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};
	const billableTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isBillable = true;
		setTodos(newTodos);
	};

	const markDoneTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removingTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<h1 className='text-3xl text-center font-bold my-4'>Task Manger</h1>
			<FormInput addingTodo={addingTodo} />
			{todos.map((todos, index) => (
				<span key={todos + index} className='text-2xl'>
					<TodoFunction
						index={index}
						todos={todos}
						markDoneTodo={markDoneTodo}
						billableTodo={billableTodo}
						removingTodo={removingTodo}
						setTodos={setTodos}
					/>
				</span>
			))}
		</>
	);
};

export default TodoMain;

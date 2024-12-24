import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

export function Navigation() { 
    const navigate = useNavigate();
    const { reset } = useForm();

    const handleCreateTask = () => {
        reset(); // Clear the form fields
        navigate('/task-create'); // Navigate to the create task page
    };

    return (
        <div className='flex flex-col items-center py-3'>
            <h1 
            className='text-3xl font-bold'
            > Navigation menu
            </h1>

                <h1
                className='text-2xl font-bold
                text-indigo-600
                hover:text-indigo-700
                '>
                <Link to='/tasks'>  Task App </Link>
                </h1>

                <button
                className='bg-indigo-500 hover:bg-indigo-600
                text-white font-bold py-2 px-4
                rounded-lg
                hover:shadow-lg'
                onClick={handleCreateTask}
                >
                    Create Task
                </button>
                
        </div>
    );
}
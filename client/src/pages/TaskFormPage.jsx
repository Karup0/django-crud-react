import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export function TaskFormPage() {
  const {register, handleSubmit, formState: {errors}, setValue
  } = useForm(); 

  const navigate = useNavigate()

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        const taskTitle = data.tittle;
        await updateTask(params.id, data);
        console.log("Updating task " +  taskTitle  + " with id:", params.id);
        toast.success('Task updated successfully');
      }
      else
      {
        console.log("Creating task with data:", data);
        // Create a new task
        await createTask(data);
        toast.success('Task created successfully');
      }
      
      // Redirect to the tasks page
      navigate('/tasks');
    } catch (error) {
      console.error("Error operating task:", error.response.data);
    }
  });

  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        try {
          const response = await getTask(params.id);
          const task = response.data;
          setValue("tittle", task.tittle);
          setValue("description", task.description);
          console.log("Task loaded:", task);

        } catch (error) {
          console.error("Error loading task:", error.response.data);
        }
      }  
    }
    loadTask();
  }, []);

  return (
      <div
      className='max-w-2xl mx-auto p-4
      bg-neutral-950 text-neutral-200
      rounded-lg shadow-lg'>
       <form onSubmit={onSubmit}>
          
          <input type="text"  placeholder="title"
          {...register('tittle', {required: true})}
          className='w-full p-2 rounded-lg my-2
          bg-neutral-950 text-neutral-200
          border border-neutral-700
          hover:border-neutral-500
          focus:border-neutral-500
          focus:outline-none
          focus:bg-neutral-900
          focus:text-neutral-100'
          />
          {errors.tittle && (
            <p className='text-red-500'>Title is required</p>
          )}
          
          <textarea  rows="3" placeholder="describe the task"
          {...register('description', {required: true})}
          className='w-full p-2 rounded-lg my-2
          bg-neutral-950 text-neutral-200
          border border-neutral-700
          hover:border-neutral-500
          focus:border-neutral-500
          focus:outline-none
          focus:bg-neutral-900
          focus:text-neutral-100'
          >
          </textarea>
          {errors.description && (
            <p className='text-red-500'>Description is required</p>
          )}
          <button
          className='bg-green-700 hover:bg-green-800
          text-white font-bold py-2 px-4
          rounded-lg
          hover:shadow-lg
          focus:outline-none
          focus:shadow-outline'>
          Save
          </button>        
       </form>

      {params.id && (
      <button 
      onClick={async () => {
       const accepted = window.confirm('Are you sure you want to delete this task?');
       if (accepted) {
           await deleteTask(params.id);
           toast.success('Task deleted successfully');
           navigate('/tasks');
        }
      }}
      className='bg-red-700 hover:bg-red-800
      text-white font-bold py-2 px-4
      rounded-lg
      hover:shadow-lg
      focus:outline-none
      focus:shadow-outline
      mt-2'
      > Delete
      </button>
      )}  

    </div>
  )
}
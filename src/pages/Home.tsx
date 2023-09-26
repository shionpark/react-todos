import React from 'react';
import { useForm } from 'react-hook-form';

function Home() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <h1>ToDos</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input {...register('email')} placeholder="Email" />
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('username')} placeholder="Username" />
        <input {...register('password')} placeholder="Password" />
        <input {...register('password1')} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Home;

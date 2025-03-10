import type { Route } from './+types/home'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Explore ountris' },
    {
      name: 'description',
      content: 'Welcome exploring cuntris all over the world!'
    }
  ]
}

export default function Home () {
  return (
    <div>
      <div
        className='relative flex justify-center items-center bg-cover bg-center w-full h-[500px] text-white'
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?world,map,travel')"
        }}
      >
        <div className='absolute inset-0 bg-gray-300 bg-opacity-50'></div>

        <div className='z-10 p-5 text-center'>
          <h1 className='drop-shadow-lg font-bold text-4xl md:text-6xl'>
            Explore the World
          </h1>
          <p className='drop-shadow-md mt-3 text-lg md:text-xl'>
            Discover fascinating cultures, landmarks, and hidden gems.
          </p>

          <div className='flex md:flex-row flex-col justify-center items-center gap-3 mt-5'>
            <input
              type='text'
              placeholder='Search for a country...'
              className='input-bordered w-full md:w-80 text-black input'
            />
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom';
import HeroImg from '../../assets/Hero-Photo.png'
const Hero = () => {
  return <section className='relative'>
    <img src={HeroImg} alt="Tashil" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'/>
    <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
      <div className='text-center text-white p-2'>
        <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-6'>
            Vocation <br /> Ready
        </h1>
        <p className='text-lg tracking-tighter md:text-xl mb-10'>With Tashil, make your style unique</p>
<Link to='#' className='bg-white text-gray-800 px-6 py-2 rounded-md text-lg hover:bg-yellow-600'>Shop Now</Link>
      </div>
    </div>
  </section>;
};

export default Hero;

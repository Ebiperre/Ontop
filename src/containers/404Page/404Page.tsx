import { useNavigate } from 'react-router-dom';
import errorImage1 from '../../../src/assets/images/404-1.svg'
import errorImage2 from '../../../src/assets/images/404-2.png'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className='h-full min-h-screen flex items-center justify-center mx-auto'>
      <div className="p-4 py-8 lg:p-20 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you've found the
                  doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button onClick={() => { navigate('/dashboard/home') }} className="sm:w-full lg:w-auto my-2 border rounded-lg py-4 px-8 text-center bg-orange text-white hover:bg-orange3 focus:outline-none focus:ring-2 focus:ring-orange3 focus:ring-opacity-50">Take me there!</button>
              </div>
            </div>
            <div>
              <img src={errorImage2} />
            </div>
          </div>
        </div>
        <div>
          <img src={errorImage1} />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

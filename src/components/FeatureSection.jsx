import { features } from '../constants';
import FeatureCard from './FeatureCard';

function FeatureSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-1xl mt-6 text-orange-600 lg:mt-20">
        <h1>FEATURE</h1>
      </div>
      <div className="mt-20 text-center text-5xl">
        <h1>
          Easy build{' '}
          <span className="bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            {' '}
            your code
          </span>
        </h1>
      </div>
      <div className="mt-6 flex flex-wrap justify-center lg:mt-10">
        {features.map((item) => (
          <div key={item.id} className="w-full  md:w-1/2 lg:w-1/3">
            <FeatureCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;

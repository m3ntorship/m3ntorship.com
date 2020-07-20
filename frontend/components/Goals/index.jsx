import React from 'react';
import image from './images/Squiggles Monochromatic.png';
import ContentLoader from 'react-content-loader';
import './style.css';

const Goals = ({ data, loading, error }) => {
  if (error) {
    return (
      <div className="text-center my-16 text-lg text-c000 py-10 bg-red-600">
        Sorry An Error occurd
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mx-auto w-full">
        {' '}
        <GoalsLoader className="mx-auto text-center" />{' '}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="text-center my-10 text-lg container">
        <div className="absolute graph">
          <img src={image} />
        </div>
        <h2 className="my-2 uppercase font-bold text-c100 mb-5 title">
          {data.title}
        </h2>
        <div className="mt-16">
          {data.goals.map(goal => {
            return <p className="uppercase mb-12 font-normal">{goal}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

// Loader
const GoalsLoader = props => (
  <ContentLoader
    speed={2}
    width={1000}
    height={300}
    viewBox="0 0 1000 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="450" y="33" rx="0" ry="0" width="101" height="30" />
    <rect x="100" y="100" rx="0" ry="0" width="800" height="30" />
    <rect x="100" y="200" rx="0" ry="0" width="800" height="30" />
  </ContentLoader>
);

export default Goals;

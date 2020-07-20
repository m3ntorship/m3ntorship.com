import React from 'react';
import image from './images/Squiggles Monochromatic.png';
import ContentLoader from 'react-content-loader';
import './style.css';

const Goals = ({ data, loading, error }) => {
  // const data = useState(null)
  // const loading = useState(false)
  // const error = useState(false)

  if (error) {
    return <div>Sorry An Error Accourd</div>;
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
          {data.header}
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
    width={500}
    height={160}
    viewBox="0 0 500 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="200" y="33" rx="0" ry="0" width="101" height="23" />
    <rect x="10" y="85" rx="0" ry="0" width="472" height="21" />
    <rect x="10" y="138" rx="0" ry="0" width="474" height="21" />
  </ContentLoader>
);

export default Goals;

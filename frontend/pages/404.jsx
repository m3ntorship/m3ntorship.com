import BackToHomeWithTitleAndImage from '../components/BackToHomeWithTitleAndImage';
import { mentorshipAPI } from '../clients/mentorship';

export default function Custom404({ data }) {
  return (
    <div className="container mb-24 mt-12 lg:px-64">
      <BackToHomeWithTitleAndImage data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await mentorshipAPI('/404-page');
  return {
    props: {
      data
    }
  };
}

import Patches from '../components/Patches';
import { mentorshipAPI } from '../clients/mentorship';
const Home = ({ batchesData, btachesHeaderData }) => {
  return (
    <div>
      <Patches data={batchesData} btachesHeaderData={btachesHeaderData} />
    </div>
  );
};

export async function getServerSideProps() {
  const allBatchesData = mentorshipAPI('/batches').then(({ data }) => {
    data.map(
      ({
        BatchInfo,
        link,
        mentee: { id: menteesId },
        mentor: { id: mentorsId }
      }) => {
        return Promise.all([
          mentorshipAPI(`/mentors?id=${mentorsId}`),
          mentorshipAPI(`/mentees?id=${menteesId}`)
        ]).then(
          ([
            {
              data: [mentorsData]
            },
            {
              data: [menteesData]
            }
          ]) => {
            let { BatchMentors } = mentorsData;
            let { batch_mentees } = menteesData;
            return {
              BatchInfo,
              link,
              BatchMentors,
              batch_mentees
            };
          }
        );
      }
    );
  });
  const layoutEndPointsArr = [
    mentorshipAPI('/batches'),
    mentorshipAPI('/patches')
  ];

  return Promise.all(
    layoutEndPointsArr.map(endPoint => {
      return endPoint
        .then(res => {
          if (Object.keys(res.data).length) {
            return res;
          } else {
            return {
              data: {
                statusCode: 404
              }
            };
          }
        })
        .catch(err => ({
          data: {
            statusCode: 404
          }
        }));
    })
  ).then(([{ data: batchesData }, { data: btachesHeaderData }]) => {
    return {
      props: {
        batchesData,
        btachesHeaderData
      }
    };
  });
}

export default Home;

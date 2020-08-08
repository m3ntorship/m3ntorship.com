import React from 'react';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';
import Goals from '../components/Goals';
import HowItWork from '../components/how-it-work';
import Patches from '../components/Patches'
import {mentorshipAPI} from '../clients'

export const Home = ({data}) => {
  console.log(data)
    if(data) {
      const {home_header,
        goals,
        steps,
        patches,
        contribute} = data
        return (
            <>
            <SectionHeaderComponent data={home_header} />
            <Goals data={goals} />
            <HowItWork data={steps} />
            <Patches data={patches} />
            <ContributeSection data={contribute} />
            </>
        )
    } else {
      return <h1>Loading....</h1>
    }
}

// side components
const SectionHeaderComponent = ({data}) => {
    return (
        <SectionHeader data={data}> 
            <Button textColor='black' bgColor='green' btnPadding='small' textSize='medium' customClassName='uppercase' > Apply As A Member </Button>
            <Button textColor='white' bgColor='blue' btnPadding='small' textSize='medium' customClassName='uppercase mt-2 md:ml-2 md:mt-0'> Apply As A Mentor </Button>
        </SectionHeader>
    )
}

const ContributeSection = ({data}) => {
    return (
        <SectionHeader data={data} gradient_color='blue' headingtype='section'>
            <Button textColor='white' bgColor='blue' btnPadding='small' textSize='medium' customClassName='uppercase'> Apply As a Mentor </Button>
        </SectionHeader>
    )
}


// const test = async function() {
//   const endPoints = [
//     mentorshipAPI('/home-header'),
//     mentorshipAPI('/goals'),
//     // mentorshipAPI('/steps'),
//     // mentorshipAPI('/patches'),
//     // mentorshipAPI('/contribute')
//   ];

// Promise.all(endPoints).then(([
//       {data: homePgaeData},
//       {data: goalsData},
// ]) => {
//   return {
//     props: {
//       data: {
//         homePgaeData,
//         goalsData
//       }
//     }
//   }
// }).then ((ret) => {console.log(ret)} )
// }

// test()


export async function getStaticProps() {
  const endPoints = [
        mentorshipAPI('/home-header'),
        mentorshipAPI('/goals'),
        mentorshipAPI('/steps'),
        mentorshipAPI('/patches'),
        mentorshipAPI('/contribute')
      ];
    Promise.all(endPoints).then(([
      {data: home_header},
      {data: goals},
      {data: steps},
      {data: patches},
      {data: contribute},
    ]) => {
      return home_header
      // return {
      //   props : {
      //       data: {
      //         home_header,
      //         goals,
      //         steps,
      //         patches,
      //         contribute
      //       }
      //   }
      // }
    })
}

// export async function getStaticProps(context) {
//   const endPoints = [
//     mentorshipAPI('/home-header'),
//     mentorshipAPI('/goals'),
//     mentorshipAPI('/steps'),
//     mentorshipAPI('/patches'),
//     mentorshipAPI('/contribute')
//   ];
//   return Promise.all(
//     endPoints.map(ep =>
//         ep
//           .then(res => {
//             if (Object.keys(res.data).length) {
//               console.log(res)
//               return res;
//             } else {
//               return {
//                 data: {
//                   statusCode: 404
//                 }
//               };
//             }
//           })
//           .catch(err => {
//             data: {
//               message: err.message;
//             }
//           })
//       )
//       .then(
//         ([
//           { data: home_header },
//           { data: goals },
//           { data: steps },
//           { data: patches },
//           { data: contribute }
//         ]) => {
//           return {
//             props: {
//               data: {
//                 home_header,
//                 goals,
//                 steps,
//                 patches,
//                 contribute
//               }
//             },
//             unstable_revalidate: 1
//           };
//         }
//       )
//   );
// }

export default Home;



// export async function getStaticProps(context) {
//   const endPoints = [
//     mentorshipAPI('/top-bar'),
//     mentorshipAPI('/apply-page-intro-section'),
//     mentorshipAPI('/apply-page-form'),
//     mentorshipAPI('/footer')
//   ];
//   return Promise.all(
//     endPoints.map(ep =>
//       ep
//         .then(res => {
//           if (Object.keys(res.data).length) {
//             console.log(res);
//             return res;
//           } else {
//             return {
//               data: {
//                 statusCode: 404
//               }
//             };
//           }
//         })
//         .catch(err => {
//           data: {
//             message: err.message;
//           }
//         })
//     )
//   ).then(
//     ([
//       { data: topBarData },
//       { data: headerSectionData },
//       { data: formData },
//       { data: footerData }
//     ]) => {
//       return {
//         props: {
//           data: {
//             topBarData,
//             headerSectionData,
//             formData,
//             footerData
//           }
//         },
//         revalidate: 1
//       };
//     }
//   );
// }
import React from 'react';
import { TopBar } from '../components/TopBar';
import SectionHeader from './../components/shared/SectionHeader';
import { ListOfRoundedImages } from './../components/ListOfRoundedImages';
import Button from './../components/shared/Button';
import { Team } from '../components/Team';
import JoinUs from '../components/JoinUsComponent';
import Footer from '../components/footer';
export default {
  title: 'Patch page',
  component: PatchPageComponent
};
const topBarData = {
  logo_title: 'M3ntorship',
  sub_title: 'lever up your tech skills',
  link: {
    link_url: '/apply',
    link_text: 'Apply Now'
  }
};
const footerData = {
  links: [
    { text: 'Github', url: 'github.com', underline: false },
    { text: 'Facebook', url: 'github.com', underline: false },
    { text: 'Twitter', url: 'github.com', underline: false },
    { text: 'infot@m3notorship.com', url: 'github.com', underline: true }
  ],
  about: {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculisLorem ipsum dolor sit amet, consectetur adipiscing elit. Molestiealiquam iaculis',
    url: '#'
  },
  copyrights: 'M3ntorship © 2019-2020.'
};
const sectionHeaderData = {
  heading: 'One more step  to ',
  headingGradientText: 'Join Us.',
  description:
    'A10-weeks program that helps new developers gain real world experience by building real projects in a collaborative remote environment.',
  image:
    'https://s3-alpha-sig.figma.com/img/c276/0ada/30e5f4ecc27eb8df318751c75c42c98c?Expires=1597017600&Signature=fFh0MYvoweW5r4HGxqR1HKKtgjR39uyn6hT0IsnXsMiVpva-DreihqEERiAZWnCvntyCtNO4dIHKGi8pI4J8QdWrRgM4jXgCGOEIGezTxXEKjcX0Ys-ONZ2lJP6M5crh64w1X5d~M~MzoQjMNe-70a3zkNLobjGYuK4b4EIfFFWwwv09hNLQzqOsAryBIO-sF7kCdDakrOOxNJUPlSowwJYrstxz9LX3xUzyif32uP~3BuWhKuqfr0eZOaoKJhcfXxhNLHR6adI41vAUIA53c-4ZBTV9xbsm2l9WI5cNsMNlpOJ5gp7KZf~JknROKme3Z3527zxqmCm-pDBSpU6ZjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
};
const team_images = [
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  },
  {
    image: {
      url: 'https://via.placeholder.com/150'
    }
  }
];
const teamData = {
  side_image: {
    url:
      'https://res.cloudinary.com/malngaawy/image/upload/v1595261682/Squiggles_Monochromatic_jwvct9.png'
  },
  title: 'Team',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
  team_members: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Yara',
      subtitle: 'Front End Developer',
      description: 'A job listings and job application app for working abroad.'
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Yara',
      subtitle: 'Front End Developer',
      description: 'A job listings and job application app for working abroad.'
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      title: 'Yara',
      subtitle: 'Front End Developer',
      description: 'A job listings and job application app for working abroad.'
    }
  ]
};
const joinNextPatchData = {
  title: 'Join Next Patch',
  description: 'A job listings and job application app for working abroad.',
  mentorBtn: 'Apply as Mentor',
  memberBtn: 'Apply as Member',
  left_img:
    'https://s3-alpha-sig.figma.com/img/6ab3/7f82/5cedbb0153583a74429f439e480c8d2a?Expires=1596412800&Signature=OQHfF1fV7IspMfGtbXN6n0d6xjZJ~NSW8SJMsApIvve2nwawX9~2GVO3PkuSmrSFKJyoO958QrJlHKNdPl9wEnydQ2RNtu8IyRtsQNQ0hNesuLMUUF8m7KK42mIorUMMpSsCLU7GEK671lhAl1R4Iliyk~GBmMb197JXNCK4nspcieahLV5xnI-285IpU5mFx2JiOOjqKlcDkVKCGqOAvO0KAN80tywMwcEOisB5E7RqzZ0MQiAAi1gX1lXq~MfBLjaq1KpvKS~2XlxDTyuTgTmEIkwYZloeBIhVwgGULGVyzYfQy5IUzH5YFJ9-Nd-GIN5FWtlfsYBKnhz0eq6k0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  right_img:
    'https://s3-alpha-sig.figma.com/img/a1ba/aaf1/75daa654aef922b1f1ea60ae6d402855?Expires=1596412800&Signature=hlXZ9MIzIg0wynLj~xmoD4wSnquIIxJDhcfsVLG97RJXZpCSb1TAMi5bgkAG3JcVbylbkNcCHySe13XwVJCqsWMmIIlM8IynoanL3JBhujTtwOCefuiKpCk4I2fE57HgWSVDFatu0WWmarXwSPgjf6-VQiz5YFIF3oGylX1bSeY7bmZjcKP4dBCOgAwFRSjD2zjlzfyjM~N0H6nNfhiLUq-poUB~bbCgX9VUoTwDs446iB6Geq8kfohohOCvm-1hF~NSh2EUf9ENKWAOHCs7oVg6VvsZT3Kf9LJA8schQXwWL2JaYAs-krwFonkbCNAzJHtz-KZI0BsjrXQeftGHsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
};
export const PatchPageComponent = () => {
  return (
    <>
        <TopBar data={topBarData} />
        <div className="container my-16 grid grid-cols-1 md:grid-cols-2 row-gap-10 mb-32">
          <SectionHeader data={sectionHeaderData}>
            <Button
              textColor="white"
              bgColor="black"
              externalLink={true}
              customClassName="my-6 md:mr-6"
            >
              <img
                src="static/media/github.b4a9bf26.png"
                className="inline mr-4 h-full"
              />
              Repository
            </Button>
            <Button
              textColor="black"
              bgColor="gray"
              fontWeight="normal"
              customClassName="py-6"
              externalLink={true}
            >
              <span className="uppercase underline">View Project</span>
            </Button>
          </SectionHeader>
          <div className="lg:px-24">
            <ListOfRoundedImages data={team_images} />
          </div>
        </div>
        <div className="mb-32">
          <Team data={teamData} />
        </div>
        <div className="mb-32">
          <JoinUs data={joinNextPatchData} />
        </div>
        <Footer data={footerData} />
    </>
  );
};

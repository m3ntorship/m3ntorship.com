import { ParallaxedHeader } from '../components/ParallaxedHeader';
import { ParagraphWithImageBeside } from '../components/ParagraphWithImageBeside';
import TeamGroupSection from '../components/TeamSection';
import { mentorshipAPI } from '../clients/mentorship';
import { TopBar } from '../components/TopBar';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import Head from 'next/head';

const About = ({ websiteUrl, metaData, data }) => {
  const {
    seo: {
      page_path,
      meta_description,
      page_title_tag,
      page_open_graph_image: { url: image_url }
    }
  } = metaData[0];
  const { website_url } = websiteUrl;
  if (data) {
    const { aboutData, teamGroupData, topBarData, footerData } = data;
    const { about_head, about_description } = aboutData;
    return (
      <>
        <Head>
          <meta name="description" content={meta_description} />
          <link rel="canonical" href={`${website_url}${page_path}`} />
          <meta property="og:title" content={page_title_tag} />
          <meta property="og:url" content={`${website_url}${page_path}`} />
          <meta property="og:image" content={image_url} />
          <meta property="og:description" content={meta_description} />
          <title>{page_title_tag}</title>
        </Head>

        <TopBar data={topBarData} bgColored={true} />

        <main>
          <ParallaxedHeader data={about_head} />
          <section className="container">
            <ParagraphWithImageBeside data={about_description} />
          </section>
          <TeamGroupSection data={teamGroupData} />
        </main>
        <Footer data={footerData} />
      </>
    );
  } else {
    return null;
  }
};

export async function getStaticProps() {
  const endPoints = [
    mentorshipAPI('/about-head'),
    mentorshipAPI('/organization-founders'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=about'),
    mentorshipAPI('/setting')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: aboutData },
      { data: teamGroupData },
      { data: topBarData },
      { data: footerData },
      { data: metaData },
      { data: websiteUrl }
    ]) => {
      return {
        props: {
          data: {
            aboutData,
            teamGroupData,
            topBarData,
            footerData
          },
          metaData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}

export default About;

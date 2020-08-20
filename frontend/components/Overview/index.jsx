import { ParagraphWithImageBeside } from '../ParagraphWithImageBeside';
import { Heading, GradientText, HEADING_OPTIONS } from '../shared/Heading';
import Button from '../shared/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Project_overview :{
//   title,summary,link,header_image,description
// }

const Overview = ({ data }) => {
  const [btnRef, btnInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  if (data) {
    const { title, summary, link, header_image, description } = data;
    const paragraphData = {
      title: summary,
      description,
      image: header_image
    };
    return (
      <section>
        <Heading
          type={HEADING_OPTIONS.TYPE.SECTION}
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
          textTransform={HEADING_OPTIONS.TEXT_TRANSFORM.UPPERCASE}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.CENTER}
          as="h2"
        >
          <motion.span
            ref={titleRef}
            className="inline-block"
            initial={{ y: -100, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'spring' }}
          >
            <GradientText text={title} />
          </motion.span>
        </Heading>
        <div className="mb-8">
          <ParagraphWithImageBeside data={paragraphData} />
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={btnInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: 'spring' }}
        >
          <div ref={btnRef}>
            <Button
              bgColor="gray"
              btnSize="largeTall"
              href={link.url}
              externalLink={true}
              customClassName="mx-auto"
            >
              {link.name}
            </Button>
          </div>{' '}
        </motion.div>
      </section>
    );
  } else {
    return null;
  }
};

export default Overview;

import React from 'react';
import TeamGroupSection from '../components/TeamSection';

export default {
  title: 'Team Section',
  component: TeamGroupSection
};

const data = {
  title: 'Team',
  userOne: 'Ahmed Mudhar',
  userTwo: 'Ahmed Ayoub',
  userTitle: 'Front-end Developer @Company',
  description: 'A job listings and job application app for working abroad.',
  userOneImg:
    'https://s3-alpha-sig.figma.com/img/8feb/2a40/4155b0e30a243f353f0e56409f5e07b0?Expires=1596412800&Signature=hg8Fiztn9jJhSXycSSaXyo~o25VyieMlJ~Tv8wMSSHcgLMDMZAUDeecFYS8bOMmRPLc4dzFFypclhp5aRdNZWae9CL2BiMwZZyo86uJlHV212aGA92ToIi-cSGxbqOvFyby2FOWcZnK43KUAKAMdWowOX0uBMpgod-WRTaXvuGp0shRyI-b1MUsBT4fEtsYLu9i5j4yJdU1eUshXgCek2MZIFNOaY0l-cx0inwIAn9KXJGJHafenFFJC0O1S1VjasujerrcbA-Pre8AKd1bfW6WciwbjgnFYuTuNJuvQ977ZfUvSnil1or4O6gqciudYNN9-rQYzaJdr~jaRy1Oaow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  userTwoImg:
    'https://s3-alpha-sig.figma.com/img/7068/57cb/31eb4f8a15d2a0a4ec6d2057c2edd9b7?Expires=1596412800&Signature=aQFzlV-UgYEKk6Bnk06n7SO1O~hebDfPZi2IAcUSbZljHQy0L2HZgTa-weS2jOU98urniKKMjRjLD0H6i~mPxx-E51lRF06FDdsZ9MPNwltzcK4hzIgGRX~Hz1xI9vtP1yhOcdoV2UXQWpvee6QuZa6l~M0PeXpvC9~Qxlzj7oqa0V7EBKnqObWo-~qJMlLZqZ2iDkfcK5OGISCXIuB7HtaK~BKclMXE2MrLsj55MlpuTT0CJSdR9xubp5ODMw23b178p1~b2YySNuJodvYUtB6Jd9IrD4~n9GjnTSOX0Dgk2p-SH8PwbF5JH5sgks7Rlzjca4Vo4R2eZd7wytnV0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
};

export const TeamSectionComponent = () => {
  return <TeamGroupSection data={data} />;
};

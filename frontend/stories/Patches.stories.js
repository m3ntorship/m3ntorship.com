import React from 'react';
import Patches from '../components/Patches'

export default { title: 'Patches', component: Patches }

const imagesData = [
    'https://s3.amazonaws.com/pixpa.com/com/articles/1525891879-683036-peter-sjo-201640-unsplashjpg.png',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
    'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg',
    'https://s3.amazonaws.com/pixpa.com/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.png',
    'https://the-pro-photographer.com/wp-content/uploads/2016/09/Portrait-photography-settings%E2%80%AC.jpeg',
    'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg',
    'https://4691df0fe49ad0936487-e0121cbc87e93da04e06616472138769.ssl.cf1.rackcdn.com/6-copy4.jpg'
]

const data = {
    title: 'Patches',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie aliquam iaculis facilisis sit pharetra pellentesque ullamcorper.',
    cards: [
        {
            cardDetails: {
                title: 'VOLUME 1',
                images: imagesData,
                description: 'A job listings and job application app for working abroad.',
                anchorText: 'View team'
            }
        },
        {
            cardDetails: {
                title: 'VOLUME 2',
                images: imagesData,
                description: 'A job listings and job application app for working abroad.',
                anchorText: 'View team'
            }
        },
        {
            cardDetails: {
                title: 'VOLUME 3',
                images: imagesData,
                description: 'A job listings and job application app for working abroad.',
                anchorText: 'View team'
            }
        }
    ],
    dashedCardDetails: {
        title: 'Join Next Patch',
        description: 'A job listings and job application app for working abroad.',
        anchorText: 'APPLY NOW'
    }
}

export const PatchesComponent = () => {
    return <Patches data={data} />
}
import React from 'react';
import Patches from '../components/Patches'

export default { title: 'Patches', component: Patches }

const imagesData = [
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg',
    'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg'
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
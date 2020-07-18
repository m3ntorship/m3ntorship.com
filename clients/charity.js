import { create } from 'axios';

export const charityAPI = lng => {
  if (lng === 'en') {
    return create({
      baseURL: process.env.url
    });
  } else {
    return create({
      baseURL: process.env.urlAr
    });
  }
};

import { create } from "axios";

export const mentorshipAPI = create({ baseURL: process.env.url });

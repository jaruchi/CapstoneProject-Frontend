import { JobType } from './job-type';

export interface Application {
  id: number;
  heading: string;
  jobType?: JobType;
  appDescription?: string;
}

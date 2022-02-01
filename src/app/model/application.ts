import { JobType } from './job-type';
import { User } from './user';

export interface Application {
  id: number;
  heading: string;
  jobType?: JobType;
  appDescription?: string;
  user?: User;
}

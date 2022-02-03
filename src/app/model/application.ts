import { JobType } from './job-type';
import { User } from './user';

export interface Application {
  id: number;
  heading: string;
  day?: string;
  subject?: string;
  level?: string;
  pets?: string;
  ageRange?: string;
  services?: string;
  appDescription?: string;
  jobType?: JobType;
  user?: User;
}

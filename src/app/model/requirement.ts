import { Application } from './application';
import { JobType } from './job-type';
import { User } from './user';

export interface Requirement {
  id: number;
  title: string;
  reqDescription?: any;
  day?: string;
  subject?: string;
  level?: string;
  pets?: string;
  ageRange?: string;
  services?: string;
  jobType?: JobType;
  user?: User;
}

export interface ReqAppCombination {
  id: number;
  application: Application;
  requirement: Requirement;
  accepted: boolean;
}

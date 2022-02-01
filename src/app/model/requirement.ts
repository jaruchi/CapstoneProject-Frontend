import { Application } from './application';
import { JobType } from './job-type';
import { User } from './user';

export interface Requirement {
  id: number;
  title: string;
  reqDescription?: any;
  createDate?: any;
  expiredDate?: any;
  modifiedDate?: any;
  jobType?: JobType;
  user?: User;
}

export interface ReqAppCombination {
  id: number;
  application: Application;
  requirement: Requirement;
  accepted: boolean;
}

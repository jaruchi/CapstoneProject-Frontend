import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobType } from '../model/job-type';
import { LoginService } from './login.service';

const HOST = 'http://localhost:9092/';
const jobTypeAPI = HOST + 'api/jobtypes';

const reqAPI = HOST + 'api/requirements/'; // add req id
const createReqAPI = HOST + 'api/requirements/jobtype/'; // add job typ id

const fulfulledReqAPI = HOST + 'api/requirements/fulfilled';
const openReqAPI = HOST + 'api/requirements/opened';

const appAPI = HOST + 'api/applications/'; // add app id
const createAppAPI = HOST + 'api/applications/jobtype/'; // add job type id

const fulfulledAppAPI = HOST + 'api/applications/fulfilled';
const openAppAPI = HOST + 'api/applications/opened';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private loginSvc: LoginService) {}

  getJobTypes(): Observable<JobType[]> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };
    return this.http.get<JobType[]>(jobTypeAPI, options);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobType } from '../model/job-type';
import { Requirement } from '../model/requirement';
import { Application } from '../model/application';
import { LoginService } from './login.service';

const HOST = 'http://localhost:9092/';
const jobTypeAPI = HOST + 'api/jobtypes';

const reqAPI = HOST + 'api/requirements/'; // add req id
const createReqAPI = HOST + 'api/requirements/jobtype/'; // add job typ id

const fulfilledReqAPI = HOST + 'api/requirements/fulfilled';
const openReqAPI = HOST + 'api/requirements/opened';

const appAPI = HOST + 'api/applications/'; // add app id
const createAppAPI = HOST + 'api/applications/jobtype/'; // add job type id

const fulfilledAppAPI = HOST + 'api/applications/fulfilled';
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

  getOpenReqs(): Observable<Requirement[]> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };
    return this.http.get<Requirement[]>(openReqAPI, options);
  }

  getOpenApps(): Observable<Application[]> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };
    return this.http.get<Application[]>(openAppAPI, options);
  }

  createRequirement(
    jobType: number,
    req: Requirement
  ): Observable<Requirement> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${createReqAPI}${jobType}`;
    return this.http.post<Requirement>(API, req, options);
  }

  createApplication(
    jobType: number,
    app: Application
  ): Observable<Application> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${createAppAPI}${jobType}`;
    return this.http.post<Application>(API, app, options);
  }

  deleteRequirement(reqId: number): Observable<Requirement> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${reqAPI}${reqId}`;
    return this.http.delete<Requirement>(API, options);
  }

  deleteApplication(appId: number): Observable<Application> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${appAPI}${appId}`;
    return this.http.delete<Application>(API, options);
  }

  updateRequirement(req: Requirement): Observable<Requirement> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${reqAPI}${req.id}`;
    return this.http.put<Requirement>(API, req, options);
  }

  updateApplication(app: Application): Observable<Application> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${appAPI}${app.id}`;
    return this.http.put<Application>(API, app, options);
  }

  getRequirement(reqId: number): Observable<Requirement> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${reqAPI}${reqId}`;
    return this.http.get<Requirement>(API, options);
  }

  getApplication(appId: number): Observable<Application> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };

    const API = `${appAPI}${appId}`;
    return this.http.get<Application>(API, options);
  }

  getFulFilledReqs(): Observable<Requirement[]> {
    const token = this.loginSvc.token;
    const options = {
      headers: {
        Authorization: 'Bearer ' + token?.jwt,
      },
    };
    return this.http.get<Requirement[]>(fulfilledReqAPI, options);
  }
}

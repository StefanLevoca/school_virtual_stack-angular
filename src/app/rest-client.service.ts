import { Injectable } from '@angular/core';
import { Classroom } from './classroom';
import { Computer } from './computer';
import { Device } from './device';
import { Projector } from './projector';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestClientService {

    private urlClassroom = 'http://localhost:8080/classrooms';
    private urlComputer = 'http://localhost:8080/computers';
     private urlDevice = 'http://localhost:8080/devices';
     private urlPermission = 'http://localhost:8080/permissions';
    private urlProjector = 'http://localhost:8080/projectors';
     private urlUser = 'http://localhost:8080/users';

    constructor(private http: HttpClient) { }

    public getClassrooms(): Observable<Classroom[]> {
        return this.http.get<Classroom[]>(this.urlClassroom);
    }

    public addClassroom(classsroom: Classroom): Observable<boolean> {
        return this.http.post(this.urlClassroom, classsroom).pipe(map(_ => true));
    }

    public saveClassroom(classsroom: Classroom): Observable<boolean> {
        return this.http.put(this.urlClassroom, classsroom).pipe(map(_ => true));
    }

    public deleteClassroom(classsroom: Classroom): Observable<boolean> {
        return this.http.delete(this.urlClassroom + '/' + classsroom.id
             ).pipe(map(_ => true));
    }

    public getComputers(): Observable<Computer[]> {
        return this.http.get<Computer[]>(this.urlComputer);
    }

    public addComputer(computer: Computer): Observable<boolean> {
        return this.http.post(this.urlComputer, computer).pipe(map(_ => true));
    }

    public saveComputer(computer: Computer): Observable<boolean> {
        return this.http.put(this.urlComputer, computer).pipe(map(_ => true));
    }

    public deleteComputer(device: Device): Observable<boolean> {
        return this.http.delete(this.urlComputer + '/' + device.id).pipe(map(_ => true));
    }

    public getDevices(): Observable<Device[]> {
        return this.http.get<Device[]>(this.urlDevice);
    }

    public sendNewDevice(device: Device): Observable<Device> {
        return this.http.post<Device>(this.urlDevice, device);
     }

    public addDevice(device: Device): Observable<boolean> {
        return this.http.post(this.urlDevice, device).pipe(map(_ => true));
    }

    public saveDevice(device: Device): Observable<boolean> {
        return this.http.put(this.urlDevice, device).pipe(map(_ => true));
    }

    public deleteDevice(device: Device): Observable<boolean> {
        return this.http.delete(this.urlDevice + '/' + device.id).pipe(map(_ => true));
    }

    public getProjectors(): Observable<Projector[]> {
        return this.http.get<Projector[]>(this.urlProjector);
    }

    public addProjector(projector: Projector): Observable<boolean> {
        return this.http.post(this.urlProjector, projector).pipe(map(_ => true));
    }

    public saveProjector(projector: Projector): Observable<boolean> {
        return this.http.put(this.urlProjector, projector).pipe(map(_ => true));
    }

    public deleteProjector(device: Device): Observable<boolean> {
        return this.http.delete(this.urlProjector + '/' + device.id).pipe(map(_ => true));
    }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.urlUser);
    }

    public addUser(user: User): Observable<boolean> {
        return this.http.post(this.urlUser, user).pipe(map(_ => true));
    }

    public saveUser(user: User): Observable<boolean> {
        return this.http.put(this.urlUser, user).pipe(map(_ => true));
    }

    public deleteUser(user: User): Observable<boolean> {
        return this.http.delete(this.urlUser + '/' + user.id).pipe(map(_ => true));
    }
}

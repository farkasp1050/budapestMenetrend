import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, updateDoc, deleteDoc,
    orderBy, limit, query, where,
    startAfter} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteService{
    constructor(private firestore: Firestore) {}

    getRoutes(): Observable<any[]> {
        const routesCollection = collection(this.firestore, 'routes');
        return collectionData(routesCollection, { idField: 'id' });
    }

    async addRoute(route: any): Promise<void> {
        const routesCollection = collection(this.firestore, 'routes');
        await addDoc(routesCollection, route);
    }

    async updateRoute(routeId: string, updatedData: Partial<any>): Promise<void> {
        const routeRef = doc(this.firestore, 'routes', routeId);
        await updateDoc(routeRef, updatedData);
    }

    async deleteRoute(routeId: string): Promise<void> {
        const routeRef = doc(this.firestore, 'routes', routeId);
        await deleteDoc(routeRef);
    }

    limitListing(): Observable<any[]>{
        const routesCollection = collection(this.firestore, 'routes');
        const quer = query(routesCollection, limit(5));
        return collectionData(quer, { idField: 'id' });
    }

    nextPage(lastItem: any): Observable<any[]>{
        const routesCollection = collection(this.firestore, 'routes');
        const quer = query(routesCollection, orderBy('time', 'asc'), startAfter(lastItem), limit(5));
        return collectionData(quer, { idField: 'id' });
    }

    orderByName(): Observable<any[]> {
        const routesCollection = collection(this.firestore, 'routes');
        const quer = query(routesCollection, orderBy('name', 'asc'));
        return collectionData(quer, { idField: 'id' });
    }
}







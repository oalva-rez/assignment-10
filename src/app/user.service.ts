import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../app/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private angularFirestore: AngularFirestore) {}
  getUserDoc(id: any) {
    return this.angularFirestore
      .collection('user-collection')
      .doc(id)
      .valueChanges();
  }

  getUserList() {
    return this.angularFirestore
      .collection('user-collection')
      .snapshotChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('user-collection')
        .add(user)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  deleteUser(user: any) {
    return this.angularFirestore
      .collection('user-collection')
      .doc(user.id)
      .delete();
  }
  updateUser(user: User, id: any) {
    return this.angularFirestore.collection('user-collection').doc(id).update({
      name: user.name,
      email: user.email,
      contact: user.contact,
    });
  }
}

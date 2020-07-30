import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
  }
  onsumbit(f:NgForm){

    this.db.collection('user').add({
      firstname:f.value.firstname,
      lastname :f.value.lastname,
      language:f.value.lan
    }).then(re=>{
      console.log("Success");

    }).catch(error=>{
      console.log(error.message);

    })
  }

}

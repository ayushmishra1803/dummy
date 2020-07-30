import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpClient) {}
  form: FormGroup;
  user: any[] = [];
  data = {
    day: 'Tuesday',
    date: '2020-07-28',
  };
  header = new HttpHeaders();

  token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2MDE0NDI5LCJqdGkiOiJiZmM3MGVlNzU3ZGM0OGJiYjYzOWM1MzIyMDgxYzQ0ZSIsInV1aWQiOiIwNTljMThhMi02OWY3LTRlYTAtOTdiZS1kZDEwYTBmYmFiMjEifQ.5dN7vvkIkCrlJUOrFjjLTTAgEc1TLDntywCabbKCq0M';
  ngOnInit(): void {
    this.header.append('Authorization', '');
    this.http
      .post(
        'https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/guestlist/request',this.data

      )
      .subscribe(
        (re) => {
          console.log(re);
        },
        (err) => {
          console.log(err.message);
        }
      );
  }
  submit() {}
}

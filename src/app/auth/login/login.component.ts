import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import {IonContent,IonInput,IonButton,IonCard,IonCardHeader,IonCardTitle,IonItem, IonLabel,IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule,IonContent,IonInput,IonLabel,IonItem,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardContent
  ]
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

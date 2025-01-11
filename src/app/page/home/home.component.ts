import { Component } from '@angular/core';
import {WhyChooseUsComponent} from '../../component/home/why-choose-us/why-choose-us.component';
import {MyServicesComponent} from '../../component/home/my-services/my-services.component';
import {ContactZachComponent} from '../../component/home/contact-zach/contact-zach.component';
import {ZHeaderComponent} from '../../component/home/z-header/z-header.component';

@Component({
  selector: 'app-home',
  imports: [WhyChooseUsComponent, MyServicesComponent, ContactZachComponent, ZHeaderComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

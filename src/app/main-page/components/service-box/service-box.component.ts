import { Component, Input } from '@angular/core';
import { ServiceItem } from '@app/main-page/main-page.component';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.scss'],
})
export class ServiceBoxComponent {
  @Input() item: ServiceItem = { class: '' };
}

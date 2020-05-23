import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  
  @Input() deviceXs: boolean;
  services = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.services = this.getService();
  }

  getService() {
    return this.config.getConfig().services;
  }

}

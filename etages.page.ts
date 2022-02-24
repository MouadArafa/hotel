import { Component, OnInit } from '@angular/core';
import { Etage } from './etage.model';
import { EtagesService } from './etages.service';

@Component({
  selector: 'app-etages',
  templateUrl: './etages.page.html',
  styleUrls: ['./etages.page.scss'],
})
export class EtagesPage implements OnInit {
  etage: Etage[];
  constructor(private etageService: EtagesService ) { }

  ngOnInit() {
    this.etage = this.etageService.getAllEtages();
  }

}

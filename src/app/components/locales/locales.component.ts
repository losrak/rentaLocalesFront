import { Component, OnInit } from '@angular/core';
import { LocalesService } from 'src/app/services/locales.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styles: []
})
export class LocalesComponent implements OnInit {

  locales: any[];

  constructor( private localesService: LocalesService,
      private router: Router ) {
    localesService.getLocales()
      .subscribe( resp => {
        this.locales = resp;
      })
  }

  ngOnInit(): void {
  }

  rentar(id: number){
    this.router.navigate(['/rentar', id]);
  }

}

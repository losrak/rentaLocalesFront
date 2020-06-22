import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalesService } from 'src/app/services/locales.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rentar',
  templateUrl: './rentar.component.html',
  styles: []
})
export class RentarComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder, 
      private localesService: LocalesService,
      private activedRouter: ActivatedRoute,
      private router: Router) {
        this.activedRouter.params
          .subscribe( params => {
            this.crearFormulario(params['id']);
        });

        this.crearListeners();
  }

  ngOnInit(): void {
  }

  guardar(){
    // console.log(this.forma.value);

    if(this.forma.invalid){
      // barre todos los inputs para marcarlos como que han sido tocados
      Object.values(this.forma.controls).forEach(control => {
        //pregunta si control es una instancia de FormGroup para los objetos hijos
        // console.log(control)
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched() );
        }else{
          control.markAsTouched();
        }
      });

      Swal.fire({
        icon: 'error',
        text: 'Llenar los campos faltantes'
      })

      return;
    }

    
    this.localesService.rentarLocal(this.forma.value)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          text: 'Se rentó con éxito el local'
        }).then( resp =>{
          this.router.navigateByUrl('/locales');
        });
      })

    // this.forma.reset({
    //   compania: ''
    // });
  }

  crearFormulario(id_local){

    this.forma = this.formBuilder.group({
      compania: ['', Validators.required],
      descripcion: '',
      rfc: ['', Validators.required],
      inicio: ['', Validators.required],
      fin: ['', Validators.required],
      imagen: ['', [Validators.required, ]],
      id_local: [id_local, { disabled: true }]
    });

  }

  crearListeners(){
    this.forma.get('imagen').valueChanges.
      subscribe( valor =>{
        console.log(valor);
      });
  }

  get companiaInvalida(){
    return this.forma.get('compania').invalid && this.forma.get('compania').touched;
  }


  onFileChange(e){
    console.log('entró filechange')
    console.log(e);
  }

}

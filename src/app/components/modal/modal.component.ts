import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

 @Output() cerrar = new EventEmitter<boolean>();
 @Input() show: boolean;
 showalert:boolean=false;
 tarjetaForm: FormGroup;
 datos:Object;
  constructor(private formbuilder: FormBuilder,) {
    this.tarjetaForm = this.formbuilder.group({
      numeroTarjeta:['',Validators.required],
      cuenta:['',Validators.required],
      isuser:['',Validators.required],
      nombreTarjeta:['',Validators.required],
      marca:['',Validators.required],
      status:['',Validators.required],
      saldo:['',Validators.required],
      tipoCuenta:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  close(){
    this.cerrar.emit(false);
  }

  guardar(){
    this.datos = this.tarjetaForm.value;
    this.showalert=true;
    this.tarjetaForm.reset();
  }

  cerrarAlert(event){
    this.showalert= event;
    this.close();
  }
}

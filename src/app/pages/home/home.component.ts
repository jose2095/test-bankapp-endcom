import { Component, OnInit } from '@angular/core';
import { BankappService} from 'src/app/services/bankapp.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  saldos:any;
  cuenta:any;
  tarjetas:any;
  movimientos:any;
  show:boolean=false;
  constructor(private bankserv:BankappService) { }

  ngOnInit(): void {
    this.getSaldos();
    this.getUsuario();
    this.getTarjetas();
    this.getMovientos();
  }


  cerrarFormulario(event){
    this.show=event;
  }

  abrirFormulario(){
    this.show=true;
  }

  private getSaldos(){
    this.bankserv.getSaldos().subscribe(res=>{
      this.saldos = res.saldos[0];
    })
  }

  private getUsuario(){
    this.bankserv.getCuenta().subscribe(res=>{
      this.cuenta= res.cuenta[0];
    })
  }

  private getTarjetas(){
    this.bankserv.getTarjetas().subscribe(res=>{
      this.tarjetas = res.tarjetas;
    })
  }

  private getMovientos(){
    this.bankserv.getMovimientos().subscribe(res=>{
      this.movimientos = res.movimientos;
    })
  }
}

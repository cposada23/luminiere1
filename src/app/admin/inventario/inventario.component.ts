import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  scripts:string[] = [ 
              "/assets/datatables/datatables.net/js/jquery.dataTables.min.js",
              "/assets/datatables/datatables.net-bs/js/dataTables.bootstrap.min.js",
              "/assets/datatables/datatables.net-buttons/js/dataTables.buttons.min.js",
              "/assets/datatables/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",
              "/assets/datatables/datatables.net-buttons/js/buttons.flash.min.js",
              "/assets/datatables/datatables.net-buttons/js/buttons.html5.min.js",
              "/assets/datatables/datatables.net-buttons/js/buttons.print.min.js",
              "/assets/datatables/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
              "/assets/datatables/datatables.net-keytable/js/dataTables.keyTable.min.js",
              "/assets/datatables/datatables.net-responsive/js/dataTables.responsive.min.js",
              "/assets/datatables/datatables.net-responsive-bs/js/responsive.bootstrap.js",
              "/assets/datatables/datatables.net-scroller/js/datatables.scroller.min.js",
              "/assets/datatables/jszip/dist/jszip.min.js",
              "/assets/datatables/pdfmake/build/pdfmake.min.js",
              "/assets/datatables/pdfmake/build/vfs_fonts.js",
              "/assets/datatables/custom-tables.js"]
  constructor() {
    
    console.log("se crea inventario component");
    /*for(var i = 0; i< this.scripts.length; i++){
      var script = document.createElement('script');
      document.body.appendChild(script);
      script.src = this.scripts[i];
      console.log(this.scripts[i]);
    }*/
   }

  ngOnInit() {
    
  }

}

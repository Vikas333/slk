import { Component } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-example';

   columnDefs = [
        {headerName: 'Make', field: 'make',sortable: true,filter: true },
        {headerName: 'Model', field: 'model',sortable: true,filter: true },
        {headerName: 'Price', field: 'price',sortable: true,filter: true}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    modules = AllCommunityModules;sortable: true
}


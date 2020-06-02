import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';

export interface people {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: people[] = [
  {position: 1, name: 'Ana', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Martin', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Manuel', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Anabella', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Rodrigo', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Lucas', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nuria', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Omar', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Florencia', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'NeNahuel', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}



import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = 'Logo.svg';
  menuItems: any[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data: any[]) => {
      this.menuItems = data;
      console.log(this.menuItems)
    })
  }

}

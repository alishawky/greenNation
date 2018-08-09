import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from '../../_services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }
}

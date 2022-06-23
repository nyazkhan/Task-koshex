import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  list = [
    {
      name: 'Snapshot',
      icon: 'description',
      
    },
    {
      name: 'Life plan',
      icon: 'description',
      
    },
    {
      name: 'Investments',
      icon: 'description',
      
    },
    {
      name: 'Cashflow',
      icon: 'description',
      
    },
    {
      name: 'Goals',
      icon: 'description',
      
    },
    {
      name: 'Portfolio immunity',
      icon: 'description',
      
    },
    
    
  ];
  name: string;
  picUrl: string;
  constructor() { 

  }
  ngOnInit(): void {
  }

}

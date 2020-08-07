import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fin-dashboard',
  templateUrl: './fin-dashboard.component.html',
  styleUrls: ['./fin-dashboard.component.scss']
})
export class FinDashboardComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
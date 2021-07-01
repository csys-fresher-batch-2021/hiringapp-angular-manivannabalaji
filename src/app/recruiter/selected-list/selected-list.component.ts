import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../service/selection.service';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  selectedList: any;

  constructor(private selectionService : SelectionService) { }

  ngOnInit(): void {
    this.getAllSelectedList();
  }

  getAllSelectedList() {
    this.selectionService.getAllSelection().subscribe(res => {
      this.selectedList = res;
    }, err => {
      console.log(err);
    });
  }

}

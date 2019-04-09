import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
   
  public selectedId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.selectedId = id;
    })
  }

  departments = [
     {'id': 1, 'name': 'Angular'},
     {'id': 2, 'name': 'Node'},
     {'id': 3, 'name': 'MongoDB'},
     {'id': 4, 'name': 'Bootstrap'},
     {'id': 5, 'name': 'Java'},
  ]

  onSelect(department){
     //this.router.navigate(['/department', department.id]);
     this.router.navigate([department.id], {relativeTo : this.activatedRoute});
  }

  isSelected(department){
     return department.id === this.selectedId;
  }

}

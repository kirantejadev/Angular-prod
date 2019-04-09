import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //  let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //  this.departmentId = id;

    this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
       let id = parseInt(params.get('id'));
       this.departmentId = id;
    })
  }

  onPrevious(){
     let previousId = this.departmentId - 1;
     this.router.navigate(['/department', previousId]);
  }

  onNext(){
     let nextId = this.departmentId + 1;
     this.router.navigate(['/department', nextId]);
  }


  onDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/department', {id: selectedId, test: 'testValue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.activatedRoute});
  }

  departmentOverview(){
     this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }
  departmentContact(){
     this.router.navigate(['contact'], {relativeTo: this.activatedRoute});     
  }

}

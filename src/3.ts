
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-school-project',
  templateUrl: './school-project.component.html',
  styleUrls: ['./school-project.component.css']
})
export class SchoolProjectComponent implements OnInit {

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe((students: any[]) => {
      console.log(students);
    });
  }

}
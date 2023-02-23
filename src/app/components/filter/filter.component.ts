import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() titleChange: EventEmitter<any> = new EventEmitter();
  @Output() filterRest: EventEmitter<any> = new EventEmitter();
  @Input() filterForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }


  onReset() {
    this.filterRest.emit();
  }

  onSubmit() {
    this.titleChange.emit();
  }
}

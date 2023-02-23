import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clint-management',
  templateUrl: './clint-management.component.html',
  styleUrls: ['./clint-management.component.scss']
})
export class ClintManagementComponent implements OnInit {
  public showPassword: boolean = true;
  spinner = false;
  sent = false;
  pageSize!: any;
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Clint ID', key: 'client_id', isSortable: '', type: 'text', },
    { heading: "First Name", key: 'first_name', isSortable: 'sortable', type: 'link', link: 'client-details' },
    { heading: "Middle Name", key: 'middle_name', isSortable: '', type: 'text', },
    { heading: "Last Name", key: 'last_name', isSortable: '', type: 'text', },
    { heading: 'Email', key: 'email', isSortable: '', type: 'text', },
    { heading: 'Phone', key: 'phone', isSortable: '', type: 'text', },
    { heading: 'Case status', key: 'case_status', isSortable: '', type: 'text', },
    { heading: 'status', key: 'status', isSortable: '', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [1, 2, 3] },
  ]
  Table_DATA: any[] = [
    { 'client_id': 1, 'first_name': 'abce', 'middle_name': '1gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 5, 'first_name': 'fffs', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 6, 'first_name': 'fsfsf', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'uyut', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 8, 'first_name': 'uiuit', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 9, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },{ 'client_id': 2, 'first_name': 'abcd', 'middle_name': '3gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'abcd', 'middle_name': '5gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 5, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 5, 'first_name': 'fffs', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 6, 'first_name': 'fsfsf', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'uyut', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 8, 'first_name': 'uiuit', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 9, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abch', 'middle_name': '6gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 5, 'first_name': 'fffs', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 6, 'first_name': 'fsfsf', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 4, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 3, 'first_name': 'uyut', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 8, 'first_name': 'uiuit', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
    { 'client_id': 9, 'first_name': 'abc', 'middle_name': 'gfdsasdfg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'case_status': 110044, 'status': 'status', "action": ['visibility', 'archive', 'block'] },
  ]

  constructor(private _route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      searchTitle: [null],
      clientType: [null],
      pageSize: [null]
    });
  }
  toClintDetails() {
    console.log('clnt dtls');
    this._route.navigate(['client-management/client-details'])

  }
  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        return;
      }
      reader.readAsDataURL(file);
    }
  }
  onReset() {
    console.log('reset');
    this.filterForm.reset;
    this.dataSource.filter = '';
  }

  filterData() {
    this.pageSize = this.filterForm.controls?.pageSize.value;
    if (this.filterForm?.get('searchTitle')) {
      this.dataSource.filter = this.filterForm.controls?.searchTitle?.value?.trim()?.toLowerCase();
    } else {
      this.dataSource.filter = '';
    }
  }


}

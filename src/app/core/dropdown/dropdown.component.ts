import { DropdownService } from './../service/dropdown.service';
import { Details } from './../model/details';
import { Employee } from './../model/employee';
import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [DropdownService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() dropDownData: Details[];

  public dropDownList: string[];
  public selectedList: string[] = [];
  public isEmpty: boolean;
  public isOpened: boolean;
  public isChecked: boolean;
  @ViewChild('menu') menu: ElementRef;

  constructor(private ddService: DropdownService, private renderer: Renderer2) {
    this.ddService.selectedList.subscribe((val) => (this.selectedList = val));
    this.isEmpty = false;
    this.isOpened = false;
    this.isChecked = false;

    // this.renderer.listen('window', 'click', (e: Event) => {
    //   e.preventDefault;
    //   if (e.target !== this.menu.nativeElement) {
    //     console.log('mmm', e.target, this.menu.nativeElement);
    //     // this.isOpened = true;
    //   } else {
    //     console.log('mmm22');
    //     this.isOpened = false;
    //   }
    // });
  }

  ngOnChanges(changes): void {
    if (
      changes.dropDownData &&
      changes.dropDownData.currentValue !== undefined
    ) {
      // console.log('dropdown', changes.dropDownData.currentValue);
      // this.dropDownList = this.ddService.getItems(
      //   changes.dropDownData.currentValue
      // );
      const data = changes.dropDownData.currentValue;
      this.dropDownList = data;
      // console.log('ngOnChanges dropdown', this.dropDownList);
      if (this.dropDownList.length > 0) {
        this.isEmpty = true;
      }
    }
  }

  ngOnInit(): void {}

  toggleDropDown(): void {
    this.isOpened = !this.isOpened;
  }

  onSelect(index): void {
    // console.log('index ', index, this.dropDownList[index]);
    let selectedObj = this.dropDownList[index];
    // selectedObj.isSelected = true;
    this.ddService.addInSelectedItem(selectedObj);
  }

  onRemove(index): void {
    // console.log('index ', index);
    this.ddService.removeSelectedItem(index);
  }
}

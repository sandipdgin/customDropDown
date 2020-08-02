import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DropdownService {
  selectedListData: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  selectedList = this.selectedListData.asObservable();
  constructor() {}

  addInSelectedItem(data): void {
    const currentList = this.selectedListData.value;
    // console.log('addInSelectList', data, currentList);
    const found = currentList.some((el) => el._id === data._id);

    if (!found) {
      data.isSelected = true;
      const updatedList = [...currentList, data];
      this.selectedListData.next(updatedList);
    }
  }

  removeSelectedItem(index): void {
    const currentList = this.selectedListData.value;
    currentList[index].isSelected = false;

    currentList.splice(index, 1);
    // console.log('removeSelectedItem2', currentList);
    this.selectedListData.next(currentList);
  }
}

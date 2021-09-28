import { Component, OnInit} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drgndrp';
  sortingEnabled: boolean = false;
  btnval = "Edit charts";

  ngOnInit(){
    let savedItems = localStorage.getItem('selectedItems');
    let savedBlocks = localStorage.getItem('listOfBlocks');
    savedItems == null ? this.selectedItems : this.selectedItems = JSON.parse(savedItems)
    savedBlocks == null ? this.listOfBlocks : this.listOfBlocks = JSON.parse(savedBlocks)
  }

  listOfItems = [
    {
      id:1,
      name: 'blue'
    },
    {
      id:2,
      name: 'purple'
    },
    {
      id:3,
      name: 'chocolate'
    }
  ];

  selectedItems:any[]= [
    
  ];

    dropdownSettings : IDropdownSettings = {
      singleSelection: false,
      enableCheckAll : false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    onItemSelect(item:any) {
      let selectedId = item.id;
      let selectedBlock: any = this.listOfBlocks.find(item => item.id === selectedId);
      selectedBlock.isShown = true;
      localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
      localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
    }

    onItemDeSelect(item:any) {
      let selectedId = item.id;
      let selectedBlock: any = this.listOfBlocks.find(item => item.id === selectedId);
      selectedBlock.isShown = false;
      localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
      localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
    }
    
    onSelectAll(items: any) {
      console.log(items);
    }


  listOfBlocks = [
    {
      id: 1,
      className: 'blue',
      isShown: true
    },
    {
      id: 2,
      className: 'purple',
      isShown: true
    },
    {
      id: 3,
      className: 'chocolate',
      isShown: true
    }
  ];

  changeBlockState(item:any) {
    // let selectedId = item.id;
    // let selectedBlock: any = this.listOfBlocks.find(item => item.id === selectedId);
    // item.isChecked = !item.isChecked;
    // selectedBlock.isShown = item.isChecked;
    // localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
    // localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));
  }

  sorted(event: any) {
    this.listOfBlocks = event.currentOrder;
    localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
  }

  deleteItem(index:any, blockId: number){
      this.listOfBlocks[index].isShown = !this.listOfBlocks[index].isShown;
      localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));

      let indexOfSelectedItem = this.selectedItems.findIndex(item => item.id === blockId);
      console.log(indexOfSelectedItem);
      this.selectedItems.splice(indexOfSelectedItem, 1);
      this.selectedItems = this.selectedItems.slice();
      localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
    }

    

    toggleSorting(){
      this.sortingEnabled = !this.sortingEnabled
      if(this.btnval=="Edit charts"){
        this.btnval = "Edit mode"
      } else {
        this.btnval = "Edit charts"
      }
    }
}


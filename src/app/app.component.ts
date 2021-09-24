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

  ngOnInit(){
    let savedItems = localStorage.getItem('dropdownList');
    let savedBlocks = localStorage.getItem('listOfBlocks')
    savedItems == null ? this.dropdownList : this.dropdownList = JSON.parse(savedItems)
    savedBlocks == null ? this.listOfBlocks : this.listOfBlocks = JSON.parse(savedBlocks)
  }

  listOfItems = [
    {
      id:1,
      isChecked: true,
      name: 'blue'
    },
    {
      id:2,
      isChecked: true,
      name: 'show purple color'
    },
    {
      id:3,
      isChecked: true,
      name: 'show chocolate color'
    },
    
  ];

  dropdownList = [
    {
      id:1,
      isChecked: true,
      name: 'blue'
    },
    {
      id:2,
      isChecked: true,
      name: 'purple'
    },
    {
      id:3,
      isChecked: true,
      name: 'chocolate'
    },

  ];

    selectedItems :any = [
     
    ]
    
    dropdownSettings : IDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    onItemSelect(item: any) {
      console.log(this.selectedItems);
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
    let selectedId = item.id;
    let selectedBlock: any = this.listOfBlocks.find(item => item.id === selectedId);
    item.isChecked = !item.isChecked;
    selectedBlock.isShown = item.isChecked;
    localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
    localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));
  }

  sorted(event: any) {
    this.listOfBlocks = event.currentOrder;
    localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
  }

  deleteItem(index:any){
      this.listOfItems[index].isChecked = !this.listOfItems[index].isChecked
      this.listOfBlocks[index].isShown = !this.listOfBlocks[index].isShown
      localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));
      localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
    }

    btnval = "Edit charts"

    toggleSorting(){
      this.sortingEnabled = !this.sortingEnabled
      if(this.btnval=="Edit charts"){
        this.btnval = "Edit mode"
      } else {
        this.btnval = "Edit charts"
      }
    }
}


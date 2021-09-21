import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drgndrp';

  ngOnInit(){
    let savedItems = localStorage.getItem('listOfItems');
    let savedBlocks = localStorage.getItem('listOfBlocks')

    savedItems == null ? this.listOfItems = [] :this.listOfItems = JSON.parse(savedItems)
    savedBlocks == null ? this.listOfItems = [] :this.listOfBlocks = JSON.parse(savedBlocks)
  }

  listOfItems = [
    {
      id:1,
      isChecked: true,
      name: 'show blue color'
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

  changeBlockState(item: any) {
    let selectedId = item.id;
    let selectedBlock: any = this.listOfBlocks.find(item => item.id === selectedId);
    item.isChecked = !item.isChecked;
    selectedBlock.isShown = item.isChecked;
    
    localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));
    
  }

  sorted(event: any) {
    this.listOfBlocks = event.currentOrder;
    console.log(this.listOfBlocks)
    localStorage.setItem('listOfBlocks', JSON.stringify(this.listOfBlocks));
  }
}


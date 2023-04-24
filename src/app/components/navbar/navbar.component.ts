import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
  })

  export class navbarComponent implements OnInit {

    ngOnInit(): void {
        
    }

    selectList() {
			
			var list = document.getElementById("open");
			
			
			if (list.style.display === "none") {
				list.style.display = "block";
			} else {
				list.style.display = "none";
			}
		}
  }

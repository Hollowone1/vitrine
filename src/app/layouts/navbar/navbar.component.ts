import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
  })

  export class navbarComponent implements OnInit {

    ngOnInit(): void {
        
    }

    faArrowRight = faArrowRight
    selectList() {
			
			var list = document.getElementById("open");
			
			
			if (list.style.display === "none") {
				list.style.display = "block";
			} else {
				list.style.display = "none";
			}
		}
  }

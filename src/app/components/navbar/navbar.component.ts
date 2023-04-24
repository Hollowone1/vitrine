import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
  })

  export class navbarComponent implements OnInit {

    ngOnInit(): void {
        
    }

    selectList() {
			// Récupérer la liste et le bouton
			var list = document.getElementById("open");
			var button = document.getElementById("mainButton");
			
			// Vérifier si la liste est visible ou cachée
			if (list.style.display === "none") {
				// Afficher la liste
				list.style.display = "block";
				// Changer le texte du bouton
				button.innerHTML = "Cacher la liste";
			} else {
				// Cacher la liste
				list.style.display = "none";
				// Changer le texte du bouton
				button.innerHTML = "Afficher la liste";
			}
		}
  }

import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DialogService } from 'primeng/dynamicdialog'
import { ToolbarModule } from 'primeng/toolbar'
import { MenuModule } from "primeng/menu";
import { MenuItem } from 'primeng/api';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  location: string = "Anywhere"
  guests: string = "Add guests"
  dates: string = "Any week"

  toastService:ToastService = inject(ToastService)

  currentMenuItems: MenuItem[] | undefined = []


  ngOnInit(): void {
   this.currentMenuItems = this.fetchMenu()
   this.toastService.send({severity: "info", summary: "Welcome to Your airbnb app"})
  }

  fetchMenu() {
    return [
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in",
      },
    ]
  }

}

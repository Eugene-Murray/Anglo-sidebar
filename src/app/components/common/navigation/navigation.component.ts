import { Component } from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
  public Title: string = 'Master Data';
  public TitleIcon: string = 'fa-asterisk';
  public IconColor: string = '#e76e09';
  public showTopMenu: boolean = true;
  constructor(private router: Router) {}

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

  public onClick_ShowTopMenu(): void {
    this.showTopMenu = !this.showTopMenu;
  }

  public onClick_ChangeTitle(newTitle: string, newIcon: string, newColor: string): void {
    this.Title = newTitle;
    this.TitleIcon = newIcon;
    this.IconColor = newColor;
  }

}

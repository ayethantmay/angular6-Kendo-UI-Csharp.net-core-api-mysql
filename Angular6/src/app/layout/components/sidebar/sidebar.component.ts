import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    showMenu1: string = '';
    showMenu2: string = '';
    pushRightClass: string = 'push-right';

    constructor( public router: Router) {        

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addExpandClass1(element: any) {
        if (element === this.showMenu1) {
            this.showMenu1 = '0';
        } else {
            this.showMenu1 = element;
        }
    }

    addExpandClass2(element: any) {
        if (element === this.showMenu2) {
            this.showMenu2 = '0';
        } else {
            this.showMenu2 = element;
        }
    }


    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}

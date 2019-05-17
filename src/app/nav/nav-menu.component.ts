/**
 * Created by b16552 on 4/25/2019.
 */
import {Component} from '@angular/core'

@Component({
    selector: 'nav-menu',
    templateUrl: './nav-menu.template.html',
    styles:[`
        .nav.navbar-nav{ font-size:15px;}
        #searchForm {margin-right: 100px;}
        li > a.menu-active{ color: #f97924;}
        @media (max-width:1200px) {#searchForm{ display:none;}}
    `]
})

export class NavMenuComponent {


}
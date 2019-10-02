import { Component } from '@angular/core';

import { Platform, MenuController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    { title: 'Home', route: 'home', icon: 'home' },
    { title: 'Responder', route: 'answers', icon: 'paper' },
    { title: 'Cadastro', route: 'flashcards', icon: 'paper' },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menu.enable(true, 'flashcardsMenu');
      this.menu.open('flashcardsMenu');
    });
  }

  openPage(page: any) {
    this.router.navigate(['/', page.route])
  }

  isActive(page: any) {
    return 'primary';
  }

}

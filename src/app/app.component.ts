import {Component, ViewChild} from "@angular/core";
import {Config, Menu, NavController, Platform} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  pages = [
    {title: 'Home', component: HomePage},

  ];

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.content.setRoot(page.component);
  }
}

import { Component, HostListener, OnInit, OnDestroy, Inject } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'marketing-ng';
  mediaSub: Subscription;
  deviceXs: boolean;
  scrolled = false;
  menuText = '#fff';
  backGroundOpacity = "rgba(255, 255, 255, 0)";
  constructor(public mediaObserver: MediaObserver, @Inject(DOCUMENT) document) { }
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  scroll = (event: any): void => {

    const number = event.srcElement.scrollTop;
    this.backGroundOpacity = "rgba(255, 255, 255,"+ number/100+")";

    if (number >= 100) {
      this.scrolled = true;
      this.menuText = '#000';
    } else {
      this.scrolled = false;
      this.menuText = '#fff';
    }
  };
  @HostListener('window:scroll', ['$event'])
  handleScroll(e) {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(e);

    if (scrollOffset >= 100) {
      document.querySelectorAll('.navbar').forEach((c) => {
        // c.classList.add('text-smaller');
        c.classList.remove('transparent');
      });
    } else {
      document.querySelectorAll('.navbar').forEach((c) => {
        c.classList.add('transparent');
        // c.classList.remove('text-smaller');
      });
    }
  }



}

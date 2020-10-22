import { Component, OnInit, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  isChecked = new FormControl(false);
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.isChecked.setValue(this.themeService.isChecked);
  }
  toggleDarkTheme(checked: boolean) {
    if (checked) {
      this.renderer.addClass(document.body, 'black-theme');
    } else {
      this.renderer.removeClass(document.body, 'black-theme');
    }
    this.themeService.setDarkTheme(checked);
  }

}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}
  private _darkTheme = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();
  isChecked:boolean;

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
    this.isChecked = isDarkTheme;
  }

}
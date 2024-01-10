import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 'zone.js';
import { SapphireSearchFieldModule } from './search-field/search-field.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SapphireSearchFieldModule, FormsModule],
  template: `<div
  style="display: flex; align-items: center; justify-content: center; height: 100vh"
>
<div>
  <div style="display: flex; padding: 20px; font-size: 20px">
    <span>Please search here !!! 😉</span>
  </div>
<div>
  <sp-search-field>
    <input
      data-testid= "search-input-field"
      spSearchFieldInput
      aria-label="Search"
      placeholder="Search"
      (spSearchFieldSubmitted)="alert('You have searched for: ' + $event)"
    />
  </sp-search-field>
</div>
</div>
</div>
  `,
})
export class App {
  alert = alert;
}

bootstrapApplication(App);

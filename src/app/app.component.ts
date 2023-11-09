import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random';
  joke = [
    { id: 1, joking: 'Just one small positive thought in the morning can change your whole day..' },
    { id: 2, joking: 'Copportunities dont happen, you create them.' },
    { id: 3, joking: 'Love your family, work super hard, live your passion..' },
    { id: 4, joking: 'It is never too late to be what you might have been...' },
    { id: 5, joking: 'You will face many defeats in life, but never let yourself be defeated.' },
  ];
  randomjoke = 0;
  not: Boolean = false
  random() {
    this.not = true
    setTimeout(() => {
      this.not = false
      this.randomjoke = (this.randomjoke + 1) % this.joke.length
    }, 1000);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      username: "nature",
      imageUri: "assets/imgs/tree.jpeg",
      content: "Saw this awesome tree during my hike today."
    },
    {
      title: "Snowy Mountain",
      username: "mountainLovers",
      imageUri: "assets/imgs/mountain.jpeg",
      content: "Here is a picture of a snowy mountain."
    },
    {
      title: "Mountain Biking",
      username: "biking1222",
      imageUri: "assets/imgs/biking.jpeg",
      content: "I did mountain biking today."
    }
  ];
}

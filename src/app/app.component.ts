import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a leo sed odio pretium lobortis 
      eu in ex. Maecenas accumsan pellentesque sem et vulputate. `,
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a leo sed odio pretium lobortis 
          eu in ex. Maecenas accumsan pellentesque sem et vulputate. `,
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a leo sed odio pretium lobortis 
          eu in ex. Maecenas accumsan pellentesque sem et vulputate. `,
      loveIts: 0,
      created_at: new Date()
    },

  ]

}

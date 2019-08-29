export class Post {
  title: string;
  content: string;
  loveIts: number;
  // tslint:disable-next-line:variable-name
  created_at: Date;

  constructor() {
    this.created_at = new Date();
  }
}

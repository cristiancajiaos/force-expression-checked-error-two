import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-bar',
  standalone: false,
  templateUrl: './bar.html',
  styleUrl: './bar.scss',
})
export class Bar implements OnInit {

  @Input() post: Post = new Post();
  @Output() getPost: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public setPost(id: number) {
    this.getPost.emit(id);
  }


}

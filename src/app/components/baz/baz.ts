import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../classes/post';

@Component({
  selector: 'app-baz',
  standalone: false,
  templateUrl: './baz.html',
  styleUrl: './baz.scss'
})
export class Baz implements OnInit {

  @Input() post: Post = new Post();

  constructor(){

  }

  ngOnInit() {

  }

}

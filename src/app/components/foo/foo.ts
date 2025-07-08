import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { PostService } from '../../services/post-service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-foo',
  standalone: false,
  templateUrl: './foo.html',
  styleUrl: './foo.scss'
})
export class Foo implements OnInit, AfterViewInit {

  public loadingPost: boolean = false;
  public loadingNewPost: boolean = false;
  public post: Post = new Post();

  constructor(
    private postService: PostService,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.getDefaultPost();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  public getDefaultPost(): void {
    this.loadingPost = true;
    this.postService.getPost(1).subscribe(post => {
      this.post = post;
      this.loadingPost = false;
    });
  }

  public newPost(id: number): void {
    this.loadingNewPost = true;
    this.postService.getPost(id).subscribe(post => {
      console.log(post);
      this.post = post;
      this.loadingNewPost = false;
      console.log(this.loadingNewPost);
    });
  }

}

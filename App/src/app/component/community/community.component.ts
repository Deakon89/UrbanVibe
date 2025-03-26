// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-community',
//   standalone: true,
//   imports: [
//     MatCardModule,
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     ReactiveFormsModule,
//     CommonModule
//   ],
//   templateUrl: './community.component.html',
//   styleUrls: ['./community.component.css']
// })
// export class CommunityComponent {
//   comments = [
//     { user: 'Francesco', text: 'Ottima iniziativa!', date: '2024-03-22' },
//     { user: 'Ilenia', text: 'Interessante progetto!', date: '2024-03-21' },
//   ];

//   commentForm!: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.commentForm = this.fb.group({
//       comment: ['', Validators.required]
//     });
//   }

//   addComment() {
//     if (this.commentForm.valid) {
//       const newComment = {
//         user: 'Tu',  // Temporaneo, fino all'autenticazione
//         text: this.commentForm.value.comment,
//         date: new Date().toLocaleString('it-IT')
//       };
//       this.comments.unshift(newComment);
//       this.commentForm.reset();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-community',
  standalone: true,
   imports: [
//      MatCardModule,
//      MatButtonModule,
//      MatFormFieldModule,
//      MatInputModule,
// /    ReactiveFormsModule,
     CommonModule
   ],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];

  constructor(private userService: UserService, private postService: PostService) {}

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfinityScrollComponent } from 'src/app/core/components/infinity-scroll/infinity-scroll.component';
import { LoaderComponent } from 'src/app/core/components/loader/loader.component';
import { AsyncStatePipe } from 'src/app/core/pipes/async-state.pipe';
import { SearchModule } from '../search/search.module';
import { UserBoxComponent } from './user-container/user-box/user-box.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserAvatarComponent } from './shared/user-avatar/user-avatar.component';
import { UserReposComponent } from './shared/user-repos/user-repos.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserContainerComponent,
    UserBoxComponent,
    InfinityScrollComponent,
    LoaderComponent,
    AsyncStatePipe,
    UserAvatarComponent,
    UserReposComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, FontAwesomeModule, SearchModule],
})
export class UsersModule {}

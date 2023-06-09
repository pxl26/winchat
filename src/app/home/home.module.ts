import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './page/home-container/home-container.component';
import { ListConversationComponent } from './component/list-conversation/list-conversation.component';
import { ConversationContainerComponent } from './component/conversation-container/conversation-container.component';
import { ConversationTabComponent } from './component/list-conversation/conversation-tab/conversation-tab.component';
import { GroupMessageComponent } from './component/conversation-container/group-message/group-message.component';
import { MessageComponent } from './component/conversation-container/message/message.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
];

@NgModule({
  declarations: [
    HomeContainerComponent,
    ListConversationComponent,
    ConversationContainerComponent,
    ConversationTabComponent,
    GroupMessageComponent,
    MessageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
})
export class HomeModule {}

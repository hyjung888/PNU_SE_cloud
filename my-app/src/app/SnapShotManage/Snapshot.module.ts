import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {SnapShotRoutingModule} from './SnapShotRouting.module';


import { VMListView } from'./app.VMList';
import {VMSnapShot} from './app.SnapShotList';
import {SnapShotMain} from './SnapShotMain';
import {SnapShotSchedule} from './app.SnapShotSchedule';
import {Scheduler} from './SnapShotCreate';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnapShotRoutingModule    
  ],
  declarations: [
    VMListView,
    SnapShotMain,
    VMSnapShot,
    SnapShotSchedule,
    Scheduler
  ],
})
export class SnapShotModule {}
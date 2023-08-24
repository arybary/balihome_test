import { NgModule } from '@angular/core';
import { HasIssuesPipe } from './pipe/has-issues.pipe';

const pipes = [HasIssuesPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class SharedModule { }

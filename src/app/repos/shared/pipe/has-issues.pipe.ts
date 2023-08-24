import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasIssues',
})
export class HasIssuesPipe implements PipeTransform {
  transform(hasIssues: boolean): string {
    return hasIssues ? '✅' : '❌';
  }
}

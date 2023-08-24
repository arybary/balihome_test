import { HasIssuesPipe } from "./has-issues.pipe";


describe('HasIssuesPipe', () => {
  it('create an instance', () => {
    const pipe = new HasIssuesPipe();
    expect(pipe).toBeTruthy();
  });
});

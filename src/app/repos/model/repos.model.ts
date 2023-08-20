export interface Repos {
  id: number;
  name: string;
  description: string | null;
  language: string;
  has_issues: boolean;
  html_url: string;
}

export class ArticleSearch {

  q: string = "";
  sortBy: string = "";
  from: Date = new Date();
  to: Date = new Date();

  toUrlParams(): string {
    return `q=${encodeURIComponent(this.q)}&sortBy=${encodeURIComponent(this.sortBy)}&from=${encodeURIComponent(this.convertDate(this.from))}&to=${encodeURIComponent(this.convertDate(this.to))}`
  }

  private convertDate(date: Date): string {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    return date.toISOString().split('T')[0]
  }

}
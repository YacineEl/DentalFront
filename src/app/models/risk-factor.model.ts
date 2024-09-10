export class RiskFactor {
  id: number;
  description: string;
  selected: boolean;

  constructor(id: number, description: string, selected: boolean = false) {
    this.id = id;
    this.description = description;
    this.selected = selected;
  }
}

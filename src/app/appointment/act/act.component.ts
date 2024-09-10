import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActService } from '../../service/act.service';
import { Act } from '../../models/act.model';
import { ActTitle } from "../../models/ActTitle";
import { AppointmentService } from "../../service/appointment.service";

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent implements OnInit {
  @Input() appointmentId!: number;
  titles: ActTitle[] = []; // List of titles
  acts: Act[] = [];
  filteredTitles!: Observable<ActTitle[]>;
  titleControl = new FormControl(); // Form control for autocomplete
  description: string = ''; // For the act's description

  constructor(private actService: ActService, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    // Fetch existing titles
    this.actService.getActTitles().subscribe((titles) => {
      this.titles = titles;
      this.filteredTitles = this.titleControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterTitles(value || ''))
      );
    });

    // Fetch existing acts for this appointment
    this.appointmentService.getActsByAppointmentId(this.appointmentId).subscribe((acts) => {
      this.acts = acts;
    });
  }

  private _filterTitles(value: string): ActTitle[] {
    const filterValue = value.toLowerCase();
    return this.titles.filter(title => title.title.toLowerCase().includes(filterValue));
  }

  addAct(): void {
    const selectedTitle = this.titleControl.value.trim();

    if (!selectedTitle) {
      return; // Prevent adding empty title
    }

    // Check if the title exists
    const existingTitle = this.titles.find(title => title.title.toLowerCase() === selectedTitle.toLowerCase());

    if (!existingTitle) {
      // If title doesn't exist, create a new one
      this.actService.addActTitle(selectedTitle).subscribe((createdTitle) => {
        this.titles.push(createdTitle); // Add new title to list
        this.addNewAct(createdTitle.title); // Add new act with newly created title
      });
    } else {
      // If title exists, add act with the selected title
      this.addNewAct(existingTitle.title);
    }
  }

  private addNewAct(title: string): void {
    const selectedTitle = this.titleControl.value;
    const newAct: Act = {
      title: selectedTitle,
      description: this.description,
      appointmentId: this.appointmentId
    };

    // Add act to appointment
    this.appointmentService.addActToAppointment(this.appointmentId, newAct).subscribe((act: Act) => {
      this.acts.push(act); // Push new act to list of acts
      this.clearFields(); // Clear input fields
    });
  }

  private clearFields(): void {
    this.titleControl.setValue(''); // Clear the title input field
    this.description = ''; // Clear the description field
  }
}

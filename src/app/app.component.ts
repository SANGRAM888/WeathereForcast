import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'; 
import { WetherService } from './service/wether.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, HttpClientModule,CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WetherService]
})
export class AppComponent implements OnInit { 
  searchForm!: FormGroup;
  weatherData: any;
  constructor(private fb: FormBuilder,
    private service: WetherService) {}

  ngOnInit() { 
    this.searchForm = this.fb.group({
      city: [null, Validators.required]
    });
  }

  SearchWethere() {
    console.log(this.searchForm.value);
    const city = this.searchForm.get('city')?.value;
    this.service.seachWeatherByCity(this.searchForm.get(['city'])!.value).subscribe((res: any) => {
      console.log(res);
      this.weatherData = res.data;
    });
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements AfterViewInit {

  @ViewChild('counterElement') counterElement?: ElementRef;

  satisfiedCustomers = 0
  projectCompleted = 0
  projectLaunched = 0
  dailyvisits = 0

  constructor() { }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startIntervals()
          observer.disconnect(); 
        }
      });
    });
    observer.observe(this.counterElement?.nativeElement);
}
private startIntervals(): void {
  const interval1 = setInterval(() => {
    if (this.satisfiedCustomers < 3489) {
      this.satisfiedCustomers += 100;
    } else {
      clearInterval(interval1);
    }
  }, 50);

  const interval2 = setInterval(() => {
    if (this.projectLaunched < 4698) {
      this.projectLaunched += 100;
    } else {
      clearInterval(interval2);
    }
  }, 50);

  const interval3 = setInterval(() => {
    if (this.projectCompleted < 3874) {
      this.projectCompleted += 100;
    } else {
      clearInterval(interval3);
    }
  }, 50);

  const interval4 = setInterval(() => {
    if (this.dailyvisits < 1504) {
      this.dailyvisits += 50;
    } else {
      clearInterval(interval4);
    }
  }, 50);
}
}

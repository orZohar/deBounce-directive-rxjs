import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[DoDebounce]'
})
export class DoDebounceDirective {
  @Output() throttling: EventEmitter<InputEvent> = new EventEmitter();
  delay: number = 1000;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    fromEvent<InputEvent>(this._element.nativeElement, 'input').pipe(
      debounceTime(this.delay),
      map((event: any) => {
        return event.target.value;
      }), distinctUntilChanged())
      .subscribe(text => this.throttling.emit(text));
  }
}  
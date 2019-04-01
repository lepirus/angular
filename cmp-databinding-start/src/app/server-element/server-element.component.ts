import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // Type definition for a property
  // @Input(): to make it public to AppComponent, which uses it in app.component.html, [element]="serverElement"
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('Constructor ServerElementComponent called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ServerElementComponent called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit ServerElementComponent called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck ServerElementComponent called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit ServerElementComponent called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ServerElementComponent called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ServerElementComponent called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ServerElementComponent called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ServerElementComponent called!');
  }
}

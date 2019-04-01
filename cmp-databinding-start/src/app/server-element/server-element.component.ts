import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Constructor ServerElementComponent called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ServerElementComponent called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit ServerElementComponent called!');
    console.log('Test Content: ' + this.header.nativeElement.textContent);
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
    console.log('Test Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ServerElementComponent called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ServerElementComponent called!');
  }
}

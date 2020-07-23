import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InversifyInjector } from '@paperbits/common/injection';
import { CoreDesignModule } from '@paperbits/core/core.design.module';
import { ProseMirrorModule } from '@paperbits/prosemirror/prosemirror.module';
import { StylesDesignModule } from '@paperbits/styles/styles.design.module';
import * as ko from 'knockout';

@Component({
  selector: 'app-paperbits',
  templateUrl: './paperbits.component.html',
  styleUrls: ['./paperbits.component.scss'],
})
export class PaperbitsComponent implements OnInit {
  @ViewChild('ref', { static: true })
  public ref: ElementRef;
  public injector = new InversifyInjector();

  constructor() {
    this.injector.bindModule(new CoreDesignModule());
    this.injector.bindModule(new StylesDesignModule());
    this.injector.bindModule(new ProseMirrorModule());

    this.injector.resolve('autostart');
  }

  public async ngOnInit(): Promise<void> {
    ko.applyBindingsToNode(this.ref.nativeElement, { component: 'app' }, null);
  }
}

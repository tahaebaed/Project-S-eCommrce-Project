import { AppToastService } from 'src/app/Services/app-toast.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-app-toast',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
    , host: {'[class.ngb-toasts]': 'true'}
  `,
  templateUrl: './app-toast.component.html',
  styleUrls: ['./app-toast.component.css'],
})
export class AppToastComponent implements OnInit {
  constructor(public toastService: AppToastService) {}
  isTemplate(toast: { textOrTpl: any }) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  ngOnInit(): void {}
}

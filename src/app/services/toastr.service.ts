import { Injectable, Injector } from '@angular/core';
import { ToastrService as Toastr } from 'ngx-toastr';
import { I18nService } from './i18n.service';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastr: Toastr, private injector: Injector) { }

  showToastr(text: string, icon: string) {

    let i18nService = null;
    try {
      i18nService = this.injector.get(I18nService);
    } catch {
      setTimeout(() => this.showToastr(text, icon));
      return;
    }

    i18nService.getTranslation(text).subscribe((text:string) => {
      this.toastr.info(`<i class="bi ${icon}"></i><div>${text}</div>`, undefined, {
        disableTimeOut: false,
        timeOut: 5000,
        tapToDismiss: true,
        enableHtml: true,
        toastClass: 'ngx-toastr ng-star-inserted',
        positionClass: 'toast-bottom-right',
        closeButton: true
      });
    });

  }

}
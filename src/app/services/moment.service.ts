import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { I18nService } from './i18n.service';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  moment: any = moment;

  constructor(private i18nService: I18nService) {
    moment.locale(this.i18nService.getLang());
  }

}
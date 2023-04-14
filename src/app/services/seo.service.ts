import { Injectable, Inject } from '@angular/core';
import { I18nService } from './i18n.service';
import { SeoSocialShareService } from 'ngx-seo';
import { DOCUMENT, Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private i18nService: I18nService, private seoSocialShareService: SeoSocialShareService, @Inject(DOCUMENT) private document: Document, private location: Location) { }

  init(page: string, datas: any = {}) {
    this.setMetas(page, datas);
    this.i18nService.onLangChange.subscribe(
      _ => this.setMetas(page, datas)
    )
  }

  setMetas(page: string, datas: any = {}) {
    let title = `SEO.${page}.TITLE`;
    let description = `SEO.${page}.DESCRIPTION`;
    let keywords = `SEO.${page}.KEYWORDS`;

    this.i18nService.getTranslation([title, description, keywords], datas).subscribe((res) => {
      this.seoSocialShareService.setData({
        title: res[title],
        description: res[description],
        keywords: res[keywords],
        image: './assets/img/og-image.jpg',
        type: 'website'
      });
    });

    let link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', 'x-default');
    this.document.head.appendChild(link);
    link.setAttribute('href','https://idnet.co'+this.location.path());

    let linkFr: HTMLLinkElement = this.document.createElement('link');
    linkFr.setAttribute('rel', 'alternate');
    linkFr.setAttribute('hreflang', 'fr');
    this.document.head.appendChild(linkFr);
    linkFr.setAttribute('href', 'https://fr.idnet.co'+this.location.path());

    let linkEn: HTMLLinkElement = this.document.createElement('link');
    linkEn.setAttribute('rel', 'alternate');
    linkEn.setAttribute('hreflang', 'en');
    this.document.head.appendChild(linkEn);
    linkEn.setAttribute('href', 'https://en.idnet.co'+this.location.path());

  }

}
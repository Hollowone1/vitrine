import { Component, Input, ViewChild, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html'
})
export class AutocompleteInputComponent {

  @ViewChild('autocomplete_input_element') autocompleteInputElement: any;
  @ViewChild('autocomplete_input_value') autocompleteInputValue: any;
  @Input() getDatas: (query: string) => Observable<any>;
  @Input() inputId: string;
  @Input() type: string;
  @Input() form: any;
  @Input() dataName: string = 'name';
  @Input() placeholderValue: string;
  @Input() multiple: boolean = false;
  @Input() required: boolean = false;
  hidden: boolean = true;
  datas: any[] = [];
  selected: number = -1;
  values: any[] = [];
  value: string = '';

  constructor(private renderer: Renderer2, private httpService: HttpService) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target != this.autocompleteInputElement.nativeElement)
        this.hidden = true;
    });

  }

  updateDatas() {
    this.selected = -1;
    this.hidden = false;
    if (!this.multiple && this.value)
      this.value = '';
    this.getDatas(this.autocompleteInputValue.control.value).subscribe((res: any) => {
      if (res.status == 200)
        this.datas = res.datas;
    });
  }

  setHidden(hidden: boolean) {
    if (this.hidden && !hidden && (this.autocompleteInputValue.control.value == ''))
      this.updateDatas();
    else
      this.hidden = hidden;
  }

  keyUp(event: any) {
    if (event.keyCode == 13) {
      if (this.selected != -1) {
        this.addElement(this.datas[this.selected]);
      }
    } else if (event.keyCode == 38) {
      if (this.selected == 0)
        this.selected = this.datas.length - 1;
      else
        this.selected--;
    } else if (event.keyCode == 40) {
      if (this.selected == (this.datas.length - 1))
        this.selected = 0;
      else
        this.selected++;
    } else if (event.keyCode == 27) {
      this.hidden = true;
      this.selected = -1
    }
  }

  addElement(element: any) {
    if (this.multiple) {
      if (!this.values.some((item) => JSON.stringify(item) == JSON.stringify(element)))
        this.values.push(element);
      this.autocompleteInputValue._updateValue('');
    } else {
      this.value = element.url;
      this.autocompleteInputValue._updateValue(element.name);
    }
    this.hidden = true;
    this.selected = -1;
  }

  removeElementFromValues(element: any) {
    this.values.splice(this.values.indexOf(element), 1);
  }

  getValue() {
    if (this.multiple)
      return this.values.map(element => element.url);
    else
      return this.value;
  }

}
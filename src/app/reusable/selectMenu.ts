import { Component, Input } from "@angular/core";

@Component({
    imports: [],
    selector: "app-select",
    standalone: true,
    template: `
    <select [class]="classSelete" aria-label="Default select example">
        @for (item of itemsList; track item; let isFirst = $first) {
            <option [selected]="isFirst" [value]="item" >{{item}}</option>
        }
    </select>
    `
})
export class SelectComponent {
    @Input() options: unknown;
    @Input() classSelete: string = "form-select";
    @Input() itemsList: string[] = [];
}
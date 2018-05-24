import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({name:'values', pure:false})
export class ValuePipe implements PipeTransform
{
    transform(value: any, args: any[]= null): any{
        return Object.keys(value).map(key =>value[key]);
    }
}
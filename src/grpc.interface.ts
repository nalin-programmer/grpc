import { Observable } from 'rxjs';

export interface IGrpcService {
  accumulate(numberArray: INumberArray): Observable<any>;

  getInfoById(id: IString):Observable<any>;

  getHealth(INoArgs):IHealth;
}

interface INumberArray {
  data: number[];
}

interface IString {
  data: string;
}

interface IPerson {
  id:string,
  name: string,
  mis:number
}

interface IHealth {
  status: string;
}

interface INoArgs{}
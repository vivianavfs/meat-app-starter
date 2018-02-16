import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {

	constructor() {}

	static handleError(error: Response | any) {
		let errorMessage: string
		if(error instanceof Response) {
			if(error.status === 0) errorMessage = "No connection - Response is empty"
			else errorMessage = `Erro: ${error.status} - url: ${error.url} - ${error.statusText}`
		}
		else {
			errorMessage = error.toString()
		}
		console.log(errorMessage)
		return Observable.throw(errorMessage)
	}
}
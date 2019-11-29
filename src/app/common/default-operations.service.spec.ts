import {TestBed} from '@angular/core/testing';

import {DefaultOperationsService} from './default-operations.service';

describe('DefaultOperationsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DefaultOperationsService = TestBed.get(DefaultOperationsService);
        expect(service).toBeTruthy();
    });
});

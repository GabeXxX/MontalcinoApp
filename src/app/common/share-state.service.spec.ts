import {TestBed} from '@angular/core/testing';

import {ShareStateService} from './share-state.service';

describe('ShareStateService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ShareStateService = TestBed.get(ShareStateService);
        expect(service).toBeTruthy();
    });
});

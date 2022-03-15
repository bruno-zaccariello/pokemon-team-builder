import { HttpClient } from '@angular/common/http';
import { DebugElement, ElementRef } from '@angular/core';
import {
    TestBed,
    ComponentFixture,
    waitForAsync,
    flush,
    tick,
    fakeAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { asyncScheduler, of, scheduled } from 'rxjs';
import { PokemonPartyService } from '../../services/pokemon-party.service';
import { PokemonService } from '../../services/pokemon.service';
import { getPokemonMock } from '../../tests/mocks/models/pokemon.model.mock';
import { MockPokemonService } from '../../tests/mocks/service/pokemon.service.mock';
import { PokemonComponent } from './pokemon.component';

describe('Component: PokemonComponent', () => {
    let fixture: ComponentFixture<PokemonComponent>;

    let debugComponent: DebugElement;
    let elComponent: HTMLElement;
    let component: PokemonComponent;

    let pokemonService: PokemonService;
    let partyService: PokemonPartyService;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PokemonComponent],
                providers: [
                    { provide: PokemonService, useClass: MockPokemonService },
                    PokemonPartyService,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        pokemonService = TestBed.inject(PokemonService);
        partyService = TestBed.inject(PokemonPartyService);

        fixture = TestBed.createComponent(PokemonComponent);
        debugComponent = fixture.debugElement;
        component = fixture.componentInstance;
    });

    describe('ngOninit()', () => {
        it('should load data on init', fakeAsync(() => {
            const mock = getPokemonMock();
            component.pokemon = mock;

            pokemonService.getByUrl = () => scheduled(of(mock), asyncScheduler);
            component.ngOnInit();
            expect(component.loading).toBeTrue();
            tick();

            expect(component.loading).toBeFalse();
            expect(component.pokemon).toEqual(mock);
        }));
    });

    describe('Add to party', () => {

        beforeEach(fakeAsync(() => {
            const mock = getPokemonMock();
            component.pokemon = mock;

            component.ngOnInit();
            tick();
        }))

        it('Should call addToParty() on icon click', fakeAsync(() => {
            component.loading = false;
            component.editable = false;

            fixture.autoDetectChanges();
            tick();

            spyOn(component, 'addToParty');

            expect(partyService.party.size).toBe(0);

            const addIcon = debugComponent.query(By.css('i.add'));
            addIcon.triggerEventHandler('click', null);

            tick();

            expect(component.addToParty).toHaveBeenCalled();
        }));

        it('should add pokemon to party on addToParty()', () => {
            component.addToParty();

            expect(partyService.party.size).toBe(1);
        });

    });

    describe('Remove from party', () => {

        beforeEach(() => { });
        it('Should call removeFromParty() on icon add click', () => { });
        it('Should remove pokemon from party on addToParty()', () => { });

    });

    describe('editNickname', () => {
        beforeEach(() => { });
        it('Should call editNickname on icon edit-save click', () => { })
        it('Should save the nickname on editNickname()', () => { })
    })

    describe('toggleEdit', () => {
        beforeEach(() => { });
        it('Should call toggleEdit on icon edit click', () => { })
        it('Should toggleEditView on toggleEdit()', () => { })
    })

});
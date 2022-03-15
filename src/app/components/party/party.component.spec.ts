import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { PokemonPartyService } from "../../services/pokemon-party.service";
import { getPokemonMock } from "../../tests/mocks/models/pokemon.model.mock";
import { PartyComponent } from "./party.component"

describe('Component: PartyComponent', () => {

    let fixture: ComponentFixture<PartyComponent>;
    let debugComponent: DebugElement;
    let component: PartyComponent;

    let partyService: PokemonPartyService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PartyComponent],
            providers: [
                PokemonPartyService
            ]
        }).compileComponents();
    }))

    beforeEach(() => {
        partyService = TestBed.inject(PokemonPartyService);

        fixture = TestBed.createComponent(PartyComponent);
        debugComponent = fixture.debugElement;
        component = fixture.componentInstance;
    })

    describe('ngOnInit()', () => {
        it('Should start listening events on init', () => {
            spyOn(component, 'listenEvents');
            component.ngOnInit();

            expect(component.listenEvents).toHaveBeenCalled();
        })
    })

    describe('listenEvents()', () => {

        beforeEach(() => { });

        it('Should add pokemon if add event', () => {
            expect(component.pokemons.size).toBe(0);



            expect(component.pokemons.size).toBeGreaterThan(0);
        })

        it('Should remove pokemon if remove event', () => {
            component.pokemons = new Set([getPokemonMock()]);
            expect(component.pokemons.size).toBeGreaterThan(0);



            expect(component.pokemons.size).toBe(0);
        })

    })

})
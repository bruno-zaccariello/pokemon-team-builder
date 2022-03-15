import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { PokemonService } from "../../services/pokemon.service";
import { MockPokemonService } from "../../tests/mocks/service/pokemon.service.mock";
import { PokemonViewerComponent } from "./pokemon-viewer.component"

describe('Component: PokemonViewerComponent', () => {

    let fixture: ComponentFixture<PokemonViewerComponent>;
    let debugComponent: DebugElement;
    let component: PokemonViewerComponent;

    let pokemonService: PokemonService;

    xdescribe('Another method', () => {
        beforeEach(() => {

            const pkmonService: any = new MockPokemonService();
            component = new PokemonViewerComponent(
                pkmonService
            );

        });
    });

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonViewerComponent],
            providers: [
                { provide: PokemonService, useClass: MockPokemonService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        pokemonService = TestBed.inject(PokemonService);

        fixture = TestBed.createComponent(PokemonViewerComponent);
        debugComponent = fixture.debugElement;
        component = fixture.componentInstance;
    });

    describe('ngOnInit()', () => {
        it('Should load data on init', () => {
            expect(component.pokemons).toBeUndefined();


            expect(component.pokemons.length).toBeGreaterThan(0);
        })
    })

})
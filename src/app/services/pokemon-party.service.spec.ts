import { Actions } from "../models/event-actions.model";
import { PokemonPartyService } from "./pokemon-party.service"

describe('Service: PokemonPartyService', () => {
    let service: PokemonPartyService;

    beforeEach(() => {
        service = new PokemonPartyService();
    })

    describe('addToParty()', () => {

        it('Should add pokemon to party', () => {
            expect(service.partyEmpty).toBeTrue();

            expect(service.party.size).toBe(0);
            expect(service.partyEmpty).toBeFalse();
        });

        it('Should emmit event on inclusion', () => {
            service.listenEvents()
                .subscribe((event) => {
                    expect(event.action).toBe(Actions.add);
                    expect(event.pokemon).toBe(({} as any));
                })
        })

    })

    describe('removeFromParty()', () => {

        it('Should remove pokemon from party', () => {
            expect(service.partyEmpty).toBeTrue();

            expect(service.party.size).toBe(0);
            expect(service.partyEmpty).toBeFalse();
        });

        it('Should emmit event on removal', () => {
            service.listenEvents()
                .subscribe((event) => {
                    expect(event.action).toBe(Actions.remove);
                    expect(event.pokemon).toBe(({} as any));
                })
        })

    })

    describe('pokemonInParty()', () => {

        beforeEach(() => {

        });

        it('Should check if pokemon is in party', () => {

            expect(service.pokemonInParty(({} as any))).toBeTrue();
        });

        it('Should check if pokemon is not party', () => {

            expect(service.pokemonInParty(({} as any))).toBeFalse();
        });

    })


})
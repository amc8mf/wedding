export class RsvpForm {
    constructor(
        public email?: string,
        public name?: string,
        public willAttend?: boolean,
        public additionalGuests?: string,
        public dietaryRestrictions?: string
    ) {}
}

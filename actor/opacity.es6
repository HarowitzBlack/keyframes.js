import Actor from "./index";
export default class extends Actor{
    constructor(from, to, duration, easing){
        super();
        this.addKeyframe(0, {
            opacity: from
        });
        this.addKeyframe(duration, {
            opacity: to
        }, easing);
    }
}
export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No $root provided for DomListeners');
        }
        this.$root = $root;
        console.log(this.$root);
    }
}

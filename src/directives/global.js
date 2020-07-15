export const focus = {
    inserted: function(el, binding, vnode) {
        el.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                vnode.context.focus_arg.selected = false;
            }
        });
        el.focus();
    }
}